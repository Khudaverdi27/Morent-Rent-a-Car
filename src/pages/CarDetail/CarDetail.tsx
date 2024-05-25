import { Grid, GridItem } from "@chakra-ui/react";
import CardDetailInfo from "./CardDetail-Info";

function CarDetail() {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem colSpan={1} bg="papayawhip"></GridItem>
      <GridItem colSpan={1} bg="papayawhip">
        <CardDetailInfo />
      </GridItem>
      <GridItem colSpan={2} bg="tomato" />
    </Grid>
  );
}

export default CarDetail;
