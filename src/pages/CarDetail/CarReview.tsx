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
                  {Array.from({ length: data.reviewCount }, (_, i) => (
                    <FaStar key={i} fill="#FBAD39" />
                  ))}
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
