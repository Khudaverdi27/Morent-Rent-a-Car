import { Box, Button, Flex, Skeleton } from "@chakra-ui/react";
import SelectBox from "./SelectBox";
import Section from "../../components/common/Section";
import {
  useGetByPopularQuery,
  useGetByRecommendsQuery,
} from "../../services/request";
import { useState } from "react";
import SimpleSlider from "./slider";
import { useMediaQuery } from "@uidotdev/usehooks";

function Home() {
  const { data: popularCarsData, isLoading: popularCarsLoading } =
    useGetByPopularQuery("popularCars");
  const { data: recommendCarsData, isLoading: recommendCarsLoading } =
    useGetByRecommendsQuery("recommendCars");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const [moreCars, setMoreCars] = useState<Boolean>(false);

  return (
    <Box as={"section"} pt={5} overflowX={"hidden"}>
      <SelectBox />

      {isMobile ? (
        <SimpleSlider carData={popularCarsData} />
      ) : (
        <Section
          title="Popular Cars"
          showAll={true}
          carData={popularCarsData}
          isLoading={popularCarsLoading}
        />
      )}
      <Section
        title="Recomendation Car"
        showAll={false}
        carData={recommendCarsData}
        isLoading={recommendCarsLoading}
      />
      {moreCars && (
        <Section
          title=""
          showAll={false}
          carData={popularCarsData}
          isLoading={popularCarsLoading}
        />
      )}
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
            onClick={() => setMoreCars(!moreCars)}
            borderRadius="4px"
            _hover={{ bg: "Primary.600" }}
            variant="solid"
            bgColor={"Primary.500"}
            color={"Primary.0"}
            fontWeight={"normal"}
          >
            {moreCars ? "Show less car" : "Show more car"}
          </Button>
        )}
      </Flex>
    </Box>
  );
}

export default Home;
