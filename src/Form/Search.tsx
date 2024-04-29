import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";

function Search() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <CiSearch color="Secondary.400" />
      </InputLeftElement>
      <Input
        borderRadius={"3xl"}
        type="text"
        placeholder="Search something here"
        _placeholder={{ fontSize: "14px" }}
      />
      <InputRightElement width="4.5rem">
        <Button
          _hover={{
            background: "transparent",
          }}
          variant="ghost"
          h="1.75rem"
          size="sm"
        >
          <GiSettingsKnobs color="Secondary.400" style={{ rotate: "90deg" }} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Search;
