import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import CardCar from "../../pages/Home/CardCar";

interface ISectionProps {
  title: string;
  showAll: boolean;
}

function Section({ title, showAll }: ISectionProps) {
  return (
    <Box as="section">
      <HStack py={8}>
        <Text as="span" color={"Secondary.300"}>
          {title}
        </Text>
        <Spacer />
        {showAll && (
          <Button
            color="Primary.500"
            _hover={{ bgColor: "transparent" }}
            variant="ghost"
          >
            View All
          </Button>
        )}
      </HStack>
      <SimpleGrid minChildWidth={"250px"} spacing={8}>
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </SimpleGrid>
    </Box>
  );
}

export default Section;
