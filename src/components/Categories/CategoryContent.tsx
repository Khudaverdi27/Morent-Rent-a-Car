import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  useGetByPopularQuery,
  useGetByRecommendsQuery,
} from "../../services/request";
import { useState, useEffect } from "react";
import _ from "lodash";
import { apiResponsePopulars } from "../../types/apiResponse";
import Categories from "./Categories";

function CategoryContent() {
  const { data: popularCarsData, isLoading: popularCarsLoading } =
    useGetByPopularQuery("popularCars");
  const { data: recommendCarsData, isLoading: recommendCarsLoading } =
    useGetByRecommendsQuery("recommendCars");
  const [sliderValue, setSliderValue] = useState(50);

  const [cars, setCars] = useState<apiResponsePopulars[]>([]);
  const groupedCarsByType = _.groupBy(cars, "type");
  const groupedCarsBySeat = _.groupBy(cars, "seats");

  useEffect(() => {
    if (popularCarsData && recommendCarsData) {
      const allData = _.concat(popularCarsData, recommendCarsData);
      setCars(allData);
    }
  }, [popularCarsData, recommendCarsData]);

  useEffect(() => {
    console.log(sliderValue);
  }, [sliderValue]);
  return (
    <Box>
      <Box pb={5}>
        <Categories groupedCars={groupedCarsByType} title={"TYPE"} />
      </Box>
      <Categories groupedCars={groupedCarsBySeat} title={"CAPACITY"} />
      <Box mt={10}>
        <Heading
          fontWeight={"normal"}
          letterSpacing={"4px"}
          color={"Secondary.300"}
          py={5}
          fontSize={12}
          as={"h6"}
        >
          Price
        </Heading>
        <Slider
          id="slider"
          defaultValue={50}
          min={0}
          max={100}
          colorScheme="blue"
          onChange={(v) => setSliderValue(v)}
        >
          <SliderTrack bg={"Secondary.300"} h={3} borderRadius={5}>
            <SliderFilledTrack />
          </SliderTrack>

          <SliderThumb
            _before={{
              content: "''",
              w: "16px",
              h: "16px",
              bgGradient: "radial(circle, Primary.500 40%, Primary.0 50%)",
              rounded: "100%",
              position: "absolute",
              top: "-2px",
              left: "-2px",
            }}
          />
        </Slider>
        <Text color="Secondary.400">Max. $100.00 </Text>
      </Box>
    </Box>
  );
}

export default CategoryContent;
