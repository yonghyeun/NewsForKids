import { describe, expect, it } from "@jest/globals";
import { either } from "./either";

describe("either", () => {
  describe("bool : boolean", () => {
    it("left : func , right : func", () => {
      const result = either(
        true,
        () => "left",
        () => "right",
      );
      expect(result).toBe("right");
    });

    it("left : not func , right : not func", () => {
      const result = either(true, "left", "right");
      expect(result).toBe("right");
    });
  });

  describe("bool : func", () => {
    it("left : func , right : func", () => {
      const result = either(
        () => true,
        () => "left",
        () => "right",
      );
      expect(result).toBe("right");
    });

    it("left : not func , right : not func", () => {
      const result = either(() => true, "left", "right");
      expect(result).toBe("right");
    });
  });
});
