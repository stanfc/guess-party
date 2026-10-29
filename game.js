// 中英題目仍是一個字串，作答與成績可保留完整名稱。
export function questionParts(question) {
  const match = /^(.+?)（([^（）]+)）$/u.exec(question);
  return match ? { primary: match[1], english: match[2] } : { primary: question, english: null };
}
export function shuffle(words, random = Math.random) {
  const result = [...new Set(words)];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
// Screen normal's vertical component: positive = screen toward sky (skip).
// Works in either landscape direction without depending on screen orientation APIs.
export function screenTilt(beta, gamma) {
  if (!Number.isFinite(beta) || !Number.isFinite(gamma)) return null;
  return Math.cos(beta * Math.PI / 180) * Math.cos(gamma * Math.PI / 180);
}
// Vertical component equals sin(angle from upright).
const FLIP_THRESHOLD = Math.sin(40 * Math.PI / 180);
export class TiltGate {
  constructor() { this.ready = false; this.candidate = null; this.since = 0; }
  update(value, now) {
    if (value === null) return null;
    if (Math.abs(value) < 0.28) { this.ready = true; this.candidate = null; return null; }
    if (!this.ready) return null;
    const action = value >= FLIP_THRESHOLD ? 'skip' : value <= -FLIP_THRESHOLD ? 'correct' : null;
    if (!action) { this.candidate = null; return null; }
    if (action !== this.candidate) { this.candidate = action; this.since = now; return null; }
    if (now - this.since < 80) return null;
    this.ready = false; this.candidate = null;
    return action;
  }
}

export function parseDuration(value) {
  const text = String(value).trim();
  if (!/^\d+$/.test(text)) return null;
  const seconds = Number(text);
  return Number.isInteger(seconds) && seconds >= 1 && seconds <= 3600 ? seconds : null;
}
