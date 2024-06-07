import { Flex, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import Search from "../../Form/Search";
import { useGetByPopularQuery } from "../../services/request";
import ProfileSettings from "./ProfileSettings";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSessionStorage } from "@uidotdev/usehooks";
import LoginModal from "../shared/modal/LoginModal";
import RegisterModal from "../shared/modal/RegisterModal";

function Navbar() {
  const { isLoading } = useGetByPopularQuery("banner");
  const [storage] = useSessionStorage<string>("token", "");
  const [show, setShow] = useState<boolean>(false);

  const showSettings = () => {
    setShow(!show);
  };

  const path = useLocation().pathname;

  return (
    <Flex
      zIndex={"10"}
      width="100%"
      pos={"sticky"}
      flexWrap={{ base: "wrap", md: "nowrap" }}
      top="0"
      align={"center"}
      bgColor={"Primary.0"}
      px={"20px"}
      py={"15px"}
      boxShadow="sm"
      as="header"
    >
      <HStack
        mb={[0, 5, 0]}
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

        {path !== "/car-detail/payment" && <Search show={show} />}
      </HStack>
      <Spacer />
      {storage ? (
        <ProfileSettings
          showSettings={showSettings}
          isLoading={isLoading}
          show={show}
        />
      ) : (
        <HStack w={{ base: "100%", md: "auto" }} gap={2}>
          <LoginModal isLoading={isLoading} />
          <RegisterModal isLoading={isLoading} />
        </HStack>
      )}
    </Flex>
  );
}

export default Navbar;
