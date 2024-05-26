import { SimpleGrid, Button, CardBody, Image, Text } from "@chakra-ui/react";
import BannerCard from "./BannerCard";
import { useGetByNameQuery } from "../../services/request";
import _ from "lodash";
import BannerCardLoading from "./BannerCardLoading";
import { apiResponseBanner } from "../../types/apiResponse";
import { useMediaQuery } from "@uidotdev/usehooks";

function Banner() {
  const { data, isLoading } = useGetByNameQuery("banner");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const newData =
    isMobile && Array.isArray(data) ? [...data.slice(0, 1)] : data;

  return (
    <SimpleGrid
      px={"20px"}
      mt={5}
      as={"article"}
      minChildWidth={"250px"}
      spacing={10}
    >
      {isLoading ? (
        <>
          <BannerCardLoading />
          {!isMobile && <BannerCardLoading />}
        </>
      ) : (
        _.map(newData, (d: apiResponseBanner) => (
          <BannerCard
            key={d.id}
            className={d.classname}
            bgPattern={d.bgPattern}
          >
            <CardBody color="Primary.0" position={"relative"}>
              <Text
                fontSize={{ base: "xl", sm: "3xl" }}
                as={"h2"}
                maxW={{ base: "100%", lg: "50%" }}
                fontWeight={"500"}
              >
                {d.title}
              </Text>
              <Text maxW={{ base: "100%", lg: "50%" }} py={5}>
                {d.text}
              </Text>
              <Button
                size={{ base: "sm", sm: "md" }}
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
                w={{ base: "70%", sm: "50%", md: "60%", lg: "52%" }}
                top={{ base: "80%", sm: "70%", md: "84%", lg: "70%" }}
                left={{ base: "27%", md: "38%", lg: "38%" }}
                position={"absolute"}
                src={d.img.main}
              />
            </CardBody>
          </BannerCard>
        ))
      )}
    </SimpleGrid>
  );
}

export default Banner;
