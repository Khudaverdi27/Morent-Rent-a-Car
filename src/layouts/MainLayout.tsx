import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer/Footer";
import Banner from "../pages/Home/HomeBanner";
import CategoriesLayout from "../components/Categories/CategoriesLayout";
import { useAppSelector } from "../Redux/hooks/reduxhook";
import { useMediaQuery } from "@uidotdev/usehooks";
import _ from "lodash";
import CategoryContent from "../components/Categories/CategoryContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { authInfo } from "../Redux/features/authSlice";

function MainLayout() {
  const isOpen = useAppSelector((state) => state.openCategory.value);
  const isMobile = useMediaQuery("only screen and (max-width : 780px)");
  const path = useLocation().pathname;
  const info = useSelector(authInfo);
  console.log(info);
  return (
    <Box as={"main"} bg={"Secondary.50"}>
      <ToastContainer autoClose={2000} />
      <Navbar />
      {!isOpen && path === "/" && <Banner />}
      <Flex>
        {!isMobile && (
          <CategoriesLayout>
            <CategoryContent />
          </CategoriesLayout>
        )}
        <Container as={"section"} maxW={"1340px"}>
          <Outlet />
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}

export default MainLayout;
