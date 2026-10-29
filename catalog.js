import { decks } from './decks.js';
import { questionParts } from './game.js';
// 混合題庫按中文主名稱去重，並優先保留資工／電機的中英版本。
const mixedWords = new Map();
for (const deck of decks) {
  for (const word of deck.words) {
    const { primary, english } = questionParts(word);
    if (!mixedWords.has(primary) || english) mixedWords.set(primary, word);
  }
}
export const allDeck = {
  id: 'all', icon: '✦', name: '所有題庫', category: '全部題庫',
  description: '所有主題混在一起，下一題什麼都有可能！', color: '#f6c94c',
  words: [...mixedWords.values()],
};
const playableDecks = [allDeck, ...decks];
export const categories = ['全部題庫', ...new Set(decks.map(deck => deck.category))];
// 搜尋只針對題庫資訊，避免遊玩前洩漏題目。
export function filterDecks(query = '', category = '全部題庫') {
  const normalized = query.trim().toLocaleLowerCase('zh-Hant');
  return playableDecks.filter(deck =>
    (category === '全部題庫' || deck.category === category) &&
    `${deck.name} ${deck.description}`.toLocaleLowerCase('zh-Hant').includes(normalized)
  );
}
