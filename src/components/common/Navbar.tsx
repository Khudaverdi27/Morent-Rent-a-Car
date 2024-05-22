import { Flex, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import Search from "../../Form/Search";
import { useGetByPopularQuery } from "../../services/request";
import ProfileSettings from "./ProfileSettings";
import { useState } from "react";

function Navbar() {
  const { isLoading } = useGetByPopularQuery("banner");
  const [show, setShow] = useState<boolean>(false);

  const showSettings = () => {
    setShow(!show);
  };

  return (
    <Flex
      zIndex={"10"}
      width="100%"
      pos={"sticky"}
      top="0"
      align={"center"}
      bgColor={"Primary.0"}
      px={"20px"}
      py={"15px"}
      boxShadow="sm"
      as="header"
    >
      <HStack
        flexWrap={{ base: "wrap", sm: "nowrap" }}
        w={{ base: "100%", lg: "50%" }}
        spacing={{ sm: "10px", md: "54px" }}
      >
        {isLoading ? (
          <Skeleton
            my={5}
            startColor="Primary.300"
            endColor="Primary.200"
            borderRadius={"10px"}
            w={200}
            height="16px"
          />
        ) : (
          <Logo />
        )}
        <Spacer />

        <Search show={show} />
      </HStack>
      <Spacer />
      <ProfileSettings
        showSettings={showSettings}
        isLoading={isLoading}
        show={show}
      />
    </Flex>
  );
}

export default Navbar;
