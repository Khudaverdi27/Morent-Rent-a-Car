import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterType } from "../../types/Inputs";
import { RegisterSchema } from "../../validation/inputSchema";
import { useSessionStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/authSlice";
import AuthContainer from "./AuthContainer";
import { registerToAccount } from "../../utility/firebase";

function RegisterPage() {
  const [show, setShow] = useState(false);
  const [showConfrim, setShowConfrim] = useState(false);
  const handleClick = () => setShow(!show);
  const handleConfrimShow = () => setShowConfrim(!showConfrim);
  const [, setStorage] = useSessionStorage<string>("token", "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(RegisterSchema),
  });

  const registerErrors = errors as FieldErrors<RegisterType>;
  const notify = (userData: any) => toast.error(userData);

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    const userData: any = await registerToAccount(
      data.email,
      data.password,
      data.name
    );

    if (typeof userData === "string") {
      notify(userData);
    } else {
      dispatch(login(userData));
      setStorage(userData.uid);
      navigate("/");
    }
  };

  return (
    <AuthContainer>
      <FormControl as={"form"} onSubmit={handleSubmit(onSubmit)}>
        <>
          <FormLabel>Name Surname</FormLabel>
          <Input
            size="sm"
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
                fontSize={"13px"}
                color={"Error.500"}
              >
                {registerErrors.name.message}
              </Text>
            )}
        </>

        <FormLabel mt={1}>Email</FormLabel>
        <Input
          size="sm"
          {...register("email")}
          variant="flushed"
          _placeholder={{ color: "Primary.400", fontSize: "13px" }}
          type="email"
          placeholder="Enter your email"
        />
        {registerErrors.email &&
          typeof registerErrors.email.message === "string" && (
            <Text role="alert" as="span" fontSize={"13px"} color={"Error.500"}>
              {registerErrors.email.message}
            </Text>
          )}
        <FormLabel mt={1}>Password</FormLabel>
        <InputGroup>
          <Input
            size="sm"
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
            <Text role="alert" as="span" fontSize={"13px"} color={"Error.500"}>
              {registerErrors.password.message}
            </Text>
          )}

        <>
          <FormLabel mt={1}>Confrim password</FormLabel>
          <InputGroup>
            <Input
              size="sm"
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
                fontSize={"13px"}
                color={"Error.500"}
              >
                {registerErrors.confirmPassword.message}
              </Text>
            )}
        </>

        <Button
          type="submit"
          bgColor={"Information.400"}
          color={"Primary.0"}
          _hover={{ bgColor: "Information.300" }}
          my={2}
          w={"100%"}
        >
          Register
        </Button>
      </FormControl>
      <Link to={"/auth/login"}>
        Do you have account?{" "}
        <Box as="span" color={"Primary.500"} fontWeight={"bold"}>
          Login
        </Box>
      </Link>
    </AuthContainer>
  );
}

export default RegisterPage;
