import calculator from "../modules/calculator";

test('add + & -',() => {
    expect(calculator.add(-3,5)).toBe(2);
});

test('add integer and null', () => {
    expect(calculator.add(10,'')).toBe('Error');
});

test('add integer and string Number', () => {
    expect(calculator.add(10,'2')).toBe(12);
});

test('subtract 2 integer', () => {
    expect(calculator.subtract(2,-12)).toBe(14);
});

test('subtract integer and null', () => {
    expect(calculator.subtract(10,'')).toBe('Error');
});

test('divide 2 integer', () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
});

test('divide by 0', () => {
    expect(calculator.divide(10, 0)).toBe("Error");
});

test('divide get float and display 2 decimal', () => {
    expect(calculator.divide(15, 8)).toBe(1.88);
});

test('multiple 2 integer', () => {
    expect(calculator.multiply(22, 7)).toBe(154);
});

test('multiple integer and string interger', () => {
    expect(calculator.multiply('-1', 7)).toBe(-7);
});