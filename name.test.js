const zeroxName = require('./name');

test('address with checksum', () => {
  expect(zeroxName("0x96203A314504Fb1a14d40c6Bf9D08d3eBad3425F")).toBe('TrueBawdyHabit');
});

test('address without checksum', () => {
  expect(zeroxName("0x96203a314504fb1a14d40c6bf9d08d3ebad3425f")).toBe('TrueBawdyHabit');
});

test('address without 0x prefix', () => {
  expect(zeroxName("96203a314504fb1a14d40c6bf9d08d3ebad3425f")).toBe('TrueBawdyHabit');
});

test('invalid address without 0x prefix', () => {
  expect(zeroxName("96203a314504fb1a14d40c6bf9d08d3ebad3425fZ")).toBe('');
});

test('invalid address with 0x prefix', () => {
  expect(zeroxName("0x96203a314504fb1a14d40c6bf9d08d3ebad3425Z")).toBe('');
});
