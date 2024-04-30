import { Box } from "@chakra-ui/react";
import Banner from "./HomeBanner";

function Home() {
  return (
    <Box as={"section"} h={"100vh"} pt={5}>
      <Banner />
    </Box>
  );
}

export default Home;
