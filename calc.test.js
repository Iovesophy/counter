import {inc,dec} from './calc.js';

test('inc', () => {
    expect(inc("1")).toBe("2");
});

test('dec', () => {
    expect(dec("1")).toBe("0");
});
