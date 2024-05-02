import { Box, Flex, Spacer } from "@chakra-ui/react";

function SelectBox() {
  return (
    <Flex mt={6}>
      <Box bgColor={"Primary.0"} w={"582px"} rounded={"10px"}>
        <Box
          fontWeight={"600"}
          pos={"relative"}
          p={"20px"}
          _after={{
            content: "''",
            w: "8px",
            h: "8px",
            bgColor: "Primary.500",
            rounded: "100%",
            position: "absolute",
            top: "27px",
            left: "4px",
          }}
          _before={{
            content: "''",
            w: "16px",
            h: "16px",
            bgColor: "Primary.200",
            rounded: "100%",
            position: "absolute",
            top: "36%",
            left: 0,
          }}
        >
          Pick - Up
        </Box>
      </Box>
      <Spacer />
      <Box w={"582px"}></Box>
    </Flex>
  );
}

export default SelectBox;
