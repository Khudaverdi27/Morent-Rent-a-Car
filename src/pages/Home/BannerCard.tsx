import { Button, Card, CardBody, Image, Text } from "@chakra-ui/react";

interface IBannerProps {
  className: string;
  title: string;
  text: string;
  img: string;
  bgPattern: string;
}

function BannerCard({ className, title, text, img, bgPattern }: IBannerProps) {
  return (
    <Card
      className={className}
      borderRadius={"10px"}
      overflow={"hidden"}
      h="360px"
      w={"640px"}
      bg={bgPattern === "circle" ? "Information.500" : "Primary.500"}
    >
      <CardBody color="Primary.0" position={"relative"}>
        <Text fontSize={"32px"} as={"h2"} maxW={"50%"} fontWeight={"500"}>
          {title}
        </Text>
        <Text maxW={"50%"} py={5}>
          {text}
        </Text>
        <Button
          _hover={{
            bgColor: bgPattern === "circle" ? "Primary.600" : "Information.600",
          }}
          fontWeight={"400"}
          bg={bgPattern === "circle" ? "Primary.500" : "Information.500"}
          color="Primary.0"
        >
          Rental Car
        </Button>
        <Image top={"66%"} left={"25%"} position={"absolute"} src={img} />
      </CardBody>
    </Card>
  );
}

export default BannerCard;
