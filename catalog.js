import { decks } from './decks.js';
export const categories = ['全部題庫', ...new Set(decks.map(deck => deck.category))];
// 搜尋只針對題庫資訊，避免遊玩前洩漏題目。
export function filterDecks(query = '', category = '全部題庫') {
  const normalized = query.trim().toLocaleLowerCase('zh-Hant');
  return decks.filter(deck =>
    (category === '全部題庫' || deck.category === category) &&
    `${deck.name} ${deck.description}`.toLocaleLowerCase('zh-Hant').includes(normalized)
  );
}
