import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import bgImg from "../assets/img/welcome-banner.png";

function AuthLayout() {
  return (
    <Box
      as="main"
      h="100vh"
      backgroundImage={`url(${bgImg})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      pos={"relative"}
    >
      <Box
        w={"100%"}
        h={"100vh"}
        pos={"absolute"}
        bgGradient="linear(to-r,  Primary.1000 100%, Primary.100 0%)"
        opacity={0.6}
      >
        0
      </Box>
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
