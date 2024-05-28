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
import { useMediaQuery, useSessionStorage } from "@uidotdev/usehooks";
import { Link, useLocation } from "react-router-dom";
import { apiResponsePopulars } from "../../types/apiResponse";

function CardCarContent({ isMobile = false, ...props }) {
  const isSmallScreen = useMediaQuery("only screen and (max-width : 480px)");
  const [, setStorage] = useSessionStorage<{}>("carToDetail", {});
  const path = useLocation().pathname;

  const handleRentBtn = (allProps: apiResponsePopulars) => {
    setStorage(allProps);
    path === "/car-detail" &&
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  };

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
      <CardBody display={isMobile || !isSmallScreen ? "block" : "flex"}>
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
          <Image
            objectFit={"contain"}
            width={"100%"}
            height={"100%"}
            src={props.img.main}
            alt="car"
          />
        </Box>

        <CarProperties {...props} isMobile={isMobile} />
      </CardBody>
      <Spacer />
      <CardFooter display={"flex"} justify={"space-between"}>
        <Box>
          <Text fontWeight={"bold"} fontSize={{ base: "16", sm: "20" }}>
            {`$${props.price}.00`}/
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
              {props.isDiscount && `$${props.isDiscount}.00`}
            </Text>
          </Text>
        </Box>

        <Spacer />

        <Link to={path === "/car-detail" ? "#" : "car-detail"}>
          <Button
            onClick={() => handleRentBtn(props as apiResponsePopulars)}
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
    </>
  );
}

export default CardCarContent;
