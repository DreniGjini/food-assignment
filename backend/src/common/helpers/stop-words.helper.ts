export const stopWords = ['in', 'on', 'at', 'with', 'the', 'and', 'or', 'of'];

export function filterSearchWords(searchTerm: string): string[] {
  return searchTerm
    .toLowerCase()
    .trim()
    .split(' ')
    .filter((word) => word.length > 0 && !stopWords.includes(word));
}
