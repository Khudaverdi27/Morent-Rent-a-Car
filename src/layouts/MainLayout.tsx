import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer/Footer";

function MainLayout() {
  return (
    <Box as={"main"} bg={"Secondary.50"}>
      <Navbar />
      <Container as={"section"} maxW={"1340px"}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default MainLayout;
