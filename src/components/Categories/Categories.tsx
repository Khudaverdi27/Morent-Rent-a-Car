import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../Redux/hooks/reduxhook";
import { addData } from "../../Redux/features/filterSlice";

interface ICheckboxProps {
  groupedCars: { [key: string]: any[] };
  title: string;
}

function Categories({ groupedCars, title }: ICheckboxProps) {
  const dispatch = useAppDispatch();
  const saveInArray = (value: string | number) => {
    dispatch(addData(value));
  };

  return (
    <Box>
      <Heading
        fontWeight={"normal"}
        letterSpacing={"4px"}
        color={"Secondary.300"}
        py={5}
        fontSize={12}
        as={"h6"}
      >
        {title}
      </Heading>
      <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <Stack spacing={2} direction={"column"}>
          {Object.keys(groupedCars).map((type) => {
            const itemCount = groupedCars[type].length;
            return (
              <Checkbox
                onChange={(e) => saveInArray(e.target.value)}
                colorScheme="blue"
                key={type}
                value={type}
              >
                <Text color={"Secondary.400"} fontSize={18}>
                  {type}
                  <Text
                    pl={3}
                    color={"Secondary.300"}
                    as={"span"}
                  >{`(${itemCount})`}</Text>
                </Text>
              </Checkbox>
            );
          })}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
}

export default Categories;
