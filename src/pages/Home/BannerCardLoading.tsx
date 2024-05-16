import { CardBody, Image } from "@chakra-ui/react";
import BannerCard from "./BannerCard";
import imgg from "../../assets/images/loadingImg.png";
function BannerCardLoading() {
  return (
    <BannerCard>
      <CardBody
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={imgg} className="pulse" />
      </CardBody>
    </BannerCard>
  );
}

export default BannerCardLoading;
