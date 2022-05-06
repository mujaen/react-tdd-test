import {sum, person, range} from './index';

describe('test index', () => {
    it('sums 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    }) ;

    it('person name age', () => {
        expect(person('minho', 33)).toEqual({name: 'minho', age: 33});
    });

    it('has 2', () => {
        expect(range(1, 3)).toContain(2);
    });
});