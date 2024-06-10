export type Inputs = Record<
  | "name"
  | "number"
  | "address"
  | "city"
  | "holder"
  | "cardNumber"
  | "exDate"
  | "cvc"
  | "payMethod"
  | "pickUp"
  | "dropOff"
  | "pickTime"
  | "dropTime"
  | "pickDate"
  | "dropDate",
  string
>;

export type LoginType = Record<"email" | "password", string>;

export type RegisterType = Record<
  "email" | "password" | "name" | "confirmPassword",
  string
>;
