import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Aegean Dispatch',
    description: 'Notes on cinema, tech, sports, and books from the Aegean coast.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/aegean-dispatch/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
