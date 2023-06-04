export type BookingData = {
  name: string;
  guests: number;
  date: Date;
  comments: string;
};

export type CreateUserData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SigninUserData = {
  is_bride: boolean;
  email: string;
  password: string;
};

export type ContactsFormData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export type PasswordFromData = {
  password: string;
  confirmPassword: string;
};

export type ResetPasswordConfirm = {
  uid: string;
  token: string;
  new_password: string;
};
