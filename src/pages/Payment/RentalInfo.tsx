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

function RentalInfo() {
  return (
    <Card variant={"unstyled"} p={3}>
      <CardHeader>
        <Heading size={"md"}>Rental Info</Heading>
        <HStack
          mb={3}
          justify={"space-between"}
          fontSize={"14px"}
          color={"Secondary.300"}
        >
          <Text>Please slect your rental date</Text>
          <Text>Step 2 of 4</Text>
        </HStack>
      </CardHeader>
      <CardBody>
        <SelectBoxTitle>Pick - Up</SelectBoxTitle>
        <Box display={"flex"} gap={3}>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectLocations variant="filled" />
            </Box>
            <Box>
              <SelectTime variant="filled" />
            </Box>
          </Stack>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectDate variant={"billingCalendar"} />
            </Box>
          </Stack>
        </Box>
        <SelectBoxTitle>Drop-off</SelectBoxTitle>
        <Box display={"flex"} gap={3}>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectLocations variant="filled" />
            </Box>
            <Box>
              <SelectTime variant="filled" />
            </Box>
          </Stack>
          <Stack spacing={3} w={"100%"}>
            <Box>
              <SelectDate variant={"billingCalendar"} />
            </Box>
          </Stack>
        </Box>
      </CardBody>
    </Card>
  );
}

export default RentalInfo;
