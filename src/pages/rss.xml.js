import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/?$/, '/');
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
  return rss({
    title: 'Aegean Dispatch',
    description: 'Notes on cinema, tech, sports, and books from the Aegean coast.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${base}posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
