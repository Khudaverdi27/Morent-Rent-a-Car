import { Skeleton, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IFooterItem {
  children: ReactNode;
  isLoading: boolean;
}

function FooterItem({ children, isLoading }: IFooterItem) {
  const arr = [1, 2, 3, 4, 5];

  return (
    <UnorderedList ml={0} mt={8} spacing={3} styleType="''">
      {isLoading
        ? arr.map((a) =>
            a == 1 ? (
              <Skeleton
                mb={6}
                key={a}
                startColor="Primary.300"
                endColor="Primary.200"
                borderRadius={"10px"}
                w={116}
                height="16px"
              />
            ) : (
              <Skeleton key={a} borderRadius={"10px"} w={116} height="16px" />
            )
          )
        : children}
    </UnorderedList>
  );
}

export default FooterItem;
