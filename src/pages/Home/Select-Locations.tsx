import { Select, Skeleton, Text } from "@chakra-ui/react";
import SelectOptions from "./SelectBox-options";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Inputs } from "../../types/Inputs";

type IPartialSelectProps = {
  width: number;
  isLoading: boolean;
  variant?: string;
  registerName: keyof Inputs;
  register?: UseFormRegister<Inputs>;
  errors?: FieldErrors<Inputs>;
  control?: Control<FieldValues>;
};

export type ISelectProps = Omit<
  Partial<IPartialSelectProps>,
  "registerName"
> & {
  registerName: keyof Inputs;
};

function SelectLocations({
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
          "Location"
        )
      }
    >
      {isLoading ? (
        <Skeleton mt={"5px"} borderRadius={"10px"} w={width} height="16px" />
      ) : (
        <Select
          {...(register
            ? register(registerName, { validate: (value) => value !== "0" })
            : {})}
          w={"100%"}
          cursor={"pointer"}
          variant={variant || "unstyled"}
          fontSize={"12px"}
          color="Secondary.300"
          placeholder="City"
        >
          <option value="London">London</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Baku">Baku</option>
        </Select>
      )}
      {errors && errors[registerName] && (
        <Text role="alert" as="span" fontSize={"14px"} color={"Error.500"}>
          {errors[registerName]?.message}
        </Text>
      )}
    </SelectOptions>
  );
}

export default SelectLocations;
