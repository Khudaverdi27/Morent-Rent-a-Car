import Slider from "react-slick";
import { apiResponsePopulars } from "../../types/apiResponse";
import CardCar from "./CardCar";
import CardCarContent from "./CardCarContent";
import _ from "lodash";
import { Box, Text } from "@chakra-ui/react";
interface ISectionProps {
  carData: any;
  title: string;
}
export default function SimpleSlider({ carData, title }: ISectionProps) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    cssEase: "linear",
  };

  return (
    <Box className="slider-container mobile-slider">
      <Text color={"Secondary.300"} py={5}>
        {title}
      </Text>
      <Slider {...settings}>
        {_.map(carData, (d: apiResponsePopulars) => (
          <Box pr={16} key={d.id}>
            <CardCar>
              <CardCarContent {...d} isMobile={true} />
            </CardCar>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
