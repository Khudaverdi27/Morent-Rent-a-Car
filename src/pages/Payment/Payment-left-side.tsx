import { Stack, FormControl } from "@chakra-ui/react";
import BillingInfo from "./BillingInfo";
import { useForm, SubmitHandler } from "react-hook-form";
import RentalInfo from "./RentalInfo";
import PaymentMethod from "./Payment-method";
import Confirmation from "./Confirmation";

export type Inputs = {
  name: string;
  number: number;
  address: string;
  city: string;
  holder: string;
  cardNumber: number;
  exDate: number;
  cvc: number;
};

function PaymentLeftSide() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <FormControl as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Stack ml={-4} spacing={5}>
        <BillingInfo register={register} errors={errors} />
        <RentalInfo />
        <PaymentMethod register={register} errors={errors} />
        <Confirmation />
      </Stack>
    </FormControl>
  );
}

export default PaymentLeftSide;
