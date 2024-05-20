import { Box, Button, Flex, HStack, Select, Skeleton } from "@chakra-ui/react";
import SelectBoxTitle from "./SelectBox-title";
import SelectOptions from "./SelectBox-options";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDownSLine, RiArrowUpDownLine } from "react-icons/ri";
import { useGetByNameQuery } from "../../services/request";
import { useMediaQuery } from "@uidotdev/usehooks";

function SelectBox() {
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const [changeSelection, setChangeSelection] = useState<number>(0);
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
      mt={6}
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
            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={width}
                    height="16px"
                  />
                ) : (
                  "Location"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={width}
                  height="16px"
                />
              ) : (
                <Select
                  w={"100%"}
                  cursor={"pointer"}
                  variant="unstyled"
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="City"
                >
                  <option value="option1">London</option>
                  <option value="option2">Istanbul</option>
                  <option value="option3">Baku</option>
                </Select>
              )}
            </SelectOptions>

            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={width}
                    height="16px"
                  />
                ) : (
                  "Date"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={width}
                  height="16px"
                />
              ) : (
                <HStack>
                  <DatePicker
                    selected={startDate}
                    placeholderText="Select your date"
                    onChange={(date) => setStartDate(date)}
                    className="select--calendar"
                  />
                  <RiArrowDownSLine
                    style={{
                      color: "#90A3BF",
                      marginRight: "10px",
                      fontWeight: "600",
                      fontSize: "18px",
                      display: "flex",
                    }}
                  />
                </HStack>
              )}
            </SelectOptions>
            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={width}
                    height="16px"
                  />
                ) : (
                  "Time"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={width}
                  height="16px"
                />
              ) : (
                <Select
                  mr={5}
                  cursor={"pointer"}
                  variant="unstyled"
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="Time"
                >
                  <option value="1012">10:00</option>
                  <option value="1216">12:00</option>
                  <option value="1620">16:00</option>
                </Select>
              )}
            </SelectOptions>
          </HStack>
        </Box>
      </Box>

      <Button
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
            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={width}
                    height="16px"
                  />
                ) : (
                  "Location"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={width}
                  height="16px"
                />
              ) : (
                <Select
                  w={"100%"}
                  cursor={"pointer"}
                  variant="unstyled"
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="City"
                >
                  <option value="option1">London</option>
                  <option value="option2">Istanbul</option>
                  <option value="option3">Baku</option>
                </Select>
              )}
            </SelectOptions>

            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={width}
                    height="16px"
                  />
                ) : (
                  "Date"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={width}
                  height="16px"
                />
              ) : (
                <HStack>
                  <DatePicker
                    selected={endDate}
                    placeholderText="Select your date"
                    onChange={(date) => setEndDate(date)}
                    className="select--calendar"
                  />
                  <RiArrowDownSLine
                    style={{
                      color: "#90A3BF",
                      marginRight: "10px",
                      fontWeight: "600",
                      fontSize: "18px",
                      display: "flex",
                    }}
                  />
                </HStack>
              )}
            </SelectOptions>
            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={width}
                    height="16px"
                  />
                ) : (
                  "Time"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={width}
                  height="16px"
                />
              ) : (
                <Select
                  mr={5}
                  cursor={"pointer"}
                  variant="unstyled"
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="Time"
                >
                  <option value="1012">12:00</option>
                  <option value="1216">16:00</option>
                  <option value="1620">20:00</option>
                </Select>
              )}
            </SelectOptions>
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default SelectBox;
