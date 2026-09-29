export type Account = {
  id: string;
  accountNumber: string;
  bankName: string;
  accountType: string;
  currency: string;
  balance: number;
  status: string;
};

export type Profile = Record<string, string | number | boolean | null>;

export type RegisterRequest = {
  fullNames: string;
  secondName: string | null;
  surname: string;
  email: string;
  phone: string;
  // username: string;
  idNumber: string;
  title: string;
  dateOfBirth: string;
  // role: string;
  ethnicity: string;
  gender: string;
  country: string;
  // status: string;
  customerLanguage: string;
  homeAddress: string[];
  password: string;
};
