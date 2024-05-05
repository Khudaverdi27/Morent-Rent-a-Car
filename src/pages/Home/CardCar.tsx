import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import car8 from "../../assets/img/image 8.png";
import IconBtn from "../../components/shared/IconBtn";
import { GoHeart } from "react-icons/go";
import CarProperties from "./CarProperties";

function CardCar() {
  return (
    <Card maxW="sm" boxShadow={"none"}>
      <CardHeader>
        <Flex justify={"space-between"} align={"center"}>
          <Flex>
            <Box>
              <Heading size="sm">Koenigsegg</Heading>
              <Text color={"Secondary.300"} fontSize={14}>
                Sport
              </Text>
            </Box>
          </Flex>
          <IconBtn border="none">
            <Icon as={GoHeart} boxSize={5} />
          </IconBtn>
        </Flex>
      </CardHeader>
      <CardBody>
        <Box
          pos={"relative"}
          _before={{
            content: '""',
            position: "absolute",
            bgGradient:
              "linear(to top, rgba(255,255,255,1) 50%,rgba(0,0,0,0) 100%)",
            opacity: 0.5,
            w: "100%",
            h: "45%",
            bottom: 0,
          }}
        >
          <Image src={car8} alt="car" />
        </Box>
        <CarProperties />
      </CardBody>

      <CardFooter display={"flex"} justify={"space-between"}>
        <Box>
          <Text fontWeight={"bold"} fontSize={"20"}>
            $99.00/
            <Text color={"Secondary.300"} as={"small"}>
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
            $200.00
          </Text>
        </Box>

        <Spacer />
        <Button
          _hover={{ bg: "Primary.600" }}
          variant="solid"
          bgColor={"Primary.500"}
          color={"Primary.0"}
          fontWeight={"normal"}
        >
          Rent now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardCar;
