import {
  Box,
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
import { useLocation } from "react-router-dom";

function Auth() {
  const [show, setShow] = useState(false);
  const [showConfrim, setShowConfrim] = useState(false);
  const handleClick = () => setShow(!show);
  const handleConfrimShow = () => setShowConfrim(!showConfrim);
  const path = useLocation().pathname.includes("register");

  return (
    <Card
      pos={"absolute"}
      bgGradient="linear(to-t,  Primary.0 0%, Primary.100 100%)"
      py={8}
      px={10}
      w={{ base: "350px", sm: "500px" }}
      top={"50%"}
      transform="translate(-50%, -50%)"
      left={"50%"}
      color={"Primary.800"}
    >
      <CardHeader
        color={"Primary.900"}
        fontWeight={600}
        textAlign={"center"}
        fontSize={26}
      >
        Welcome To Morent
      </CardHeader>
      <FormControl>
        {path && (
          <>
            <FormLabel>Name Surname</FormLabel>
            <Input
              variant="flushed"
              type="text"
              placeholder="Enter name and surname"
              _placeholder={{ color: "Primary.400" }}
            />
          </>
        )}

        <FormLabel mt={1}>Email</FormLabel>
        <Input
          variant="flushed"
          _placeholder={{ color: "Primary.400" }}
          type="email"
          placeholder="Enter your email"
        />
        <FormLabel mt={1}>Password</FormLabel>
        <InputGroup>
          <Input
            variant="flushed"
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            _placeholder={{ color: "Primary.400" }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {path && (
          <>
            <FormLabel mt={1}>Confrim password</FormLabel>
            <InputGroup>
              <Input
                variant="flushed"
                type={show ? "text" : "Confrim password"}
                placeholder="Enter password again"
                _placeholder={{ color: "Primary.400" }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleConfrimShow}>
                  {showConfrim ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </>
        )}
      </FormControl>
      <Box
        color="Information.800"
        fontSize={"14px"}
        textAlign={"center"}
        pt={3}
      >
        Ease of doing a car rental safely and reliably.
      </Box>
    </Card>
  );
}

export default Auth;
