import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

function MainLayout() {
  return (
    <Box as={"main"}>
      <Navbar />
      <Container as={"section"} maxW={"1335px"}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default MainLayout;
