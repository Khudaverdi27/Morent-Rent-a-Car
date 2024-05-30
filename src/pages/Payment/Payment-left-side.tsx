import { Stack, Button, FormControl } from "@chakra-ui/react";
import BillingInfo from "./BillingInfo";
import { useForm, SubmitHandler } from "react-hook-form";
import RentalInfo from "./RentalInfo";

export type Inputs = {
  name: string;
  number: string;
  address: string;
  city: string;
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

        <Button type="submit">s</Button>
      </Stack>
    </FormControl>
  );
}

export default PaymentLeftSide;
