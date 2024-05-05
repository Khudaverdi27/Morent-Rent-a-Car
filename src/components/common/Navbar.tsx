import { Avatar, Flex, HStack, Spacer } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { Icon } from "@chakra-ui/react";
import Logo from "./Logo";
import Search from "../../Form/Search";
import IconBtn from "../shared/IconBtn";

function Navbar() {
  return (
    <Flex
      zIndex={"10"}
      width="100%"
      pos={"sticky"}
      top="0"
      align={"center"}
      bgColor={"Primary.0"}
      pl={"30px"}
      pr={"20px"}
      py={"15px"}
      boxShadow="sm"
      as="header"
    >
      <HStack w={"50%"} spacing="54px">
        <Logo />
        <Search />
      </HStack>
      <Spacer />
      <HStack spacing="14px">
        <IconBtn>
          <Icon as={FaHeart} boxSize={5} />
        </IconBtn>
        <IconBtn>
          <Icon className="bell--icon" as={BiSolidBell} boxSize={5} />
        </IconBtn>
        <IconBtn>
          <Icon as={IoMdSettings} boxSize={5} />
        </IconBtn>
        <IconBtn>
          <Avatar w={"44px"} h={"44px"} src="#" />
        </IconBtn>
      </HStack>
    </Flex>
  );
}

export default Navbar;
