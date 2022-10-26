
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