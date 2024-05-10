import { Avatar, Flex, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { Icon } from "@chakra-ui/react";
import Logo from "./Logo";
import Search from "../../Form/Search";
import IconBtn from "../shared/IconBtn";
import { useGetByPopularQuery } from "../../services/request";

function Navbar() {
  const { isLoading } = useGetByPopularQuery("banner");

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
        {isLoading ? (
          <Skeleton
            startColor="Primary.300"
            endColor="Primary.200"
            borderRadius={"10px"}
            w={200}
            height="16px"
          />
        ) : (
          <Logo />
        )}

        <Search />
      </HStack>
      <Spacer />
      <HStack spacing="14px">
        <IconBtn>
          <Icon
            color={isLoading ? "Primary.300" : ""}
            as={FaHeart}
            boxSize={5}
          />
        </IconBtn>
        <IconBtn>
          <Icon
            color={isLoading ? "Primary.300" : ""}
            className="bell--icon"
            as={BiSolidBell}
            boxSize={5}
          />
        </IconBtn>
        <IconBtn>
          <Icon
            color={isLoading ? "Primary.300" : ""}
            as={IoMdSettings}
            boxSize={5}
          />
        </IconBtn>
        <IconBtn>
          <Avatar
            bgColor={isLoading ? "Primary.300" : ""}
            w={"44px"}
            h={"44px"}
            src="#"
          />
        </IconBtn>
      </HStack>
    </Flex>
  );
}

export default Navbar;
