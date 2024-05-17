import { CardBody, Image } from "@chakra-ui/react";
import BannerCard from "./BannerCard";

function BannerCardLoading() {
  return (
    <BannerCard>
      <CardBody
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src="images/loadingImg.png" className="pulse" />
      </CardBody>
    </BannerCard>
  );
}

export default BannerCardLoading;
