import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <Container as={"main"} maxW={"1440px"}>
      <Outlet />
    </Container>
  );
}

export default MainLayout;
