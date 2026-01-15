import { describe, expect, it } from 'vitest';
import { readingTime } from '../src/utils/readingTime';

describe('readingTime', () => {
  it('returns at least 1 minute for empty input', () => {
    expect(readingTime('')).toBe(1);
  });

  it('rounds up based on words per minute', () => {
    const words = Array.from({ length: 201 }, () => 'word').join(' ');
    expect(readingTime(words, 200)).toBe(2);
  });

  it('handles irregular whitespace', () => {
    expect(readingTime('one   two\nthree', 200)).toBe(1);
  });
});
