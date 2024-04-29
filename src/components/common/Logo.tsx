import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <Box color={"Primary.500"} fontWeight={700} fontSize={"32px"} as={"a"}>
        MORENT
      </Box>
    </Link>
  );
}

export default Logo;
