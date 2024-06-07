import * as yup from "yup";

const msj = "is required";
const numberValidation = (field: string) =>
  yup
    .string()
    .matches(/^\+?[0-9]$/, `${field} must only contain numbers`)
    .required(`${field} ${msj}`);

export const paySchema = yup
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
