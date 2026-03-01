import { merge } from './merge';

describe('Merge Function Performance & Logic', () => {
    test('should merge three arrays where the third collection is sorted max-to-min', () => {
        const c1 = [1, 5, 9];
        const c2 = [2, 6, 10];
        const c3 = [11, 7, 3];
        
        const expected = [1, 2, 3, 5, 6, 7, 9, 10, 11];
        
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should handle collections with varying lengths accurately', () => {
        const c1 = [1];
        const c2 = [2, 3];
        const c3 = [10, 5];
        
        const expected = [1, 2, 3, 5, 10];
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should handle empty arrays without failing', () => {
        expect(merge([], [1], [])).toEqual([1]);
    });

    test('should handle collections with negative values correctly', () => {
        const c1 = [-1];
        const c2 = [2, 3];
        const c3 = [10, -5];
        
        const expected = [-5, -1 ,2, 3, 10];
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

        test('should handle collections with duplicates correctly', () => {
        const c1 = [-1, -1];
        const c2 = [-1, 2];
        const c3 = [3, -5];
        
        const expected = [-5, -1 ,-1, -1, 2, 3];
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

            test('should throw error if input arrays are not sorted', () => {
        const c1 = [-1, 5];
        const c2 = [-1, 2];
        const c3 = [3, 10, -5]; // min to max
        
        expect(() => merge(c1, c2, c3)).toThrow("Input collections are not properly sorted.");
    });
});