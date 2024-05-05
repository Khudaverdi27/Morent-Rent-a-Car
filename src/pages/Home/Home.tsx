import { Box, Button } from "@chakra-ui/react";
import Banner from "./HomeBanner";
import SelectBox from "./SelectBox";
import Section from "../../components/common/Section";

function Home() {
  return (
    <Box as={"section"} pt={5}>
      <Banner />
      <SelectBox />
      <Section title="Popular Cars" showAll={true} />
      {/* <Section title="Recomendation Car" showAll={false} /> */}
      <Box my={10} textAlign={"center"}>
        <Button
          _hover={{ bg: "Primary.600" }}
          variant="solid"
          bgColor={"Primary.500"}
          color={"Primary.0"}
          fontWeight={"normal"}
        >
          Show more car
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
