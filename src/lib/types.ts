export type InputT = {
  type: string;
  id: string;
  placeholder: string;
};

export type RegisterFormInputsT = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type RegisterStateT =
  | {
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;
