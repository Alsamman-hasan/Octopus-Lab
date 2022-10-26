
export interface IState {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project?: string;
}

export interface IInputItems {
  label: string;
  params: string;
  errorMessage?: string;
  required?: boolean;
  onChange?: (value: string) => void
}