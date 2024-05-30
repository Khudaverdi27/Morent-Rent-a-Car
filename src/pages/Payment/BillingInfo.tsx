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
    <Card variant={"unstyled"} p={3}>
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
      <CardBody display={"flex"} gap={3}>
        <Stack spacing={3} w={"100%"}>
          <Box>
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
              <Box as="span" fontSize={"14px"} color={"Error.500"}>
                Name is required.
              </Box>
            )}
          </Box>
          <Box>
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
              <Box as="span" fontSize={"14px"} color={"Error.500"}>
                Phone number is required.
              </Box>
            )}
          </Box>
        </Stack>
        <Stack spacing={3} w={"100%"}>
          <Box>
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
              <Box as="span" fontSize={"14px"} color={"Error.500"}>
                Address is required.
              </Box>
            )}
          </Box>
          <Box>
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
              <Box as="span" fontSize={"14px"} color={"Error.500"}>
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
