import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  HStack,
  Stack,
  Checkbox,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import check from "../../assets/img/check.png";
function Confirmation() {
  return (
    <Card variant={"unstyled"} p={3}>
      <CardHeader>
        <Heading size={"md"}>Confirmation</Heading>
        <HStack
          mb={3}
          justify={"space-between"}
          fontSize={"14px"}
          color={"Secondary.300"}
        >
          <Text>
            We are getting to the end. Just few clicks and your rental is ready!
          </Text>
          <Text whiteSpace={"nowrap"}>Step 4 of 4</Text>
        </HStack>
      </CardHeader>
      <CardBody gap={3}>
        <Stack spacing={5}>
          <Box borderRadius={"8px"} bgColor={"#F6F7F9"} py={3} px={7}>
            <Checkbox w={"100%"} colorScheme="blue">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </Checkbox>
          </Box>
          <Box borderRadius={"8px"} bgColor={"#F6F7F9"} py={3} px={7}>
            <Checkbox w={"100%"} colorScheme="blue">
              I agree with our terms and conditions and privacy policy.
            </Checkbox>
          </Box>
        </Stack>
        <Button
          mt={3}
          fontWeight={"400"}
          w={"150px"}
          color={"Primary.0"}
          _hover={{
            bgColor: "Primary.600",
          }}
          bgColor={"Primary.500"}
          type="submit"
        >
          Rent Now
        </Button>
        <Box mt={5}>
          <Image src={check} />
          <Text fontWeight={"600"} my={3}>
            All your data are safe
          </Text>
          <Text color={"Secondary.300"} fontSize={"14px"}>
            We are using the most advanced security to provide you the best
            experience ever.
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}

export default Confirmation;
