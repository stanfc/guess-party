import test from 'node:test';
import assert from 'node:assert/strict';
import { shuffle, screenTilt, TiltGate } from '../game.js';
import { decks } from '../decks.js';
test('shuffle keeps unique source words without mutating input',()=>{const input=['a','b','c','a'];const result=shuffle(input,()=>0);assert.deepEqual([...result].sort(),['a','b','c']);assert.equal(input.length,4);});
test('orientation recognizes vertical, face up and face down in both landscape directions',()=>{assert.ok(Math.abs(screenTilt(0,90))<.001);assert.ok(Math.abs(screenTilt(0,-90))<.001);assert.equal(screenTilt(0,0),1);assert.equal(screenTilt(180,0),-1);assert.equal(screenTilt(null,0),null);});
test('tilt requires upright calibration, sustained flip and return to upright',()=>{const gate=new TiltGate();assert.equal(gate.update(1,0),null);gate.update(0,10);assert.equal(gate.update(-1,20),null);assert.equal(gate.update(-1,100),null);assert.equal(gate.update(-1,200),'correct');assert.equal(gate.update(-1,500),null);gate.update(0,600);gate.update(1,700);assert.equal(gate.update(1,900),'skip');});
test('shaking near the threshold cannot trigger an answer',()=>{const gate=new TiltGate();gate.update(0,0);gate.update(.9,100);gate.update(.5,250);assert.equal(gate.update(.9,300),null);assert.equal(gate.update(.9,400),null);});
test('all decks have at least 50 unique nonempty words and distinct IDs',()=>{assert.equal(new Set(decks.map(d=>d.id)).size,decks.length);for(const d of decks){assert.ok(d.words.length>=50);assert.equal(new Set(d.words).size,d.words.length);assert.ok(d.words.every(w=>w.trim().length>0));}});
