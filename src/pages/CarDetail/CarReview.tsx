import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Flex,
  Box,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { CarReviewProps } from "./CarDetail";

function CarReview(props: { data: CarReviewProps }) {
  const { data } = props;

  const reviewCount = data.reviewCount;
  const totalStars = 5;
  const emptyStars = totalStars - reviewCount;

  // Generate filled stars

  const filledStars = Array.from({ length: reviewCount }, (_, i) => (
    <FaStar key={`filled-${i}`} fill="#FBAD39" />
  ));

  // Generate empty stars
  const emptyStarsArray = Array.from({ length: emptyStars }, (_, i) => (
    <FaStar key={`empty-${i}`} fill="#E0E0E0" />
  ));

  const stars = [...filledStars, ...emptyStarsArray];

  return (
    <Card boxShadow={"none"} color={"Secondary.300"}>
      <CardHeader>
        <Flex gap={2}>
          <Flex flex="1" gap="2" alignItems="center">
            <Avatar name={data.name} src={data.img} />
            <Box w={"100%"}>
              <HStack gap={2} justify={"space-between"}>
                <Heading color={"Secondary.500"} size="sm">
                  {`${data.name.split(" ").slice(0, 2).join(" ")}`}
                </Heading>
                <Box fontSize={"14px"} as="span">
                  21 July 2022
                </Box>
              </HStack>
              <HStack gap={2} justify={"space-between"}>
                <Text flexShrink={0}>{data.job}</Text>
                <Box display={"flex"} gap={1}>
                  {stars}
                </Box>
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{data.content}</Text>
      </CardBody>
    </Card>
  );
}

export default CarReview;
