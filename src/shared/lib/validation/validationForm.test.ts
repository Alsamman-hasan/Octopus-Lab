import { validatorEmail } from "./validationForm";

describe("validatorEmailTest", () => {
  test("first Test", () => {
    expect(validatorEmail("somthing")).toBe(false);
  })

  test("second Test", () => {
    expect(validatorEmail("somthing@gmail.com")).toBe(true);
  })

  test("without @", () => {
    expect(validatorEmail("somthinggmail.com")).toBe(false);
  })

  test("without .test", () => {
    expect(validatorEmail("somthing@gmailcom")).toBe(false);
  })

  test("without test@", () => {
    expect(validatorEmail("@gmailcom")).toBe(false);
  })

})