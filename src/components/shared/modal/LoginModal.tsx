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
export default function LoginModal({ isLoading }: loading) {
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
          fontWeight={"400"}
          bgColor={"Primary.300"}
          color="Primary.0"
          _hover={{ bgColor: "Primary.400" }}
          w={"100%"}
          onClick={onOpen}
        >
          Login
        </Button>
      )}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Login</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
