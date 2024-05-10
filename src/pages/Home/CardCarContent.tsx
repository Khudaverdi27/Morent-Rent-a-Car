import {
  Box,
  Button,
  Spacer,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import IconBtn from "../../components/shared/IconBtn";
import { GoHeart } from "react-icons/go";
import CarProperties from "../../pages/Home/CarProperties";

function CardCarContent({ ...props }) {
  return (
    <>
      <CardHeader>
        <Flex justify={"space-between"} align={"center"}>
          <Flex>
            <Box>
              <Heading size="sm">{props.name}</Heading>
              <Text color={"Secondary.300"} fontSize={14}>
                {props.type}
              </Text>
            </Box>
          </Flex>
          <IconBtn border="none">
            <Icon as={GoHeart} boxSize={5} />
          </IconBtn>
        </Flex>
      </CardHeader>
      <Spacer />
      <CardBody>
        <Box
          p={3}
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
          <Image width={"100%"} height={"100%"} src={props.img} alt="car" />
        </Box>
        <CarProperties {...props} />
      </CardBody>
      <Spacer />
      <CardFooter display={"flex"} justify={"space-between"}>
        <Box>
          <Text fontWeight={"bold"} fontSize={"20"}>
            {`$${props.price}.00`}/
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
            <Text
              fontSize={"14"}
              textDecoration={"line-through;"}
              fontWeight={"600"}
              color={"Secondary.300"}
              as={"span"}
            >
              {props.isDiscount && `$${props.isDiscount}.00`}
            </Text>
          </Text>
        </Box>

        <Spacer />

        <Button
          alignSelf={"flex-end"}
          _hover={{ bg: "Primary.600" }}
          variant="solid"
          bgColor={"Primary.500"}
          color={"Primary.0"}
          fontWeight={"normal"}
        >
          Rent now
        </Button>
      </CardFooter>
    </>
  );
}

export default CardCarContent;
