import { Box, Button, Flex, HStack, Select, Skeleton } from "@chakra-ui/react";
import SelectBoxTitle from "./SelectBox-title";
import SelectOptions from "./SelectBox-options";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDownSLine, RiArrowUpDownLine } from "react-icons/ri";
import { useGetByNameQuery } from "../../services/request";

function SelectBox() {
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const { isLoading } = useGetByNameQuery("banner");
  return (
    <Flex
      mt={6}
      flexWrap={"wrap"}
      justify={{ base: "center", sm: "space-between" }}
      align={"center"}
    >
      <Box bgColor={"Primary.0"} rounded={"10px"}>
        <Box px={{ base: "10px", sm: "50px" }} pb={6}>
          {isLoading ? (
            <Skeleton
              ml={"-40px"}
              mt={"10px"}
              startColor="Primary.300"
              endColor="Primary.200"
              borderRadius={"10px"}
              w={166}
              height="16px"
            />
          ) : (
            <SelectBoxTitle>Pick - Up</SelectBoxTitle>
          )}
          <HStack>
            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    ml={"-60px"}
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={166}
                    height="16px"
                  />
                ) : (
                  "Locations"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  ml={"-60px"}
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={166}
                  height="16px"
                />
              ) : (
                <Select
                  cursor={"pointer"}
                  variant="unstyled"
                  pr={5}
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="Select your city"
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
                    w={166}
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
                  w={166}
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
                    w={166}
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
                  w={166}
                  height="16px"
                />
              ) : (
                <Select
                  cursor={"pointer"}
                  variant="unstyled"
                  pr={5}
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="Select your time"
                >
                  <option value="1012">10:00-12:00</option>
                  <option value="1216">12:00-16:00</option>
                  <option value="1620">16:00-20:00</option>
                </Select>
              )}
            </SelectOptions>
          </HStack>
        </Box>
      </Box>

      <Button
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

      <Box bgColor={"Primary.0"} rounded={"10px"}>
        <Box px={{ base: "10px", sm: "50px" }} pb={6}>
          {isLoading ? (
            <Skeleton
              ml={"-40px"}
              mt={"10px"}
              startColor="Primary.300"
              endColor="Primary.200"
              borderRadius={"10px"}
              w={166}
              height="16px"
            />
          ) : (
            <SelectBoxTitle>Drop-off</SelectBoxTitle>
          )}
          <HStack>
            <SelectOptions
              title={
                isLoading ? (
                  <Skeleton
                    ml={"-60px"}
                    mt={"20px"}
                    startColor="Primary.300"
                    endColor="Primary.200"
                    borderRadius={"10px"}
                    w={166}
                    height="16px"
                  />
                ) : (
                  "Locations"
                )
              }
            >
              {isLoading ? (
                <Skeleton
                  ml={"-60px"}
                  mt={"5px"}
                  borderRadius={"10px"}
                  w={166}
                  height="16px"
                />
              ) : (
                <Select
                  cursor={"pointer"}
                  variant="unstyled"
                  pr={5}
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="Select your city"
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
                    w={166}
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
                  w={166}
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
                    w={166}
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
                  w={166}
                  height="16px"
                />
              ) : (
                <Select
                  cursor={"pointer"}
                  variant="unstyled"
                  pr={5}
                  fontSize={"12px"}
                  color="Secondary.300"
                  placeholder="Select your time"
                >
                  <option value="1012">10:00-12:00</option>
                  <option value="1216">12:00-16:00</option>
                  <option value="1620">16:00-20:00</option>
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
