import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import IconBtn from "../../components/shared/IconBtn";
import { FaStar } from "react-icons/fa";

function CardDetailInfo() {
  return (
    <Card boxShadow={"none"}>
      <CardHeader>
        <Flex justify={"space-between"} align={"center"}>
          <Flex>
            <Box>
              <Heading size="sm">Nissan</Heading>
              <HStack>
                <HStack>
                  <FaStar fill="#FBAD39" />
                  <FaStar fill="#FBAD39" />
                  <FaStar fill="#FBAD39" />
                  <FaStar fill="#FBAD39" />
                  <FaStar fill="#FBAD39" />
                </HStack>
                <Text color={"Secondary.300"} fontSize={14}>
                  440+ Reviewer
                </Text>
              </HStack>
            </Box>
          </Flex>
          <IconBtn border="none">
            <Icon as={GoHeart} boxSize={5} />
          </IconBtn>
        </Flex>
      </CardHeader>
      <Spacer />
      <CardBody color={"Secondary.300"}>
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
        <SimpleGrid minChildWidth={"110px"} gap={5} mt={5}>
          <Text>Type Car</Text>
          <Text color="Secondary.600">Sport</Text>
          <Text>Capacity</Text>
          <Text color="Secondary.600">2 Person</Text>
          <Text>Steering</Text>
          <Text color="Secondary.600">Manual</Text>
          <Text>Gasoline</Text>
          <Text color="Secondary.600">70L</Text>
        </SimpleGrid>
      </CardBody>
      <Spacer />
      <CardFooter display={"flex"} justify={"space-between"}>
        <Box>
          <Text fontWeight={"bold"} fontSize={{ base: "16", sm: "20" }}>
            $80.00/
            <Text
              fontSize={{ base: "12", sm: "16" }}
              color={"Secondary.300"}
              as={"small"}
            >
              day
            </Text>
          </Text>
          <Text
            fontSize={"14"}
            textDecoration={"line-through;"}
            fontWeight={"600"}
            color={"Secondary.300"}
            as={"span"}
          >
            <Text
              fontSize={{ base: "12", sm: "14" }}
              textDecoration={"line-through;"}
              fontWeight={"600"}
              color={"Secondary.300"}
              as={"span"}
            >
              $50.00
            </Text>
          </Text>
        </Box>

        <Spacer />

        <Link to={"#"}>
          <Button
            size={{ base: "sm", sm: "md" }}
            alignSelf={"flex-end"}
            _hover={{ bg: "Primary.600" }}
            variant="solid"
            bgColor={"Primary.500"}
            color={"Primary.0"}
            fontWeight={"normal"}
          >
            Rent now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardDetailInfo;
