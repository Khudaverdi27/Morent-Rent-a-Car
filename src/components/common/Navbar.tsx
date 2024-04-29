import { Flex, HStack, Img, Spacer } from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

import Logo from "./Logo";
import Search from "../../Form/Search";
import IconBtn from "../shared/IconBtn";

function Navbar() {
  return (
    <Flex
      width="100%"
      align={"center"}
      bgColor={"Primary.0"}
      pl={"30px"}
      pr={"20px"}
      py={"15px"}
      borderBottom={"1px"}
      borderColor={"Secondary.300"}
      as="header"
    >
      <HStack spacing="44px">
        <Logo />
        <Search />
      </HStack>
      <Spacer />
      <HStack spacing="14px">
        <IconBtn>
          <BsFillHeartFill />
        </IconBtn>
        <IconBtn>
          <BiSolidBell />
        </IconBtn>
        <IconBtn>
          <IoMdSettings />
        </IconBtn>
        <IconBtn>
          <Img />
        </IconBtn>
      </HStack>
    </Flex>
  );
}

export default Navbar;
