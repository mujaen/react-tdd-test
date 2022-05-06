import {sum} from './sum';
import person from "./person";

describe('test index', () => {
   test('sums 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
   }) ;

   test('person name age', () => {
        expect(person('minho', 33)).toEqual({name: 'minho', age: 33});
   });
});