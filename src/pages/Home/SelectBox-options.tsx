import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISelectOptions {
  children: ReactNode;
  title: string | ReactNode;
}

function SelectOptions({ children, title }: ISelectOptions) {
  return (
    <Box
      w={"100%"}
      fontSize={{ base: "14px", sm: "16px" }}
      pr={"6px"}
      fontWeight={700}
      borderRight={title === "Time" ? "none" : "1px"}
      borderColor={"Secondary.100"}
    >
      {title}
      {children}
    </Box>
  );
}

export default SelectOptions;
