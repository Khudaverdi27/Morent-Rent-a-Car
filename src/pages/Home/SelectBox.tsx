import { Box, Button, Flex, HStack, Skeleton } from "@chakra-ui/react";
import SelectBoxTitle from "./SelectBox-title";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowUpDownLine } from "react-icons/ri";
import { useGetByNameQuery } from "../../services/request";
import { useMediaQuery } from "@uidotdev/usehooks";
import SelectLocations from "./Select-Locations";
import SelectDate from "./Select-Date";
import SelectTime from "./Select-Time";

function SelectBox() {
  const [changeSelection, setChangeSelection] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { isLoading } = useGetByNameQuery("banner");
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const width = isMobile ? 95 : 160;

  const handleChange = () => {
    setChangeSelection(changeSelection === 1 ? 0 : 1);
  };

  return (
    <Flex
      pos={"relative"}
      gap={{ base: "30px", lg: "100px" }}
      mt={3}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      justify={{ base: "center", sm: "space-between" }}
      align={"center"}
    >
      <Box
        order={changeSelection}
        w={{ sm: "100%", lg: "45%" }}
        bgColor={"Primary.0"}
        rounded={"10px"}
      >
        <Box px={{ base: "10px", sm: "50px" }} pb={6}>
          {isLoading ? (
            <Skeleton
              mt={"10px"}
              startColor="Primary.300"
              endColor="Primary.200"
              borderRadius={"10px"}
              w={width}
              height="16px"
            />
          ) : (
            <SelectBoxTitle>Pick - Up</SelectBoxTitle>
          )}
          <HStack justify={"space-between"}>
            <SelectLocations
              registerName="pickUp"
              width={width}
              isLoading={isLoading}
            />
            <SelectDate
              registerName="pickUp"
              width={width}
              isLoading={isLoading}
              date={startDate}
              setDate={setStartDate}
            />
            <SelectTime
              registerName="pickUp"
              width={width}
              isLoading={isLoading}
            />
          </HStack>
        </Box>
      </Box>

      <Button
        className={`${isLoading ? "pulse" : ""}`}
        onClick={handleChange}
        minW={"65px"}
        top={{ md: "43%", lg: "35%" }}
        left={{ base: "38%", sm: "40%", md: "47.5%" }}
        pos={"absolute"}
        pointerEvents={isLoading ? "none" : "auto"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        bgColor="Primary.500"
        rounded={"10px"}
        _hover={{ bgColor: "Primary.600" }}
        size="lg"
        color={"Primary.0"}
      >
        {!isLoading && <RiArrowUpDownLine />}
      </Button>

      <Box w={{ sm: "100%", lg: "45%" }} bgColor={"Primary.0"} rounded={"10px"}>
        <Box px={{ base: "10px", sm: "50px" }} pb={6}>
          {isLoading ? (
            <Skeleton
              mt={"10px"}
              startColor="Primary.300"
              endColor="Primary.200"
              borderRadius={"10px"}
              w={width}
              height="16px"
            />
          ) : (
            <SelectBoxTitle>Drop-off</SelectBoxTitle>
          )}
          <HStack justify={"space-between"}>
            <SelectLocations
              registerName="dropOff"
              width={width}
              isLoading={isLoading}
            />
            <SelectDate
              registerName="dropOff"
              width={width}
              isLoading={isLoading}
              date={endDate}
              setDate={setEndDate}
            />
            <SelectTime
              registerName="dropOff"
              width={width}
              isLoading={isLoading}
            />
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default SelectBox;
