import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Button,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";

type loading = {
  isLoading: boolean;
};
export default function RegisterModal({ isLoading }: loading) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isLoading ? (
        <Skeleton
          my={5}
          startColor="Primary.300"
          endColor="Primary.200"
          borderRadius={"10px"}
          w={"100%"}
          height="30px"
        />
      ) : (
        <Button
          w={"100%"}
          fontWeight={"400"}
          bgColor={"Primary.500"}
          color="Primary.0"
          _hover={{ bgColor: "Primary.400" }}
          onClick={onOpen}
        >
          Register
        </Button>
      )}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Register</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
