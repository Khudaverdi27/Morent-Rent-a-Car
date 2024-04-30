import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <Box color={"Primary.500"} fontWeight={700} fontSize={"32px"} as={"span"}>
        MORENT
      </Box>
    </Link>
  );
}

export default Logo;
