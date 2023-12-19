import { sum } from "./sum";

describe("test sum fn", () => {
    it("Harus menampilkan nilai", () => {
        expect(sum(1, 2)).toBe(3);
    });
})