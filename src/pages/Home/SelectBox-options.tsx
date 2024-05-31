import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface ISelectOptions {
  children: ReactNode;
  title: string | ReactNode;
}

function SelectOptions({ children, title }: ISelectOptions) {
  const path = useLocation().pathname;
  const border =
    title === "Time" || path === "/car-detail/payment" ? "none" : "1px";
  return (
    <Box
      w={"100%"}
      fontSize={{ base: "14px", sm: "16px" }}
      pr={"6px"}
      fontWeight={700}
      borderRight={border}
      borderColor={"Secondary.100"}
    >
      {title}
      {children}
    </Box>
  );
}

export default SelectOptions;
