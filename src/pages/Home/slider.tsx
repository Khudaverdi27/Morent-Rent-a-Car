import Slider from "react-slick";
import { apiResponsePopulars } from "../../types/apiResponse";
import CardCar from "./CardCar";
import CardCarContent from "./CardCarContent";
import _ from "lodash";
interface ISectionProps {
  carData: any;
}
export default function SimpleSlider({ carData }: ISectionProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    focusOnSelect: true,
  };
  return (
    <Slider {...settings}>
      {_.map(carData, (d: apiResponsePopulars) => (
        <CardCar key={d.id}>
          <CardCarContent {...d} isMobile={true} />
        </CardCar>
      ))}
    </Slider>
  );
}
