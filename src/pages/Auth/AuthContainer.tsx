import { Card, CardHeader } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
function AuthContainer({ children }: PropsWithChildren) {
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
      {children}
    </Card>
  );
}

export default AuthContainer;
