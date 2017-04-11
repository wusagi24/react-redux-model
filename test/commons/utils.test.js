import assert from 'assert';
import { strComparator, intComparator } from '../../src/commons/utils';

describe('util functions', () => {
  describe('文字列コンパレータ strComparator', () => {
    it('文字列同士の比較が正常に動作する', () => {
      const strA = 'a';
      const strB = 'b';
      assert.strictEqual(strComparator(strA, strB), -1);
      assert.strictEqual(strComparator(strB, strA), 1);
      assert.strictEqual(strComparator(strA, strA), 0);
    });
  });

  describe('数値コンパレータ intComparator', () => {
    it('数値同士の比較が正常に動作する', () => {
      const int1 = 1;
      const int2 = 2;
      assert.strictEqual(intComparator(int1, int2), -1);
      assert.strictEqual(intComparator(int2, int1), 1);
      assert.strictEqual(intComparator(int1, int1), 0);
    });
  });
});
