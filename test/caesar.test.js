import caesar from '../modules/caesar';
test('plan 1: j mpwf zpv -> i love you', () =>{
    expect(caesar('j mpwf zpv', -1)).toBe('i love you');
});

test('plan -2: bdf a -> z bdy', () =>{
    expect(caesar('bdfa', )).toBe('z bdy');
});