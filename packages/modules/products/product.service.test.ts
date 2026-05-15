/// <reference types="jest" />
import { matchesSearch } from './product.service';

const mockProduct = {
  title: 'Blue Running Shoes',
  description: 'Great for trails',
  category: 'footwear',
  status: 'published' as const,
  variants: [],
  id: '1',
  handle: 'blue-running-shoes',
  thumbnail: '',
  images: [],
  tags: [],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

it('matches a single word', () => {
  expect(matchesSearch(mockProduct, 'blue')).toBe(true);
});

it('matches multiple words', () => {
  expect(matchesSearch(mockProduct, 'blue running')).toBe(true);
});

it('returns false when no match', () => {
  expect(matchesSearch(mockProduct, 'purple hat')).toBe(false);
});

it('is case insensitive', () => {
  expect(matchesSearch(mockProduct, 'BLUE')).toBe(true);
});