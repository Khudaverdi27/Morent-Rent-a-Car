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
  }, [authData, navigate]);

  return (
    <Box as="main" h="100vh" pos={"relative"}>
      <Flex
        px={3}
        py={1}
        zIndex={10} // Z-index değerini artırdık
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
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: 1, // Video için daha düşük bir z-index değeri
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Box
        pos={"relative"}
        zIndex={9} // İçerik için yüksek bir z-index değeri
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthLayout;
