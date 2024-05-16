import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ReactNode } from "react";

interface ISelectOptions {
  children: ReactNode;
  title: string | ReactNode;
}

function SelectOptions({ children, title }: ISelectOptions) {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <Box
      pl={title !== "Locations" && !isMobile ? "20px" : "0"}
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
