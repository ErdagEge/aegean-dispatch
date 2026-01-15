export interface PostFilterItem {
  title: string;
  description: string;
  tags: string[];
}

export interface PostFilterState {
  query: string;
  activeTags: string[];
}

export function matchesPost(item: PostFilterItem, state: PostFilterState): boolean {
  const query = state.query.trim().toLowerCase();
  const activeTags = state.activeTags.map((tag) => tag.toLowerCase());
  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const tags = item.tags.map((tag) => tag.toLowerCase());

  const matchesQuery = !query || title.includes(query) || description.includes(query);
  const matchesTags = activeTags.length === 0 || activeTags.every((tag) => tags.includes(tag));

  return matchesQuery && matchesTags;
}
