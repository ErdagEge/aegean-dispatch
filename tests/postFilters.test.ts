import { describe, expect, it } from 'vitest';
import { matchesPost } from '../src/utils/postFilters';

describe('matchesPost', () => {
  const item = {
    title: 'Quiet Notes from the Shoreline',
    description: 'Essays on cinema and tech',
    tags: ['Cinema', 'Tech']
  };

  it('matches when query appears in title', () => {
    expect(matchesPost(item, { query: 'shore', activeTags: [] })).toBe(true);
  });

  it('matches when query appears in description', () => {
    expect(matchesPost(item, { query: 'tech', activeTags: [] })).toBe(true);
  });

  it('matches when all active tags are present', () => {
    expect(matchesPost(item, { query: '', activeTags: ['cinema'] })).toBe(true);
  });

  it('does not match when a required tag is missing', () => {
    expect(matchesPost(item, { query: '', activeTags: ['sports'] })).toBe(false);
  });
});
