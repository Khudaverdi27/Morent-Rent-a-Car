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
import { useSessionStorage } from "@uidotdev/usehooks";
import StarIcon from "../../components/shared/StarIcon";
import { toast } from "react-toastify";

function CardDetailInfo() {
  const [storage] = useSessionStorage<any>("carToDetail", {});
  const [token] = useSessionStorage<any>("token", {});

  const reviewCountTotal = storage.review.reduce(
    (acc: any, review: any) => acc + review.reviewCount,
    0
  );
  const reviewCountAverage = reviewCountTotal / storage.review.length;
  const star = Math.round(reviewCountAverage);
  const notify = () => toast.warning("Please login for continue!");
  const showMessage = () => {
    !token && notify();
  };
  return (
    <Card boxShadow={"none"}>
      <CardHeader>
        <Flex justify={"space-between"} align={"center"}>
          <Flex>
            <Box>
              <Heading size="sm">{storage.name}</Heading>
              <HStack>
                <HStack>
                  <StarIcon reviewCount={star} />
                </HStack>
                <Text color={"Secondary.300"} fontSize={14}>
                  {storage.review.length}+ Reviewer
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
        {storage.text}
        <SimpleGrid minChildWidth={"110px"} gap={5} mt={5}>
          <Text>Type Car</Text>
          <Text color="Secondary.600">{storage.type}</Text>
          <Text>Capacity</Text>
          <Text color="Secondary.600">{storage.seats}</Text>
          <Text>Steering</Text>
          <Text color="Secondary.600">{storage.control}</Text>
          <Text>Gasoline</Text>
          <Text color="Secondary.600">{storage.gas}</Text>
        </SimpleGrid>
      </CardBody>
      <Spacer />
      <CardFooter display={"flex"} justify={"space-between"}>
        <Box>
          <Text fontWeight={"bold"} fontSize={{ base: "16", sm: "20" }}>
            {`$${storage.price}.00/`}
            <Text
              fontSize={{ base: "12", sm: "16" }}
              color={"Secondary.300"}
              as={"small"}
            >
              day
            </Text>
          </Text>

          {storage.isDiscount && (
            <Text
              fontSize={{ base: "12", sm: "14" }}
              textDecoration={"line-through;"}
              fontWeight={"600"}
              color={"Secondary.300"}
              as={"span"}
            >
              {`$${storage.isDiscount}.00`}
            </Text>
          )}
        </Box>

        <Spacer />

        <Link to={token ? "payment" : "/"}>
          <Button
            onClick={showMessage}
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
