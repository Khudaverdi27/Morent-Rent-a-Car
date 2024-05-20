import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useGetByPopularQuery } from "../../services/request";
import { useMediaQuery } from "@uidotdev/usehooks";

type IconBtnProps = {
  children: ReactNode;
  border?: string;
  order?: number;
  handleClick?: () => void;
};

function IconBtn({ children, border, order, handleClick }: IconBtnProps) {
  const { isLoading } = useGetByPopularQuery("banner");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <Button
      onClick={isMobile ? handleClick : () => {}}
      order={order}
      pointerEvents={isLoading ? "none" : "auto"}
      display={"flex"}
      p={"0"}
      w={"43px"}
      h={"43px"}
      color={"Secondary.400"}
      bg={{ base: "Primary.0", md: "transparent" }}
      border={!border ? "1px" : ""}
      borderColor={"Secondary.100"}
      _hover={{
        background: { base: "Primary.0", md: "transparent" },
      }}
      rounded={"full"}
    >
      {children}
    </Button>
  );
}

export default IconBtn;
