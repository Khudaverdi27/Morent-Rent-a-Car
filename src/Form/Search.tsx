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
import { useMediaQuery } from "@uidotdev/usehooks";
import { useAppDispatch } from "../Redux/hooks/reduxhook";
import { openCategory } from "../Redux/features/slice";
import DrawerToggle from "../components/Categories/Drawer";

interface IsearchProps {
  show: boolean;
}

function Search({ show }: IsearchProps) {
  const { isLoading } = useGetByPopularQuery("banner");
  const isSmall = useMediaQuery("only screen and (max-width : 480px)");
  const isMobile = useMediaQuery("only screen and (max-width : 780px)");
  const dispatch = useAppDispatch();
  const openCategories = () => {
    dispatch(openCategory());
  };

  return (
    <InputGroup
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mr={{ base: 0, sm: 5 }}
      my={{ base: 6, sm: 0 }}
    >
      <InputLeftElement pointerEvents="none">
        {isLoading ? (
          <SkeletonCircle
            mr={4}
            ml={2}
            startColor="Primary.300"
            endColor="Primary.200"
            size="4"
          />
        ) : (
          <CiSearch size={25} style={{ color: "gray" }} />
        )}
      </InputLeftElement>

      <Input
        w={show && isSmall ? "85%" : "100%"}
        pointerEvents={isLoading ? "none" : "auto"}
        borderRadius="3xl"
        mr={"10px"}
        type="text"
        placeholder={isLoading ? "" : "Search something here"}
        _placeholder={{ fontSize: "14px" }}
      />
      {!isSmall && (
        <InputRightElement width="4.5rem">
          {!isLoading &&
            (isMobile ? (
              <DrawerToggle isLoading={isLoading} />
            ) : (
              <Button
                _hover={{
                  background: "transparent",
                }}
                variant="ghost"
                h="1.75rem"
                size="sm"
              >
                <GiSettingsKnobs
                  onClick={openCategories}
                  color="Secondary.400"
                  style={{ rotate: "90deg" }}
                />
              </Button>
            ))}
        </InputRightElement>
      )}

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
      {isSmall && !show && <DrawerToggle isLoading={isLoading} />}
    </InputGroup>
  );
}

export default Search;
