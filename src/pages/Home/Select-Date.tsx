import { HStack, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDownSLine } from "react-icons/ri";
import SelectOptions from "./SelectBox-options";
import { ISelectProps } from "./Select-Locations";

function SelectDate({ width, isLoading, variant }: ISelectProps) {
  const [startDate, setStartDate] = useState<any>("");
  return (
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
        <Skeleton mt={"5px"} borderRadius={"10px"} w={width} height="16px" />
      ) : (
        <HStack className={`${variant || ""}`}>
          <DatePicker
            selected={startDate}
            placeholderText="Select your date"
            onChange={(date) => setStartDate(date)}
            className={"select--calendar"}
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
  );
}

export default SelectDate;
