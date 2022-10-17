import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StorProvider";
import { getSenderEmailError, getSenderEmailLoading, getSenderEmailMessage } from "./getSenderEmailValue";


describe("getSenderEmailLoading", () => {
  test("rgetSenderEmailLoading", () => {
    const state : DeepPartial<StateSchema> = {
      mailes:{
        loading: true,
      }
    }
    expect(getSenderEmailLoading(state as StateSchema)).toEqual(true);
  })

  test("getSenderEmailError", () => {
    const state: DeepPartial<StateSchema> = {
      mailes: {
        hasError: false
      }
    }
    expect(getSenderEmailError(state as StateSchema)).toEqual(false);
  })

  test("getSenderEmailMessage", () => {
    const state: DeepPartial<StateSchema> = {
      mailes: {
        message:"test"
      }
    }
    expect(getSenderEmailMessage(state as StateSchema)).toEqual("test");
  })


})