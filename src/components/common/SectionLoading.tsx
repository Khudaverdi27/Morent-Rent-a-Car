import {
  Spacer,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Image,
  Stack,
  Skeleton,
  Center,
  HStack,
  SkeletonCircle,
} from "@chakra-ui/react";

import CardCar from "../../pages/Home/CardCar";
import IconBtn from "../shared/IconBtn";
import imgg from "../../assets/img/loadingImg.png";

function SectionLoading() {
  return (
    <CardCar>
      <CardHeader>
        <Flex justify={"space-between"} align={"center"}>
          <Stack>
            <Skeleton
              startColor="Primary.300"
              endColor="Primary.200"
              borderRadius={"10px"}
              w={116}
              height="16px"
            />
            <Skeleton borderRadius={"10px"} w={116} height="16px" />
          </Stack>
          <IconBtn border="none">
            <SkeletonCircle size="5" />
          </IconBtn>
        </Flex>
      </CardHeader>
      <Spacer />
      <CardBody>
        <Center>
          <Image src={imgg} className="pulse" />
        </Center>

        <HStack
          justify={"space-between"}
          alignItems={"flex-end"}
          height={"60%"}
        >
          <Skeleton borderRadius={"10px"} w={68} height="16px" />
          <Skeleton borderRadius={"10px"} w={68} height="16px" />
          <Skeleton borderRadius={"10px"} w={68} height="16px" />
        </HStack>
      </CardBody>
      <Spacer />
      <CardFooter display={"flex"} justify={"space-between"}>
        <Stack>
          <Skeleton
            startColor="Primary.300"
            endColor="Primary.200"
            borderRadius={"10px"}
            w={116}
            height="16px"
          />
          <Skeleton borderRadius={"10px"} w={116} height="16px" />
        </Stack>

        <Spacer />

        <Skeleton
          startColor="Primary.700"
          endColor="Primary.500"
          borderRadius={"10px"}
          w={116}
          height="40px"
        />
      </CardFooter>
    </CardCar>
  );
}

export default SectionLoading;
