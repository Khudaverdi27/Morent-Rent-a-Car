import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer/Footer";
import Banner from "../pages/Home/HomeBanner";
import CategoriesLayout from "../components/Categories/CategoriesLayout";
import { useAppSelector } from "../Redux/hooks/reduxhook";
import { useMediaQuery } from "@uidotdev/usehooks";

function MainLayout() {
  const isOpen = useAppSelector((state) => state.click.value);
  const isMobile = useMediaQuery("only screen and (max-width : 780px)");
  return (
    <Box as={"main"} bg={"Secondary.50"}>
      <Navbar />
      {(!isOpen || isMobile) && <Banner />}
      <Flex>
        {!isMobile && <CategoriesLayout />}
        <Container as={"section"} maxW={"1340px"}>
          <Outlet />
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}

export default MainLayout;
