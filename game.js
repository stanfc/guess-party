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
export class TiltGate {
  constructor() { this.ready = false; this.candidate = null; this.since = 0; }
  update(value, now) {
    if (value === null) return null;
    if (Math.abs(value) < 0.28) { this.ready = true; this.candidate = null; return null; }
    if (!this.ready) return null;
    const action = value > 0.72 ? 'skip' : value < -0.72 ? 'correct' : null;
    if (!action) { this.candidate = null; return null; }
    if (action !== this.candidate) { this.candidate = action; this.since = now; return null; }
    if (now - this.since < 160) return null;
    this.ready = false; this.candidate = null;
    return action;
  }
}
