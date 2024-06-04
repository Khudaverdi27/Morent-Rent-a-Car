import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  HStack,
  Stack,
  Box,
  Input,
  FormLabel,
  Image,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { IFormProps } from "./BillingInfo";
import visa from "../../assets/img/Visa.png";
import paypal from "../../assets/img/PayPal.png";
import bitcoin from "../../assets/img/Bitcoin.png";
import { useState } from "react";
function PaymentMethod({ register, errors }: IFormProps) {
  const [value, setValue] = useState("3");

  return (
    <Card variant={"outlined"} ml={{ base: 4, md: 0 }}>
      <CardHeader>
        <Heading size={"md"}>Payment Method</Heading>
        <HStack
          mb={3}
          justify={"space-between"}
          fontSize={"14px"}
          color={"Secondary.300"}
        >
          <Text>Please enter your payment method</Text>
          <Text whiteSpace={"nowrap"}>Step 3 of 4</Text>
        </HStack>
      </CardHeader>

      <CardBody bgColor={"Primary.0"}>
        <RadioGroup onChange={setValue} value={value}>
          <Stack p={6} borderRadius={"8px"} bgColor={"#F6F7F9"}>
            <HStack justify={"space-between"}>
              <Radio name="payment" value="3">
                Credit Card
              </Radio>
              <Image src={visa} />
            </HStack>
            <Box
              display={"flex"}
              gap={3}
              flexWrap={{ base: "wrap", lg: "nowrap" }}
            >
              <Stack spacing={3} w={"100%"}>
                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    Card Number
                  </FormLabel>
                  <Input
                    {...register("cardNumber", {
                      required: " Card Number is required",
                    })}
                    variant="outlined"
                    type="tel"
                    placeholder="Card Number"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.cardNumber &&
                    typeof errors.cardNumber.message === "string" &&
                    value == "3" && (
                      <Text
                        role="alert"
                        as="span"
                        fontSize={"14px"}
                        color={"Error.500"}
                      >
                        {errors.cardNumber.message}
                      </Text>
                    )}
                </Box>

                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    Card Holder
                  </FormLabel>
                  <Input
                    {...register("holder", {
                      required: "  Card holder is required",
                    })}
                    isRequired={true}
                    variant="outlined"
                    placeholder="Card holder"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.holder &&
                    typeof errors.holder.message === "string" &&
                    value == "3" && (
                      <Text
                        role="alert"
                        as="span"
                        fontSize={"14px"}
                        color={"Error.500"}
                      >
                        {errors.holder.message}
                      </Text>
                    )}
                </Box>
              </Stack>
              <Stack spacing={3} w={"100%"}>
                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    Expration Date
                  </FormLabel>
                  <Input
                    {...register("exDate", {
                      required: "Expration Date is required",
                    })}
                    variant="outlined"
                    type="tel"
                    placeholder="Expration Date"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.exDate &&
                    typeof errors.exDate.message === "string" &&
                    value == "3" && (
                      <Text
                        role="alert"
                        as="span"
                        fontSize={"14px"}
                        color={"Error.500"}
                      >
                        {errors.exDate.message}
                      </Text>
                    )}
                </Box>
                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    CVC
                  </FormLabel>
                  <Input
                    {...register("cvc", { required: "CVC is required" })}
                    variant="outlined"
                    placeholder="CVC"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.cvc &&
                    typeof errors.cvc.message === "string" &&
                    value == "3" && (
                      <Text
                        role="alert"
                        as="span"
                        fontSize={"14px"}
                        color={"Error.500"}
                      >
                        {errors.cvc.message}
                      </Text>
                    )}
                </Box>
              </Stack>
            </Box>
          </Stack>

          <Stack mt={5} gap={5}>
            <Box
              py={3}
              px={6}
              borderRadius={"8px"}
              display={"flex"}
              justifyContent={"space-between"}
              bgColor={"#F6F7F9"}
              alignItems={"center"}
            >
              <Radio name="payment" w="100%" value="1">
                <Text>PayPal</Text>
              </Radio>
              <Image
                width={"94px"}
                height={"20px"}
                alignSelf={"flex-end"}
                src={paypal}
                alt="Bitcoin"
              />
            </Box>
            <Box
              py={3}
              px={6}
              borderRadius={"8px"}
              display={"flex"}
              justifyContent={"space-between"}
              bgColor={"#F6F7F9"}
              alignItems={"center"}
            >
              <Radio name="payment" w="100%" value="2">
                <Text>Bitcoin</Text>
              </Radio>
              <Image
                width={"94px"}
                height={"20px"}
                src={bitcoin}
                alt="Bitcoin"
              />
            </Box>
          </Stack>
        </RadioGroup>
      </CardBody>
    </Card>
  );
}

export default PaymentMethod;
