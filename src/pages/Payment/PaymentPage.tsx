import { Flex, Box, Text } from "@chakra-ui/react";
import PaymentLeftSide from "./Payment-left-side";

function PaymentPage() {
  return (
    <Flex color="white" flexWrap={"wrap-reverse"} gap={5} mt={5}>
      <Box flex={{ sm: 1 }}>
        <PaymentLeftSide />
      </Box>
      <Box bg="tomato">
        <Text>Box 2</Text>
      </Box>
    </Flex>
  );
}

export default PaymentPage;
