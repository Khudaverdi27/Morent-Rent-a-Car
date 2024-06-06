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
import { useState, useEffect } from "react";

import {
  updateDropDate,
  updatePickDate,
} from "../../Redux/features/rentedInfo";
import { useDispatch } from "react-redux";

function RentalInfo({ register, errors }: IFormProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (startDate && endDate) {
      const start = startDate.toISOString().split("T")[0];
      const end = endDate.toISOString().split("T")[0];
      dispatch(updatePickDate(start));
      dispatch(updateDropDate(end));
    }
  }, [startDate, dispatch, endDate]);

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
                registerName={"pickDate"}
                date={startDate}
                setDate={setStartDate}
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
                errors={errors}
                registerName={"pickTime"}
              />
            </Box>
          </Stack>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectDate
                variant={"billingCalendar"}
                errors={errors}
                registerName={"dropDate"}
                register={register}
                date={endDate}
                setDate={setEndDate}
              />
            </Box>
          </Stack>
        </Box>
      </CardBody>
    </Card>
  );
}

export default RentalInfo;
