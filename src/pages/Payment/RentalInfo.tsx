import SelectDate from "../Home/Select-Date";
import SelectLocations from "../Home/Select-Locations";
import SelectTime from "../Home/Select-Time";

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  HStack,
  Stack,
  Box,
} from "@chakra-ui/react";
import SelectBoxTitle from "../Home/SelectBox-title";
import { IFormProps } from "./BillingInfo";

function RentalInfo({ register, errors }: IFormProps) {
  return (
    <Card variant={"unstyled"} p={3} ml={{ base: 4, md: 0 }}>
      <CardHeader>
        <Heading size={"md"}>Rental Info</Heading>
        <HStack
          mb={3}
          justify={"space-between"}
          fontSize={"14px"}
          color={"Secondary.300"}
        >
          <Text>Please select your rental date</Text>
          <Text>Step 2 of 4</Text>
        </HStack>
      </CardHeader>
      <CardBody>
        <SelectBoxTitle>Pick - Up</SelectBoxTitle>
        <Box display={"flex"} gap={3} flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectLocations
                variant="filled"
                register={register}
                errors={errors}
                registerName={"pickUp"}
              />
            </Box>
            <Box>
              <SelectTime
                variant="filled"
                register={register}
                errors={errors}
                registerName={"pickTime"}
              />
            </Box>
          </Stack>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectDate
                variant={"billingCalendar"}
                register={register}
                errors={errors}
                registerName={"dropTime"}
              />
            </Box>
          </Stack>
        </Box>
        <SelectBoxTitle>Drop-off</SelectBoxTitle>
        <Box display={"flex"} gap={3} flexWrap={{ base: "wrap", lg: "nowrap" }}>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectLocations
                variant="filled"
                register={register}
                errors={errors}
                registerName={"dropOff"}
              />
            </Box>
            <Box>
              <SelectTime
                variant="filled"
                register={register}
                errors={errors}
                registerName={"dropOff"}
              />
            </Box>
          </Stack>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectDate
                variant={"billingCalendar"}
                register={register}
                errors={errors}
                registerName={"dropOff"}
              />
            </Box>
          </Stack>
        </Box>
      </CardBody>
    </Card>
  );
}

export default RentalInfo;
