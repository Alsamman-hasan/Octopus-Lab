import { createSelector } from "@reduxjs/toolkit";
import { SenderSchema } from "../../types/senderSchema";
import { getSenderEmail } from "../getSenderEmail/getSenderEmail";

export const getSenderEmailError = createSelector(
  getSenderEmail,
  (email: SenderSchema) => email.hasError
)

export const getSenderEmailMessage = createSelector(
  getSenderEmail,
  (email: SenderSchema) => email.message
)
export const getSenderEmailLoading = createSelector(
  getSenderEmail,
  (email: SenderSchema) => email.loading
)