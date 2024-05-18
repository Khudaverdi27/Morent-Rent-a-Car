import Slider from "react-slick";
import { apiResponsePopulars } from "../../types/apiResponse";
import CardCar from "./CardCar";
import CardCarContent from "./CardCarContent";
import _ from "lodash";
import { Box } from "@chakra-ui/react";
interface ISectionProps {
  carData: any;
}
export default function SimpleSlider({ carData }: ISectionProps) {
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
    <Box className="slider-container">
      <Slider {...settings}>
        {_.map(carData, (d: apiResponsePopulars) => (
          <Box ml={10} pr={7} key={d.id}>
            <CardCar>
              <CardCarContent {...d} isMobile={true} />
            </CardCar>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
