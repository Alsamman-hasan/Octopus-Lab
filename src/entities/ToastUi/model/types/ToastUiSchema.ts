export interface ToastUiSchema {
  status: "error" | "success" | "warning" | "info" | "dark" | "default"
  message: string
}