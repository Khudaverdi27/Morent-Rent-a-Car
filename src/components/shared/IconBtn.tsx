import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type IconBtnProps = {
  children: ReactNode;
  border?: string;
};

function IconBtn({ children, border }: IconBtnProps) {
  return (
    <Button
      p={"0"}
      w={"44px"}
      h={"44px"}
      color={"Secondary.400"}
      bg={"transparent"}
      border={!border ? "1px" : ""}
      borderColor={"Secondary.100"}
      _hover={{
        background: "transparent",
      }}
      rounded={"full"}
    >
      {children}
    </Button>
  );
}

export default IconBtn;
