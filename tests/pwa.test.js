import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('manifest.webmanifest', root), 'utf8'));
test('install manifest is self-contained under the GitHub Pages project path', () => {
  assert.ok(manifest.name);
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.start_url, './');
  assert.equal(manifest.scope, './');
  const base = new URL('https://example.com/guess-party/');
  for (const path of [manifest.start_url, manifest.scope, ...manifest.icons.map(icon => icon.src)]) {
    assert.ok(new URL(path, base).href.startsWith(base.href));
  }
});
test('installation icons exist at their declared PNG dimensions', () => {
  for (const size of [192, 512]) {
    assert.ok(manifest.icons.some(icon => icon.sizes === `${size}x${size}` && icon.purpose === 'any'));
  }
  for (const icon of manifest.icons) {
    const bytes = readFileSync(new URL(icon.src, root));
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    const [width, height] = icon.sizes.split('x').map(Number);
    assert.equal(bytes.readUInt32BE(16), width);
    assert.equal(bytes.readUInt32BE(20), height);
  }
});
