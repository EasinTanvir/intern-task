export type Color =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export type TextFieldVariants = "standard" | "filled" | "outlined";

export interface FormsData {
  label: string;
  variant: TextFieldVariants;
  fullWidth: boolean;
  color: Color;
  required: boolean;
  type: string;
  name: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SendData {
  userName: string;
  phoneNumber: number | null;
  email: string;
}

export interface JsonData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Department {
  department: string;
  sub_departments: string[];
}

export interface SelectedSubDepartments {
  [key: string]: string[];
}
