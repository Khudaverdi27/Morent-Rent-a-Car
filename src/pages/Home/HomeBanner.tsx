import { SimpleGrid, Button, CardBody, Image, Text } from "@chakra-ui/react";
import BannerCard from "./BannerCard";
import { useGetByNameQuery } from "../../services/request";
import _ from "lodash";
import BannerCardLoading from "./BannerCardLoading";
import { apiResponseBanner } from "../../types/apiResponse";

function Banner() {
  const { data, isLoading } = useGetByNameQuery("banner");

  return (
    <SimpleGrid as={"article"} minChildWidth={"250px"} spacing={10}>
      {isLoading ? (
        <>
          <BannerCardLoading />
          <BannerCardLoading />
        </>
      ) : (
        _.map(data, (d: apiResponseBanner) => (
          <BannerCard
            key={d.id}
            className={d.classname}
            bgPattern={d.bgPattern}
          >
            <CardBody color="Primary.0" position={"relative"}>
              <Text fontSize={"32px"} as={"h2"} maxW={"50%"} fontWeight={"500"}>
                {d.title}
              </Text>
              <Text maxW={"50%"} py={5}>
                {d.text}
              </Text>
              <Button
                _hover={{
                  bgColor:
                    d.bgPattern === "circle"
                      ? "Primary.600"
                      : "Information.600",
                }}
                fontWeight={"400"}
                bg={
                  d.bgPattern === "circle" ? "Primary.500" : "Information.500"
                }
                color="Primary.0"
              >
                Rental Car
              </Button>
              <Image
                top={"66%"}
                left={"25%"}
                position={"absolute"}
                src={d.img}
              />
            </CardBody>
          </BannerCard>
        ))
      )}
    </SimpleGrid>
  );
}

export default Banner;
