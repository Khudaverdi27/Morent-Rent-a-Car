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
function PaymentMethod({ register, errors }: IFormProps) {
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
        <RadioGroup>
          <Stack p={6} borderRadius={"8px"} bgColor={"#F6F7F9"}>
            <HStack justify={"space-between"}>
              <Radio value="3">Credit Card</Radio>
              <Image src={visa} />
            </HStack>
            <Box display={"flex"} gap={3}>
              <Stack spacing={3} w={"100%"}>
                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    Card Number
                  </FormLabel>
                  <Input
                    {...register("cardNumber", { required: true })}
                    variant="outlined"
                    type="tel"
                    placeholder="Card Number"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.cardNumber && (
                    <Box as="span" fontSize={"14px"} color={"Error.500"}>
                      Card Number is required.
                    </Box>
                  )}
                </Box>

                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    Card Holder
                  </FormLabel>
                  <Input
                    {...register("holder", { required: true })}
                    isRequired={true}
                    variant="outlined"
                    placeholder="Card holder"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.holder && (
                    <Box as="span" fontSize={"14px"} color={"Error.500"}>
                      Card holder is required.
                    </Box>
                  )}
                </Box>
              </Stack>
              <Stack spacing={3} w={"100%"}>
                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    Expration Date
                  </FormLabel>
                  <Input
                    {...register("exDate", { required: true })}
                    variant="outlined"
                    type="tel"
                    placeholder="Expration Date"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.exDate && (
                    <Box as="span" fontSize={"14px"} color={"Error.500"}>
                      Expration Date is required.
                    </Box>
                  )}
                </Box>
                <Box>
                  <FormLabel fontWeight={"600"} fontSize={"15px"}>
                    CVC
                  </FormLabel>
                  <Input
                    {...register("cvc", { required: true })}
                    variant="outlined"
                    placeholder="CVC"
                    _placeholder={{ fontSize: "12px" }}
                    size="md"
                  />
                  {errors.cvc && (
                    <Box as="span" fontSize={"14px"} color={"Error.500"}>
                      CVC is required.
                    </Box>
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
              <Radio w="100%" value="1">
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
              <Radio w="100%" value="2">
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
