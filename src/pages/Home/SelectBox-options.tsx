import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISelectOptions {
  children: ReactNode;
  title: string | ReactNode;
}

function SelectOptions({ children, title }: ISelectOptions) {
  return (
    <Box
      maxW={207}
      pl={title !== "Locations" ? "20px" : "0"}
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
