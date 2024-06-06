import { HStack, Skeleton, Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDownSLine } from "react-icons/ri";
import SelectOptions from "./SelectBox-options";
import { ISelectProps } from "./Select-Locations";

interface ISelectDateProps extends ISelectProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
}

function SelectDate({
  width,
  isLoading,
  variant,
  date,
  setDate,
  registerName,
  register,
  errors,
}: ISelectDateProps) {
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
            {...(register
              ? register(registerName, {
                  required: "Date is required",
                })
              : {})}
            selected={date}
            placeholderText="Select your date"
            onChange={(date) => setDate(date)}
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
      {errors && errors[registerName] && (
        <Text
          role="alert"
          as="span"
          fontSize={"14px"}
          color={"Error.500"}
          fontWeight={"500"}
        >
          {errors[registerName]?.message}
        </Text>
      )}
    </SelectOptions>
  );
}

export default SelectDate;
