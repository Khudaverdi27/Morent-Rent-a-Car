import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import CardDetailInfo from "./CarDetail-Info";
import CarDetailSlide from "./CardDetail-slide";

function CarDetail() {
  return (
    <Grid
      my={10}
      templateRows="repeat(2, 1fr)"
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
      <GridItem colSpan={{ base: 1, md: 2 }} bg="tomato">
        s
      </GridItem>
    </Grid>
  );
}

export default CarDetail;
