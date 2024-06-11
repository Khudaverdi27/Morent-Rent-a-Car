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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginType, RegisterType } from "../../types/Inputs";
import { LoginSchema, RegisterSchema } from "../../validation/inputSchema";

function Auth() {
  const [show, setShow] = useState(false);
  const [showConfrim, setShowConfrim] = useState(false);
  const handleClick = () => setShow(!show);
  const handleConfrimShow = () => setShowConfrim(!showConfrim);
  const path = useLocation().pathname.includes("register");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType | RegisterType>({
    resolver: yupResolver(path ? RegisterSchema : LoginSchema),
  });

  const registerErrors = errors as FieldErrors<RegisterType>;

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data);
  };

  return (
    <Card
      mt={2}
      opacity={0.8}
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
        fontSize={24}
        whiteSpace={"nowrap"}
      >
        Welcome To Morent
      </CardHeader>
      <FormControl as={"form"} onSubmit={handleSubmit(onSubmit)}>
        {path && (
          <>
            <FormLabel>Name Surname</FormLabel>
            <Input
              {...register("name")}
              variant="flushed"
              type="text"
              placeholder="Enter name and surname"
              _placeholder={{ color: "Primary.400", fontSize: "13px" }}
            />
            {registerErrors.name &&
              typeof registerErrors.name.message === "string" && (
                <Text
                  role="alert"
                  as="span"
                  fontSize={"14px"}
                  color={"Error.500"}
                >
                  {registerErrors.name.message}
                </Text>
              )}
          </>
        )}

        <FormLabel mt={1}>Email</FormLabel>
        <Input
          {...register("email")}
          variant="flushed"
          _placeholder={{ color: "Primary.400", fontSize: "13px" }}
          type="email"
          placeholder="Enter your email"
        />
        {registerErrors.email &&
          typeof registerErrors.email.message === "string" && (
            <Text role="alert" as="span" fontSize={"14px"} color={"Error.500"}>
              {registerErrors.email.message}
            </Text>
          )}
        <FormLabel mt={1}>Password</FormLabel>
        <InputGroup>
          <Input
            {...register("password")}
            variant="flushed"
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            _placeholder={{ color: "Primary.400", fontSize: "13px" }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {registerErrors.password &&
          typeof registerErrors.password.message === "string" && (
            <Text role="alert" as="span" fontSize={"14px"} color={"Error.500"}>
              {registerErrors.password.message}
            </Text>
          )}
        {path && (
          <>
            <FormLabel mt={1}>Confrim password</FormLabel>
            <InputGroup>
              <Input
                {...register("confirmPassword")}
                variant="flushed"
                type={showConfrim ? "text" : "password"}
                placeholder="Enter password again"
                _placeholder={{ color: "Primary.400", fontSize: "13px" }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleConfrimShow}>
                  {showConfrim ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {registerErrors.confirmPassword &&
              typeof registerErrors.confirmPassword.message === "string" && (
                <Text
                  role="alert"
                  as="span"
                  fontSize={"14px"}
                  color={"Error.500"}
                >
                  {registerErrors.confirmPassword.message}
                </Text>
              )}
          </>
        )}
        {!path && <Box fontSize={12}>Did you forgot password?</Box>}
        <Button
          type="submit"
          bgColor={"Information.400"}
          color={"Primary.0"}
          _hover={{ bgColor: "Information.300" }}
          mt={3}
          w={"100%"}
        >
          {path ? "Register" : "Login"}
        </Button>
      </FormControl>
    </Card>
  );
}

export default Auth;
