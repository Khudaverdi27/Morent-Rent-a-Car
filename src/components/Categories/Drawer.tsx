import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  useDisclosure,
  Button,
  Input,
  DrawerCloseButton,
  DrawerFooter,
} from "@chakra-ui/react";
// import IconBtn from "../shared/IconBtn";
// import { GiSettingsKnobs } from "react-icons/gi";
// import Logo from "../common/Logo";
// import CategoryContent from "./CategoryContent";
// import { GrClose } from "react-icons/gr";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useRef } from "react";

interface IDrawerProps {
  isLoading: boolean;
}

function DrawerToggle({ isLoading }: IDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMediaQuery(
    "only screen and (min-width : 481px) and (max-width : 781px)"
  );
  const btnRef = useRef<any>();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerToggle;
