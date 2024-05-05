import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FaGasPump } from "react-icons/fa6";
import { SiCircle } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import IconBtn from "../../components/shared/IconBtn";

function CarProperties() {
  return (
    <Flex mt={7}>
      <HStack mt="6" gap="0" color={"Secondary.300"} fontSize={14}>
        <IconBtn border="none">
          <Icon as={FaGasPump} boxSize={5} />
        </IconBtn>
        <Text>90L</Text>
      </HStack>
      <HStack mt="6" gap="0" color={"Secondary.300"} fontSize={14}>
        <IconBtn border="none">
          <Icon as={SiCircle} boxSize={5} />
        </IconBtn>
        <Text>Manual</Text>
      </HStack>
      <HStack mt="6" gap="0" color={"Secondary.300"} fontSize={14}>
        <IconBtn border="none">
          <Icon as={FaUserGroup} boxSize={5} />
        </IconBtn>
        <Text whiteSpace={"nowrap"}>2 People</Text>
      </HStack>
    </Flex>
  );
}

export default CarProperties;
