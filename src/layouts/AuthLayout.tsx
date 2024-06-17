import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import bgVideo from "../assets/videos/carBg.mp4";
import { useSelector } from "react-redux";
import { authInfo } from "../Redux/features/authSlice";
import { useEffect } from "react";
import Logo from "../components/common/Logo";
import { ToastContainer } from "react-toastify";
import { useSessionStorage } from "@uidotdev/usehooks";

function AuthLayout() {
  const [token] = useSessionStorage("token", "");
  const navigate = useNavigate();
  const info = useSelector(authInfo);
  console.log(info);
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <Box as="main" h="100vh" pos={"relative"}>
      <ToastContainer autoClose={2000} />
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
