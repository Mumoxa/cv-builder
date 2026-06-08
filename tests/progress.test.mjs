import assert from 'node:assert/strict';
import test from 'node:test';

function score(jobs, skills) {
  let value = 0;
  if (jobs.length) value += 50;
  if (skills.length) value += 30;
  if (jobs.some((item) => item.notes.length)) value += 20;
  return value;
}

test('empty input returns zero', () => {
  assert.equal(score([], []), 0);
});

test('complete input returns one hundred', () => {
  assert.equal(score([{ notes: ['done'] }], [{}]), 100);
});
