import test from 'node:test';
import assert from 'node:assert/strict';
import { shuffle, screenTilt, TiltGate } from '../game.js';
import { decks } from '../decks.js';
import { categories, filterDecks } from '../catalog.js';
test('shuffle keeps unique source words without mutating input',()=>{const input=['a','b','c','a'];const result=shuffle(input,()=>0);assert.deepEqual([...result].sort(),['a','b','c']);assert.equal(input.length,4);});
test('orientation recognizes vertical, face up and face down in both landscape directions',()=>{assert.ok(Math.abs(screenTilt(0,90))<.001);assert.ok(Math.abs(screenTilt(0,-90))<.001);assert.equal(screenTilt(0,0),1);assert.equal(screenTilt(180,0),-1);assert.equal(screenTilt(null,0),null);});
test('tilt requires upright calibration, sustained flip and return to upright',()=>{const gate=new TiltGate();assert.equal(gate.update(1,0),null);gate.update(0,10);assert.equal(gate.update(-1,20),null);assert.equal(gate.update(-1,100),null);assert.equal(gate.update(-1,200),'correct');assert.equal(gate.update(-1,500),null);gate.update(0,600);gate.update(1,700);assert.equal(gate.update(1,900),'skip');});
test('shaking near the threshold cannot trigger an answer',()=>{const gate=new TiltGate();gate.update(0,0);gate.update(.9,100);gate.update(.5,250);assert.equal(gate.update(.9,300),null);assert.equal(gate.update(.9,400),null);});
test('all decks have at least 150 unique nonempty words and distinct IDs',()=>{assert.equal(new Set(decks.map(d=>d.id)).size,decks.length);for(const d of decks){assert.ok(d.words.length>=150, `${d.name} has only ${d.words.length} words`);assert.equal(new Set(d.words).size,d.words.length);assert.ok(d.words.every(w=>w.trim().length>0));}});

test('requested topics are present, including specialist legal and dinosaur vocabulary', () => {
  for (const id of ['geography','animals','idioms','daily','jobs','songs','law','dinosaurs']) {
    assert.ok(decks.some(deck => deck.id === id), `Missing topic: ${id}`);
  }
  assert.ok(decks.find(d => d.id === 'law').words.includes('容許構成要件錯誤'));
  const dinosaurWords = decks.find(d => d.id === 'dinosaurs').words;
  for (const nonDinosaur of ['翼龍','滄龍','蛇頸龍','魚龍','盤龍']) assert.ok(!dinosaurWords.includes(nonDinosaur));
});
test('catalog supports name, description, combined category filters and reset', () => {
  assert.equal(filterDecks().length, decks.length);
  assert.deepEqual(filterDecks('  法律  ').map(d => d.id), ['law']);
  assert.deepEqual(filterDecks('神祇').map(d => d.id), ['fantasy']);
  assert.equal(filterDecks('法律', '輕鬆入門').length, 0);
  assert.equal(filterDecks('法律', '硬核挑戰')[0].id, 'law');
  assert.equal(filterDecks('不存在的題庫').length, 0);
  assert.equal(filterDecks('<img src=x onerror=alert(1)>').length, 0);
  assert.ok(categories.includes('全部題庫'));
  assert.ok(decks.every(d => categories.includes(d.category)));
});
