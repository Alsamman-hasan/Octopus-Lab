import { classNames } from "./classNames";

describe("classNamestest", () => {
  test("with only frist param", () => {
    expect(classNames("somthing")).toBe("somthing");
  });

  test("with additional class", () => {
    const expected = "somthing additionalClass1 additionalClass2";
    expect(
      classNames("somthing", {}, ["additionalClass1", "additionalClass2"]),
    ).toBe(expected);
  });

  test("with mods", () => {
    const expected =
      "somthing additionalClass1 additionalClass2 hovered scrollble";
    expect(
      classNames("somthing", { hovered: true, scrollble: true }, [
        "additionalClass1",
        "additionalClass2",
      ]),
    ).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "somthing additionalClass1 additionalClass2 hovered";
    expect(
      classNames("somthing", { hovered: true, scrollble: false }, [
        "additionalClass1",
        "additionalClass2",
      ]),
    ).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "somthing additionalClass1 additionalClass2 hovered";
    expect(
      classNames("somthing", { hovered: true, scrollble: undefined }, [
        "additionalClass1",
        "additionalClass2",
      ]),
    ).toBe(expected);
  });
});
