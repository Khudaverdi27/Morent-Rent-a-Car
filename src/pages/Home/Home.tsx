import { Box, Button, Flex, Skeleton } from "@chakra-ui/react";
import Banner from "./HomeBanner";
import SelectBox from "./SelectBox";
import Section from "../../components/common/Section";
import {
  useGetByPopularQuery,
  useGetByRecommendsQuery,
} from "../../services/request";

function Home() {
  const { data: popularCarsData, isLoading: popularCarsLoading } =
    useGetByPopularQuery("popularCars");
  const { data: recommendCarsData, isLoading: recommendCarsLoading } =
    useGetByRecommendsQuery("recommendCars");

  return (
    <Box as={"section"} pt={5}>
      <Banner />
      <SelectBox />
      <Section
        title="Popular Cars"
        showAll={true}
        carData={popularCarsData}
        isLoading={popularCarsLoading}
      />
      <Section
        title="Recomendation Car"
        showAll={false}
        carData={recommendCarsData}
        isLoading={recommendCarsLoading}
      />
      <Flex my={10} justify={"center"}>
        {recommendCarsLoading ? (
          <Skeleton
            startColor="Primary.700"
            endColor="Primary.500"
            borderRadius={"10px"}
            w={116}
            height="40px"
          />
        ) : (
          <Button
            borderRadius="4px"
            _hover={{ bg: "Primary.600" }}
            variant="solid"
            bgColor={"Primary.500"}
            color={"Primary.0"}
            fontWeight={"normal"}
          >
            Show more car
          </Button>
        )}
      </Flex>
    </Box>
  );
}

export default Home;
