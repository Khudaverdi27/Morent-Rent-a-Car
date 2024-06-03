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
import { Inputs } from "./Payment-left-side";

export interface IFormProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors;
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
          <Box position="relative">
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Name
            </FormLabel>
            <Input
              {...register("name", { required: true })}
              variant="filled"
              placeholder="Your name"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.name && (
              <Box
                position="absolute"
                bottom="-5"
                left="0"
                as="span"
                fontSize={"14px"}
                color={"Error.500"}
              >
                Name is required.
              </Box>
            )}
          </Box>
          <Box position="relative" mt={2}>
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Phone Number
            </FormLabel>
            <Input
              {...register("number", { required: true })}
              variant="filled"
              type="tel"
              placeholder="Phone number"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.number && (
              <Box
                fontSize={"14px"}
                color={"Error.500"}
                position="absolute"
                bottom="-5"
                left="0"
                as="span"
              >
                Phone number is required.
              </Box>
            )}
          </Box>
        </Stack>
        <Stack spacing={3} w={"100%"}>
          <Box pos={"relative"}>
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Address
            </FormLabel>
            <Input
              {...register("address", { required: true })}
              isRequired={true}
              variant="filled"
              placeholder="Address"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.address && (
              <Box
                position="absolute"
                bottom="-5"
                left="0"
                as="span"
                fontSize={"14px"}
                color={"Error.500"}
              >
                Address is required.
              </Box>
            )}
          </Box>
          <Box position="relative" mt={2}>
            <FormLabel fontWeight={"600"} fontSize={"15px"}>
              Town/City
            </FormLabel>
            <Input
              {...register("city", { required: true })}
              variant="filled"
              placeholder="Town or city"
              _placeholder={{ fontSize: "12px" }}
              size="md"
            />
            {errors.city && (
              <Box
                fontSize={"14px"}
                color={"Error.500"}
                position="absolute"
                bottom="-5"
                left="0"
              >
                Town or city is required.
              </Box>
            )}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BillingInfo;
