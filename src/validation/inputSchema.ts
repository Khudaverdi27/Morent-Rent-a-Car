import * as yup from "yup";

const msj = "is required";
const numberValidation = (field: string) =>
  yup
    .string()
    .matches(/^\+?[0-9]$/, `${field} must only contain numbers`)
    .required(`${field} ${msj}`);

export const inputSchema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Name must only contain letters")
      .required(`Name ${msj}`),
    number: numberValidation("Phone number"),
    address: yup.string().required(`Address ${msj}`),
    city: yup.string().required(`City ${msj}`),
    holder: yup.string().required(`Card holder name ${msj}`),
    cardNumber: numberValidation("Card number"),
    exDate: numberValidation("Card ex-date"),
    cvc: numberValidation("Card cvc"),
    payMethod: yup.string().required(`Please select payment method`),
    pickUp: yup.string().required(`Pick up location ${msj}`),
    dropOff: yup.string().required(`Drop off location ${msj}`),
    pickTime: yup.string().required(`Pick up time ${msj}`),
    dropTime: yup.string().required(`Drop off time ${msj}`),
    pickDate: yup.string().required(`Pick up date ${msj}`),
    dropDate: yup.string().required(`Drop off date ${msj}`),
  })
  .required();

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const RegisterSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  name: yup
    .string()
    .required("Name and surname is required")
    .test(
      "is-full-name",
      "Name and surname must be at least 2 characters",
      (value) => {
        if (!value) return false;
        const parts = value.trim().split(" ");
        return (
          parts.length === 2 && parts[0].length >= 2 && parts[1].length >= 2
        );
      }
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
