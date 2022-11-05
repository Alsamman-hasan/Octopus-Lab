import { SenderSchema } from "../types/senderSchema";
import { senderEmailActions, senderEmailReducer } from "./senderEmailSlice";

describe("senderEmails.test", () => {
  test("test set email", () => {
    const state: DeepPartial<SenderSchema> = {
      email: "test@mail.ru",
      isValidate: true,
    };
    expect(
      senderEmailReducer(
        state as SenderSchema,
        senderEmailActions.setEmail("test@mail.ru"),
      ),
    ).toEqual({ email: "test@mail.ru", isValidate: true });
  });

  test("test set name", () => {
    const state: DeepPartial<SenderSchema> = { name: "123" };
    expect(
      senderEmailReducer(
        state as SenderSchema,
        senderEmailActions.setName("123"),
      ),
    ).toEqual({ name: "123" });
  });
  test("test set compony", () => {
    const state: DeepPartial<SenderSchema> = { company: "123" };
    expect(
      senderEmailReducer(
        state as SenderSchema,
        senderEmailActions.setCompony("123"),
      ),
    ).toEqual({ company: "123" });
  });
  test("test set phone", () => {
    const state: DeepPartial<SenderSchema> = { phone: "123" };
    expect(
      senderEmailReducer(
        state as SenderSchema,
        senderEmailActions.setPhone("123"),
      ),
    ).toEqual({ phone: "123" });
  });
  test("test set project", () => {
    const state: DeepPartial<SenderSchema> = { project: "123" };
    expect(
      senderEmailReducer(
        state as SenderSchema,
        senderEmailActions.setProject("123"),
      ),
    ).toEqual({ project: "123" });
  });
});
