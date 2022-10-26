import React from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { Portal } from "../../../shared/ui/Portal/Portal";

injectStyle()
export const ToastContainers = () => (
  <Portal>
    <ToastContainer />
  </Portal>
);