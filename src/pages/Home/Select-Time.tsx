import { Select, Skeleton, Text } from "@chakra-ui/react";
import SelectOptions from "./SelectBox-options";
import { ISelectProps } from "./Select-Locations";

function SelectTime({
  width,
  isLoading,
  variant,
  register,
  errors,
  registerName,
}: ISelectProps) {
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
          "Time"
        )
      }
    >
      {isLoading ? (
        <Skeleton mt={"5px"} borderRadius={"10px"} w={width} height="16px" />
      ) : (
        <Select
          {...(register
            ? register(registerName, {
                validate: (value) => value !== "0",
                required: "Time is required",
              })
            : {})}
          mr={5}
          cursor={"pointer"}
          variant={variant || "unstyled"}
          fontSize={"12px"}
          color="Secondary.300"
          placeholder="Time"
        >
          <option value="10:12">10:00</option>
          <option value="12:16">12:00</option>
          <option value="16:20">16:00</option>
        </Select>
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

export default SelectTime;
