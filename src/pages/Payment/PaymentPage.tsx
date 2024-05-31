import { Flex, Box } from "@chakra-ui/react";
import PaymentLeftSide from "./Payment-left-side";
import RentalSummary from "./Rental-summary";
import { useEffect } from "react";
import { scrollToUP } from "../../utility/scrollToUp";

function PaymentPage() {
  useEffect(() => {
    scrollToUP();
  }, []);
  return (
    <Flex color="white" flexWrap={"wrap-reverse"} gap={5} mt={5}>
      <Box flex={{ sm: 1 }}>
        <PaymentLeftSide />
      </Box>

      <RentalSummary />
    </Flex>
  );
}

export default PaymentPage;
