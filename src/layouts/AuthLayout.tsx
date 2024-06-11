import { Box } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import bgImg from "../assets/img/carBg.mp4";
import { useSelector } from "react-redux";
import { authInfo } from "../Redux/features/authSlice";
import { useEffect } from "react";

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
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          objectFit: "cover",
        }}
      >
        <source src={bgImg} type="video/mp4" />
      </video>
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
