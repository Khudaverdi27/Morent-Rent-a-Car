import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Button,
  Icon,
} from "@chakra-ui/react";
import CardDetailInfo from "./CarDetail-Info";
import CarDetailSlide from "./CardDetail-slide";
import CarReview from "./CarReview";
import { useMediaQuery, useSessionStorage } from "@uidotdev/usehooks";
import _ from "lodash";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useEffect, useState } from "react";
import Section from "../../components/common/Section";
import {
  useGetByPopularQuery,
  useGetByRecommendsQuery,
} from "../../services/request";
import { scrollToUP } from "../../utility/scrollToUp";
import SimpleSlider from "../Home/slider";

export interface CarReviewProps {
  name: string;
  img: string;
  job: string;
  content: string;
  reviewCount: number;
}

function CarDetail() {
  const [storage] = useSessionStorage<any>("carToDetail", {});
  const { data: popularCarsData, isLoading: popularCarsLoading } =
    useGetByPopularQuery("popularCars");
  const { data: recommendCarsData, isLoading: recommendCarsLoading } =
    useGetByRecommendsQuery("recommendCars");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const [showAll, setShowAll] = useState(false);

  const modifyData = storage.review.slice(0, 2);

  useEffect(() => {
    scrollToUP();
  }, []);

  return (
    <>
      <Grid
        mt={10}
        templateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={4}
      >
        <SimpleGrid minChildWidth={"300px"}>
          <GridItem colSpan={1} bg="Primary.0">
            <CarDetailSlide />
          </GridItem>
        </SimpleGrid>
        <SimpleGrid minChildWidth={"300px"}>
          <GridItem colSpan={1}>
            <CardDetailInfo />
          </GridItem>
        </SimpleGrid>
        <GridItem my={5} colSpan={{ base: 1, md: 2 }}>
          <Heading p={6} backgroundColor={"Primary.0"} size="md">
            Reviews{" "}
            <Box
              ml={2}
              fontWeight={"normal"}
              fontSize={"14px"}
              bgColor={"Primary.500"}
              py={1}
              borderRadius={"4px"}
              px={4}
              color={"Primary.0"}
              as="span"
            >
              {storage.review.length}
            </Box>
          </Heading>
          {_.map(
            showAll ? storage.review : modifyData,
            (d: CarReviewProps, i: number) => (
              <CarReview data={d} key={i} />
            )
          )}
          <Box
            display={"flex"}
            p={1}
            justifyContent={"center"}
            bgColor={"Primary.0"}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              color={"Secondary.300"}
              fontSize={"14px"}
              fontWeight={"400"}
              variant={"ghost"}
            >
              {`${showAll ? "Show Less" : "Show All"}`}

              <Icon
                as={
                  showAll
                    ? MdOutlineKeyboardArrowUp
                    : MdOutlineKeyboardArrowDown
                }
                boxSize={6}
              />
            </Button>
          </Box>
        </GridItem>
      </Grid>

      <Box overflow={"hidden"}>
        {isMobile ? (
          <SimpleSlider title={"Recent cars"} carData={popularCarsData} />
        ) : (
          <Section
            title="Recent Cars"
            showAll={true}
            carData={popularCarsData}
            isLoading={popularCarsLoading}
          />
        )}
        {isMobile ? (
          <SimpleSlider
            carData={recommendCarsData}
            title={"Recomendation cars"}
          />
        ) : (
          <Section
            title="Recomendation Cars"
            showAll={true}
            carData={
              Array.isArray(recommendCarsData)
                ? recommendCarsData.slice(0, 4)
                : []
            }
            isLoading={recommendCarsLoading}
          />
        )}
      </Box>
    </>
  );
}

export default CarDetail;
