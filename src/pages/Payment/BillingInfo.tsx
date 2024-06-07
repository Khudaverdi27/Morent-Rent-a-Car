import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  HStack,
  Input,
  Stack,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../types/Inputs";

export interface IFormProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

function BillingInfo({ register, errors }: IFormProps) {
  return (
    <Card variant={"unstyled"} px={3} py={6} ml={{ base: 4, md: 0 }}>
      <CardHeader>
        <Heading size={"md"}>Billing Info</Heading>
        <HStack
          mb={3}
          justify={"space-between"}
          fontSize={"14px"}
          color={"Secondary.300"}
        >
          <Text>Please enter your billing info</Text>
          <Text>Step 1 of 4</Text>
        </HStack>
      </CardHeader>
      <CardBody
        display={"flex"}
        gap={3}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        <Stack spacing={3} w={"100%"}>
          <Box position="relative" pt={2}>
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Name
            </FormLabel>
            <Input
              {...register("name")}
              variant="filled"
              placeholder="Your name"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.name && typeof errors.name.message === "string" && (
              <Text
                role="alert"
                position="absolute"
                bottom="-5"
                left="0"
                as="span"
                fontSize={"14px"}
                color={"Error.500"}
              >
                {errors.name.message}
              </Text>
            )}
          </Box>
          <Box position="relative" mt={2}>
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Phone Number
            </FormLabel>
            <Input
              {...register("number")}
              variant="filled"
              type="tel"
              placeholder="Phone number"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.number && typeof errors.number.message === "string" && (
              <Text
                role="alert"
                position="absolute"
                bottom="-5"
                left="0"
                as="span"
                fontSize={"14px"}
                color={"Error.500"}
              >
                {errors.number.message}
              </Text>
            )}
          </Box>
        </Stack>
        <Stack spacing={3} w={"100%"}>
          <Box pos={"relative"} pt={2}>
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Address
            </FormLabel>
            <Input
              {...register("address")}
              isRequired={true}
              variant="filled"
              placeholder="Address"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.address && typeof errors.address.message === "string" && (
              <Text
                role="alert"
                position="absolute"
                bottom="-5"
                left="0"
                as="span"
                fontSize={"14px"}
                color={"Error.500"}
              >
                {errors.address.message}
              </Text>
            )}
          </Box>
          <Box position="relative" mt={2}>
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Town/City
            </FormLabel>
            <Input
              {...register("city")}
              variant="filled"
              placeholder="Town or city"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.city && typeof errors.city.message === "string" && (
              <Text
                role="alert"
                position="absolute"
                bottom="-5"
                left="0"
                as="span"
                fontSize={"14px"}
                color={"Error.500"}
              >
                {errors.city.message}
              </Text>
            )}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BillingInfo;
