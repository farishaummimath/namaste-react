import {sumfunc} from '../sum';

test('sum of 2 postive numbers', () => {
    expect(sumfunc(2, 3)).toBe(5);
    expect(sumfunc(2, 3)).not.toBe(4);
});
