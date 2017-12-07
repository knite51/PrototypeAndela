import expect from 'expect';
import { arr, arrString } from '../../filter';

describe('Filter', () => {
  it("should return a string 'Ayo'", () => {
    const result = arr();
    expect(result).toBe('Ayo');
  });

  it('Checks that input parameter is an array', () => {
    const result = arrString('thomas');
    const result2 = arrString([1, 2, 3]);
    expect(result).toBe('Argument is not an Array');
    expect(Array.isArray(result2)).toBe(true);
    expect(result2).toEqual([]);
    expect(result2.length).toBe(0);
  });

  it('filters a given array appropriately', () => {
    const dataArray = ['Ayo', 'Ore', true, {
      title: 'Home Alone',
    }, undefined, 15, null];
    expect(arrString(dataArray)).toEqual(['Ayo', 'Ore']);
    expect(typeof arrString(dataArray)).toBe('object');
    expect(Array.isArray(arrString(dataArray))).toBe(true);
  });
});
