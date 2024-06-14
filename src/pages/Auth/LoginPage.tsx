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
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginType } from "../../types/Inputs";
import { LoginSchema } from "../../validation/inputSchema";
import { signUp } from "../../utility/firebase";
import { useSessionStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/authSlice";
import AuthContainer from "./AuthContainer";

function LoginPage() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [, setStorage] = useSessionStorage<string>("token", "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(LoginSchema),
  });

  const registerErrors = errors as FieldErrors<LoginType>;
  const notify = (userData: any) => toast.error(userData);

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    const userData: any = await signUp(data.email, data.password);
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
        <Box fontSize={12}>Did you forgot password?</Box>
        <Button
          type="submit"
          bgColor={"Information.400"}
          color={"Primary.0"}
          _hover={{ bgColor: "Information.300" }}
          my={2}
          w={"100%"}
        >
          Login
        </Button>
        <Link to={"/auth/register"}>Don't have account?</Link>
      </FormControl>
    </AuthContainer>
  );
}

export default LoginPage;
