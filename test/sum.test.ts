import sum from "../src/sum";

describe("sum should", () => {
    it("be able to get sum of two numbers", () => {
        expect(sum(1, 1)).toEqual(2);
    });
});