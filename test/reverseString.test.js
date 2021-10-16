import reverseString from "../modules/reverseString";

test('adcd -> dcda', () =>{
    expect(reverseString('adcd')).toBe('dcda');
});

test('\'\' -> \'\'', () =>{
    expect(reverseString('')).toBe('');
});

test('null', () =>{
    expect(reverseString()).toBe('Error');
});

test('a -> a', () =>{
    expect(reverseString('a')).toBe('a');
});