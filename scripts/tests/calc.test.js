const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        })
    });
    test("should return 71 for 40 + 31", () => {
        expect(addition(40,31)).toBe(71);
    });
    describe("Subtraction function", () => {
        
    });
    describe("Multiplication function", () => {
        
    });
    describe("Division function", () => {
        
    });
}) 