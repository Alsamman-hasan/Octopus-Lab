export interface SenderSchema {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project?: string;
  hasError?: boolean;
  loading?: boolean;
  isValidate?: boolean;
}

export enum Inputparams {
  "name" = "name",
  "email" = "email",
  "phone" = "phone",
  "company" = "company",
  "project" = "project",
}

export interface IInputItems {
  label: string;
  params: string;
  errorMessage?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}
