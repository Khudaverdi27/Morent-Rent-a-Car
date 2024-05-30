import { Select, Skeleton } from "@chakra-ui/react";
import SelectOptions from "./SelectBox-options";
import { ISelectProps } from "./Select-Locations";

function SelectTime({ width, isLoading, variant }: ISelectProps) {
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
          mr={5}
          cursor={"pointer"}
          variant={variant || "unstyled"}
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
  );
}

export default SelectTime;
