import {
  Button,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Auth() {
  const [show, setShow] = useState(false);
  const [showConfrim, setShowConfrim] = useState(false);
  const handleClick = () => setShow(!show);
  const handleConfrimShow = () => setShowConfrim(!showConfrim);
  return (
    <Card
      pos={"absolute"}
      bgGradient="linear(to-t, #48c6ef 0%, #6f86d6 100%)"
      py={8}
      px={10}
      w={{ base: "350px", sm: "500px" }}
      top={"50%"}
      transform="translate(-50%, -50%)"
      left={"50%"}
      color={"Primary.600"}
    >
      <CardHeader
        color={"Primary.100"}
        fontWeight={600}
        textAlign={"center"}
        fontSize={24}
      >
        Welcome To Morent
      </CardHeader>
      <FormControl>
        <FormLabel>Name Surname</FormLabel>
        <Input
          variant="flushed"
          type="text"
          placeholder="Enter name and surname"
          _placeholder={{ color: "Primary.200" }}
        />
        <FormLabel mt={1}>Email</FormLabel>
        <Input
          variant="flushed"
          _placeholder={{ color: "Primary.200" }}
          type="email"
          placeholder="Enter email"
        />
        <FormLabel mt={1}>Password</FormLabel>
        <InputGroup>
          <Input
            variant="flushed"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            _placeholder={{ color: "Primary.200" }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormLabel mt={1}>Confrim password</FormLabel>
        <InputGroup>
          <Input
            variant="flushed"
            type={show ? "text" : "Confrim password"}
            placeholder="Enter password again"
            _placeholder={{ color: "Primary.200" }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleConfrimShow}>
              {showConfrim ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Card>
  );
}

export default Auth;
