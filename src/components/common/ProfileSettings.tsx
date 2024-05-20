import { FaHeart } from "react-icons/fa6";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { Avatar, Icon, Stack } from "@chakra-ui/react";
import IconBtn from "../shared/IconBtn";
import { useMediaQuery } from "@uidotdev/usehooks";

interface iProfileProps {
  isLoading: boolean;
  show: boolean;
  showSettings: () => void;
}

function ProfileSettings({ isLoading, showSettings, show }: iProfileProps) {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <Stack
      pos={{ base: "absolute", md: "relative" }}
      right={{ base: 4, sm: 0 }}
      top={{ base: 5, md: 0 }}
      direction={{ base: "column", md: "row" }}
    >
      {(show || !isMobile) && (
        <Stack
          direction={{ base: "column", md: "row" }}
          order={isMobile ? 3 : 0}
        >
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
        </Stack>
      )}

      <IconBtn handleClick={showSettings} order={isMobile ? 0 : 3}>
        <Avatar
          bgColor={isLoading ? "Primary.300" : ""}
          w={"44px"}
          h={"44px"}
          src="#"
        />
      </IconBtn>
    </Stack>
  );
}

export default ProfileSettings;
