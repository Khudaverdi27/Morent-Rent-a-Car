import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import bgVideo from "../assets/videos/carBg.mp4";
import { useSelector } from "react-redux";
import { authInfo } from "../Redux/features/authSlice";
import { useEffect } from "react";
import Logo from "../components/common/Logo";

function AuthLayout() {
  const authData = useSelector(authInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (authData.email || authData.password) {
      navigate("/");
    }
  }, []);

  return (
    <Box as="main" h="100vh" pos={"relative"}>
      <Flex
        px={3}
        py={1}
        zIndex={9}
        bgColor={"Primary.0"}
        pos={"absolute"}
        w={"100%"}
        alignItems={"center"}
        justify={"space-between"}
      >
        <Logo />
      </Flex>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          objectFit: "cover",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
