export interface FormProps<TForm> {
  label: string;
  onSubmit: (form: TForm) => Promise<void>;
}
