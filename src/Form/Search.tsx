import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import { useGetByPopularQuery } from "../services/request";

function Search() {
  const { isLoading } = useGetByPopularQuery("banner");
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        {isLoading ? (
          <SkeletonCircle
            startColor="Primary.300"
            endColor="Primary.200"
            size="4"
          />
        ) : (
          <CiSearch color="Secondary.400" />
        )}
      </InputLeftElement>

      <Input
        pointerEvents={isLoading ? "none" : "auto"}
        borderRadius={"3xl"}
        type="text"
        placeholder={isLoading ? "" : "Search something here"}
        _placeholder={{ fontSize: "14px" }}
      />
      <InputRightElement width="4.5rem">
        {!isLoading && (
          <Button
            _hover={{
              background: "transparent",
            }}
            variant="ghost"
            h="1.75rem"
            size="sm"
          >
            <GiSettingsKnobs
              color="Secondary.400"
              style={{ rotate: "90deg" }}
            />
          </Button>
        )}
      </InputRightElement>
      {isLoading && (
        <Skeleton
          top={"32%"}
          left={"8%"}
          pos={"absolute"}
          borderRadius={"10px"}
          w={115}
          height="15px"
        />
      )}
    </InputGroup>
  );
}

export default Search;
