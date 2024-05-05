import { Box, Button, Flex, HStack, Select } from "@chakra-ui/react";
import SelectBoxTitle from "./SelectBox-title";
import SelectOptions from "./SelectBox-options";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDownSLine, RiArrowUpDownLine } from "react-icons/ri";

function SelectBox() {
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  return (
    <Flex mt={6} justify={"space-between"} align={"center"}>
      <Box bgColor={"Primary.0"} w={"582px"} rounded={"10px"}>
        <Box ml={12} pb={6}>
          <SelectBoxTitle>Pick - Up</SelectBoxTitle>
          <HStack>
            <SelectOptions title="Locations">
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
            </SelectOptions>

            <SelectOptions title="Date">
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
            </SelectOptions>
            <SelectOptions title="Time">
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
            </SelectOptions>
          </HStack>
        </Box>
      </Box>
      <Button
        bgColor="Primary.500"
        rounded={"10px"}
        boxShadow="2xl"
        _hover={{ bgColor: "Primary.600" }}
        size="lg"
        color={"Primary.0"}
      >
        <RiArrowUpDownLine />
      </Button>
      <Box bgColor={"Primary.0"} w={"582px"} rounded={"10px"}>
        <Box ml={12} pb={6}>
          <SelectBoxTitle>Drop - off</SelectBoxTitle>
          <HStack>
            <SelectOptions title="Locations">
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
            </SelectOptions>

            <SelectOptions title="Date">
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
            </SelectOptions>
            <SelectOptions title="Time">
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
            </SelectOptions>
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default SelectBox;
