import { SimpleGrid } from "@chakra-ui/react";
import car from "../../assets/img/image 7.png";
import car8 from "../../assets/img/image 8.png";
import BannerCard from "./BannerCard";

function Banner() {
  return (
    <SimpleGrid as={"article"} minChildWidth={"250px"} spacing={10}>
      <BannerCard
        className="left-banner-circle--pattern"
        title="The Best Platform for Car Rental"
        text="Ease of doing a car rental safely and reliably. Of course at a low
            price."
        img={car}
        bgPattern={"circle"}
      />
      <BannerCard
        className="right-banner-zig--pattern"
        title="Easy way to rent a car at a low price"
        text="Providing cheap car rental services and safe and comfortable
        facilities."
        img={car8}
        bgPattern={"zigzag"}
      />
    </SimpleGrid>
  );
}

export default Banner;
