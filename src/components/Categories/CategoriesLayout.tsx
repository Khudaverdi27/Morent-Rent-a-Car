import { Box, Heading } from "@chakra-ui/react";

function CategoriesLayout() {
  return (
    <Box pt={8} pb={5} pl={5} pr={5} bg={"Primary.0"} minW={"360px"} as="aside">
      <Heading
        fontWeight={"normal"}
        letterSpacing={"4px"}
        color={"Secondary.300"}
        fontSize={12}
        as={"h6"}
      >
        TYPE
      </Heading>
    </Box>
  );
}

export default CategoriesLayout;
