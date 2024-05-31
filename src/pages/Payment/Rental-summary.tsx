import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  HStack,
  Stack,
  Box,
  Button,
  Image,
  StackDivider,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";

import StarIcon from "../../components/shared/StarIcon";
import { useSessionStorage } from "@uidotdev/usehooks";
function RentalSummary() {
  const [storage] = useSessionStorage<any>("carToDetail", {});
  const tax = +((storage.price * 18) / 100).toFixed(1);

  return (
    <Card variant={"outlined"} maxW={"470px"}>
      <CardHeader>
        <Heading size="md">Rental Summary</Heading>
        <Text pt="2" fontSize="sm" color={"Secondary.300"}>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </Text>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <HStack gap={5}>
            <Box
              w={{ base: "82px", sm: "132px" }}
              h={{ base: "68px", sm: "108px" }}
              bgColor={"Primary.500"}
              borderRadius={"8px"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"contain"}
                src={"../../../public/" + storage.img.main}
              />
            </Box>
            <Box>
              <Text fontSize={{ base: 18, sm: 32 }} fontWeight={"600"}>
                {storage.name}
              </Text>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <StarIcon reviewCount={5} />
                <Text
                  whiteSpace={"nowrap"}
                  color={"Secondary.300"}
                  as={"span"}
                  fontSize={"14px"}
                >
                  {storage.review.length}+ Reviewer
                </Text>
              </Box>
            </Box>
          </HStack>
          <Stack>
            <HStack justify={"space-between"}>
              <Text color={"Secondary.300"}>Subtotal</Text>
              <Text fontWeight={"600"}>{`$${storage.price}`}</Text>
            </HStack>
            <HStack justify={"space-between"}>
              <Text color={"Secondary.300"}>Tax</Text>
              <Text fontWeight={"600"}>{`$${tax}`}</Text>
            </HStack>
            <InputGroup size="md">
              <Input
                focusBorderColor="#edf2f7"
                bgColor={"#edf2f7"}
                w={"100%"}
                pr="4.5rem"
                placeholder="Apply promo code"
              />
              <InputRightElement w={"100px"}>
                <Button fontWeight={"semibold"}>Apply now</Button>
              </InputRightElement>
            </InputGroup>
            <HStack justify={"space-between"}>
              <Box>
                <Text fontWeight={"600"}>Total Rental Price</Text>
                <Text color={"Secondary.300"} fontSize={"14px"}>
                  Overall price and includes rental discount
                </Text>
              </Box>
              <Text fontSize={{ base: 18, sm: 32 }} fontWeight={"600"}>
                {`$${storage.price + tax}`}
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default RentalSummary;
