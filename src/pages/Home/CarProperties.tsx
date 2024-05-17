import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FaGasPump } from "react-icons/fa6";
import { SiCircle } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import IconBtn from "../../components/shared/IconBtn";
import { useMediaQuery } from "@uidotdev/usehooks";

function CarProperties({ isMobile = false, ...props }) {
  const isSmallScreen = useMediaQuery("only screen and (max-width : 480px)");
  return (
    <Flex
      direction={!isMobile || !isSmallScreen ? "row" : "column"}
      justify={"space-between"}
      alignItems={"flex-end"}
      height={"40%"}
    >
      <HStack gap="0" color={"Secondary.300"} fontSize={14}>
        <IconBtn border="none">
          <Icon as={FaGasPump} boxSize={5} />
        </IconBtn>
        <Text>{props.gas}</Text>
      </HStack>
      <HStack gap="0" color={"Secondary.300"} fontSize={14}>
        <IconBtn border="none">
          <Icon as={SiCircle} boxSize={5} />
        </IconBtn>
        <Text>{props.control}</Text>
      </HStack>
      <HStack gap="0" color={"Secondary.300"} fontSize={14}>
        <IconBtn border="none">
          <Icon as={FaUserGroup} boxSize={5} />
        </IconBtn>
        <Text whiteSpace={"nowrap"}>{props.seats}</Text>
      </HStack>
    </Flex>
  );
}

export default CarProperties;
