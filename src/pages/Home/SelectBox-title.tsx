import { Box } from "@chakra-ui/react";

interface ITitleProps {
  children: string;
}

function SelectBoxTitle({ children }: ITitleProps) {
  return (
    <Box
      fontWeight={"600"}
      pos={"relative"}
      p={"20px"}
      _before={{
        content: "''",
        w: "16px",
        h: "16px",
        bgGradient: "radial(circle, Primary.500 20%, Primary.200 40%)",
        rounded: "100%",
        position: "absolute",
        top: "36%",
        left: 0,
      }}
    >
      <Box ml={1} as={"span"}>
        {children}
      </Box>
    </Box>
  );
}

export default SelectBoxTitle;
