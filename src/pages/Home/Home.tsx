import { Box } from "@chakra-ui/react";
import Banner from "./HomeBanner";
import SelectBox from "./SelectBox";

function Home() {
  return (
    <Box as={"section"} h={"100vh"} pt={5}>
      <Banner />
      <SelectBox />
    </Box>
  );
}

export default Home;
