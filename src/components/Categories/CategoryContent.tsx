import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
  Text,
  HStack,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";
import {
  useGetByPopularQuery,
  useGetByRecommendsQuery,
} from "../../services/request";
import { useState, useEffect } from "react";
import _ from "lodash";
import { apiResponsePopulars } from "../../types/apiResponse";
import Categories from "./Categories";
import { useAppDispatch } from "../../Redux/hooks/reduxhook";
import { addData } from "../../Redux/features/slice";

function CategoryContent() {
  const { data: popularCarsData } = useGetByPopularQuery("popularCars");
  const { data: recommendCarsData } = useGetByRecommendsQuery("recommendCars");
  const [sliderValue, setSliderValue] = useState<string | number>(50);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipValue, setTooltipValue] = useState<number>(50);
  const [cars, setCars] = useState<apiResponsePopulars[]>([]);
  const groupedCarsByType = _.groupBy(cars, "type");
  const groupedCarsBySeat = _.groupBy(cars, "seats");

  useEffect(() => {
    if (popularCarsData && recommendCarsData) {
      const allData = _.concat(popularCarsData, recommendCarsData);
      setCars(allData);
    }
  }, [popularCarsData, recommendCarsData]);

  const dispatch = useAppDispatch();

  const saveInArray = (value: string | number) => {
    dispatch(addData(value));
    setSliderValue(value);
  };

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
          onChangeEnd={(v) => saveInArray(v)}
          onChange={(v) => setTooltipValue(v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <SliderTrack bg={"Secondary.300"} h={3} borderRadius={5}>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="Primary.500"
            color="white"
            placement="top"
            isOpen={showTooltip}
            label={`$${tooltipValue}`}
          >
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
          </Tooltip>
        </Slider>
        <HStack color="Secondary.400" justify={"space-between"}>
          <Text>{`Selected price. $${sliderValue}`} </Text>
          <Text>Max. $100.00</Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default CategoryContent;
