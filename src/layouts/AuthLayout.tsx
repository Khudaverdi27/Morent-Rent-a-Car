import React, { useEffect, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import bgVideo from "../assets/videos/carBg.mp4";
import { useSelector } from "react-redux";
import { authInfo } from "../Redux/features/authSlice";
import Logo from "../components/common/Logo";

const AuthLayout: React.FC = () => {
  const authData = useSelector(authInfo);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (authData.email || authData.password) {
      navigate("/");
    }

    // Video tam ekran modunu engelleme
    const preventFullscreen = (event: Event) => {
      event.preventDefault();
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("fullscreenchange", preventFullscreen);
      videoElement.addEventListener(
        "webkitfullscreenchange",
        preventFullscreen
      );
      videoElement.addEventListener("mozfullscreenchange", preventFullscreen);
      videoElement.addEventListener("msfullscreenchange", preventFullscreen);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("fullscreenchange", preventFullscreen);
        videoElement.removeEventListener(
          "webkitfullscreenchange",
          preventFullscreen
        );
        videoElement.removeEventListener(
          "mozfullscreenchange",
          preventFullscreen
        );
        videoElement.removeEventListener(
          "msfullscreenchange",
          preventFullscreen
        );
      }
    };
  }, [authData, navigate]);

  return (
    <Box as="main" h="100vh" pos="relative">
      <Flex
        px={3}
        py={1}
        zIndex={10}
        bgColor="Primary.0"
        pos="absolute"
        w="100%"
        alignItems="center"
        justify="space-between"
      >
        <Logo />
      </Flex>
      <video
        ref={videoRef}
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
          zIndex: 1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Box
        pos="relative"
        zIndex={9}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthLayout;
