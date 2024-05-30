import { Select, Skeleton } from "@chakra-ui/react";
import SelectOptions from "./SelectBox-options";

type IPartialSelectProps = {
  width: number;
  isLoading: boolean;
  variant: string;
};

export type ISelectProps = Partial<IPartialSelectProps>;

function SelectLocations({ width, isLoading, variant }: ISelectProps) {
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
          "Location"
        )
      }
    >
      {isLoading ? (
        <Skeleton mt={"5px"} borderRadius={"10px"} w={width} height="16px" />
      ) : (
        <Select
          w={"100%"}
          cursor={"pointer"}
          variant={variant || "unstyled"}
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
  );
}

export default SelectLocations;
