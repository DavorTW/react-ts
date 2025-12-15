import {describe, expect, test} from 'vitest';
import { add, subtrac, multiply } from './math.helper';


describe("add", () => {
  test("should add two positive numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

    // ! 2. Act
        const result = subtrac(a, b);

    // ! 3. Assert
        expect(result).toBe(a - b);
    })

    test('should subtract two negative numbers', () => {
        // ! 1. Arrange
        const a = 4;
        const b = 5;

        // ! 2. Act
        const result = subtrac(a, b);

        // ! 3. Assert
        expect(result).toBe(a - b);
    })
})

describe('multiply', () => {
    test('should multiply a number by zero', () => {
        const a = 2;
        const b = 0;

        const result = multiply(a, b);
        expect(result).toBe(a*b);
    })
    test('should multiply any number', () => {
        const a = 2;
        const b = -5;

        const result = multiply(a, b);
        expect(result).toBe(a*b);
    })
})