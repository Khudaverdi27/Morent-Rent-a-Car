import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer/Footer";
import Banner from "../pages/Home/HomeBanner";
import CategoriesLayout from "../components/Categories/CategoriesLayout";

function MainLayout() {
  return (
    <Box as={"main"} bg={"Secondary.50"}>
      <Navbar />
      <Banner />
      <Flex>
        <CategoriesLayout />
        <Container as={"section"} maxW={"1340px"}>
          <Outlet />
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}

export default MainLayout;
