import { SenderSchema } from "../types/senderSchema";
import { senderReduser, setSendDats } from "./SenderSlice";

describe("SenderSlice.test", () => {
  test("", () => {
    const state: SenderSchema = {
      hasError: false,
      loading: false,
      message: "Message"
    }
    expect(senderReduser(state, setSendDats({
      hasError: false,
      loading: false,
      message: "Message"
    })))
      .toEqual({
        hasError: false,
        loading: false,
        message: "Message"
      })
  })

  test("", () => {
    const state: SenderSchema = {
      hasError: false,
      loading: false,
      message: "Message"
    }
    expect(senderReduser(state, setSendDats({
      hasError: true,
      loading: false,
      message: "Message"
    })))
      .toEqual({
        hasError: true,
        loading: false,
        message: "Message"
      })
  })
})