import { Box, Image } from "@chakra-ui/react";
import { useSessionStorage } from "@uidotdev/usehooks";
import _ from "lodash";
import Slider from "react-slick";

function CarDetailSlide() {
  const [storage] = useSessionStorage<any>("carToDetail", {});
  const img = storage.img.main.slice(0, -5);

  const settings = {
    customPaging: function (i: number) {
      return (
        <Box h={"100%"} border={"1px solid gray"} borderRadius={"10px"}>
          <Image
            w={"100%"}
            borderRadius={"10px"}
            h={"100%"}
            objectFit={i === 0 ? "contain" : "cover"}
            src={`${img}${i + 1}.png`}
          />
        </Box>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <Box className="slider-container carDetail">
      <Slider {...settings}>
        {_.map(storage.img.view, (c: string,i:number) => (
          <Box key={i} w={"100%"} h={"100%"}>
            <Image src={c} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default CarDetailSlide;
