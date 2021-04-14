import { addition, subtraction, multiplication, division } from '..'

describe('Checking addition ation', () => {
  test('2 + 3 is equal to 5', () => {
    expect(addition(2, 3)).toBe(5);
  })

  test('2 + -3 is equal to -1', () => {
    expect(addition(2, -3)).toBe(-1);
  })

  test('2 + "3" is equal to NaN', () => {
    expect(addition(2, "3")).toBe(NaN);
  })

  test('2 + undefined is equal to undefined', () => {
    expect(addition(2, undefined)).toBe(undefined);
  })
})

describe('Checking subtraction ation', () => {
  test('22 - 13 is equal to 9', () => {
    expect(subtraction(22, 13)).toBe(9);
  })

  test('-10 - 8 is equal to -18', () => {
    expect(subtraction(-10, 8)).toBe(-18);
  })

  test('32 + "3" is equal to NaN', () => {
    expect(subtraction(32, "3")).toBe(NaN);
  })

  test('15 + undefined is equal to undefined', () => {
    expect(subtraction(15, undefined)).toBe(undefined);
  })
})

describe('Checking multiplication ation', () => {
  test('10 * 10 is equal to 100', () => {
    expect(multiplication(10, 10)).toBe(100);
  })

  test('-10 * 80 is equal to -800', () => {
    expect(multiplication(-10, 80)).toBe(-800);
  })

  test('3 * "3" is equal to NaN', () => {
    expect(multiplication(3, "3")).toBe(NaN);
  })

  test('30 * undefined is equal to undefined', () => {
    expect(multiplication(30, undefined)).toBe(undefined);
  })
})

describe('Checking division ation', () => {
  test('10 / 10 is equal to 100', () => {
    expect(division(10, 10)).toBe(1);
  })

  test('-100 / -25 is equal to -4', () => {
    expect(division(-100, 25)).toBe(-4);
  })

  test('20 / "4" is equal to NaN', () => {
    expect(division(20, "4")).toBe(NaN);
  })

  test('7 / undefined is equal to undefined', () => {
    expect(division(30, undefined)).toBe(undefined);
  })
})