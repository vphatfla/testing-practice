import capitalize from "../modules/capitalize";

test('wi WU wi Wu -> Wi WU wi Wu', ()=>{
    expect(capitalize('wi WU wi Wu')).toBe('Wi WU wi Wu');
});

test(' \'\' -> \'\'', ()=>{
    expect(capitalize('')).toBe('');
});

test(' !123 -> 123', ()=>{
    expect(capitalize('!123')).toBe('!123');
})