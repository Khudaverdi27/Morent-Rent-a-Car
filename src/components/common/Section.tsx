import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import CardCar from "../../pages/Home/CardCar";
import { apiResponsePopulars } from "../../types/apiResponse";
import _ from "lodash";
import CardCarContent from "../../pages/Home/CardCarContent";
import SectionLoading from "./SectionLoading";

interface ISectionProps {
  title: string;
  showAll: boolean;
  carData: any;
  isLoading: boolean;
  carsCount?: number;
}

function Section({
  title,
  showAll,
  carData,
  isLoading,
  carsCount,
}: ISectionProps) {
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
        {isLoading ? (
          <>
            <SectionLoading />
            <SectionLoading />
            <SectionLoading />
            <SectionLoading />
          </>
        ) : (
          _.map(carData, (d: apiResponsePopulars) => (
            <CardCar key={d.id}>
              <CardCarContent {...d} isMobile={false} />
            </CardCar>
          ))
        )}
      </SimpleGrid>
      {carsCount && (
        <Text
          color={"Secondary.300"}
          py={5}
          textAlign={"end"}
        >{`${carsCount} cars`}</Text>
      )}
    </Box>
  );
}

export default Section;
