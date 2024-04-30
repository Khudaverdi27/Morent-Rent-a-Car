import {
  Button,
  Card,
  CardBody,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import car from "../../assets/img/image 7.png";

function Banner() {
  return (
    <SimpleGrid as={"article"} minChildWidth={"250px"} spacing={10} p={"10px"}>
      <Card
        borderRadius={"10px"}
        overflow={"hidden"}
        h="360px"
        w={"640px"}
        bg="Information.500"
        _before={{
          content: "''",
          h: "180%",
          opacity: 0.1,
          borderRadius: "50%",
          w: "100%",
          bgGradient:
            " repeating-radial-gradient(circle, transparent 0 30px, Secondary.50 10px 50px)",
          position: "absolute",
          clipPath: "circle(farthest-side)",
          top: -6,
          right: 0,
        }}
      >
        <CardBody color="Primary.0" position={"relative"}>
          <Text fontSize={"32px"} as={"h2"} maxW={"50%"} fontWeight={"500"}>
            The Best Platform for Car Rental
          </Text>
          <Text maxW={"50%"} py={5}>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </Text>
          <Button
            _hover={{ bgColor: "Primary.600" }}
            fontWeight={"400"}
            bgColor="Primary.500"
            color="Primary.0"
          >
            Rental Car
          </Button>
          <Image top={"66%"} left={"25%"} position={"absolute"} src={car} />
        </CardBody>
      </Card>
      <Card
        borderRadius={"10px"}
        overflow={"hidden"}
        h="360px"
        w={"640px"}
        bg="Primary.500"
        _before={{
          content: "''",
          h: "180%",
          opacity: 0.1,
          borderRadius: "50%",
          w: "100%",
          bgGradient:
            " repeating-radial-gradient(circle, transparent 0 30px, Secondary.50 10px 50px)",
          position: "absolute",
          clipPath: "circle(farthest-side)",
          top: -6,
          right: 0,
        }}
      >
        <CardBody color="Primary.0" position={"relative"}>
          <Text fontSize={"32px"} as={"h2"} maxW={"50%"} fontWeight={"500"}>
            The Best Platform for Car Rental
          </Text>
          <Text maxW={"50%"} py={5}>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </Text>
          <Button
            _hover={{ bgColor: "Primary.600" }}
            fontWeight={"400"}
            bgColor="Primary.500"
            color="Primary.0"
          >
            Rental Car
          </Button>
          <Image top={"66%"} left={"25%"} position={"absolute"} src={car} />
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default Banner;
