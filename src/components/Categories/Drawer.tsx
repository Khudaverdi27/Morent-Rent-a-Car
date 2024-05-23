import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import IconBtn from "../shared/IconBtn";
import { GiSettingsKnobs } from "react-icons/gi";
import Logo from "../common/Logo";
import CategoryContent from "./CategoryContent";
import { GrClose } from "react-icons/gr";
import { useMediaQuery } from "@uidotdev/usehooks";

interface IDrawerProps {
  isLoading: boolean;
}

function DrawerToggle({ isLoading }: IDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMediaQuery(
    "only screen and (min-width : 481px) and (max-width : 781px)"
  );
  return (
    <>
      {isMobile ? (
        <Button
          variant={"ghost"}
          size={"sm"}
          _hover={{
            background: "transparent",
          }}
          onClick={onOpen}
        >
          <GiSettingsKnobs
            cursor={"pointer"}
            style={{
              rotate: "90deg",
              color: `${isLoading ? "#85A8F8" : "gray"}`,
            }}
          />
        </Button>
      ) : (
        <IconBtn>
          <GiSettingsKnobs
            onClick={onOpen}
            style={{
              rotate: "90deg",
              color: `${isLoading ? "#85A8F8" : "gray"}`,
            }}
          />
        </IconBtn>
      )}

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottomWidth="1px"
          >
            <Logo />
            <GrClose cursor={"pointer"} onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <CategoryContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerToggle;
