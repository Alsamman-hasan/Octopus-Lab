import { TesetAsyncThunk } from "shared/lib/tests/TesetAsyncThunk/TesetAsyncThunk";
import { UiActions } from "entities/ToastUi";
import { sendEmail } from "./senderEmail";

describe("sendEmail.test", () => {
  test("success sendEmail ", async () => {
    const senddingData = "test"
    const thunk = new TesetAsyncThunk(sendEmail);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: senddingData }))
    const result = await thunk.callThunk({ name: "123", email: "123" });
    expect(thunk.dispatch).toHaveBeenCalledWith(UiActions.setStatus({ message: senddingData , status:"success"}))
    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(senddingData);
  })

  test("error login", async () => {
    const thunk = new TesetAsyncThunk(sendEmail);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ name: "123", email: "123" });
    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toBe("error")
  })
})