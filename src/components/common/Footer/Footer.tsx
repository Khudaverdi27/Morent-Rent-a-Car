import {
  Box,
  Container,
  Flex,
  HStack,
  ListItem,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import Logo from "../Logo";
import FooterItem from "./FooterItem";
import { useGetByRecommendsQuery } from "../../../services/request";

function Footer() {
  const { isLoading } = useGetByRecommendsQuery("recommendCars");
  return (
    <Container
      bg={"Primary.0"}
      color={"Secondary.300"}
      as={"footer"}
      maxW={"1340px"}
    >
      <SimpleGrid pb={5} columns={[1, null, 2]}>
        <Box my={8}>
          {isLoading ? (
            <Skeleton
              startColor="Primary.300"
              endColor="Primary.200"
              borderRadius={"10px"}
              w={116}
              height="16px"
            />
          ) : (
            <Logo />
          )}
          {isLoading ? (
            <Skeleton mt={1} borderRadius={"10px"} w={116} height="16px" />
          ) : (
            <>
              <Text>Our vision is to provide convenience </Text>
              <Text>and help increase your sales business. </Text>
            </>
          )}
        </Box>
        <Box>
          <SimpleGrid spacing={6} columns={[2, null, 3]}>
            <FooterItem isLoading={isLoading}>
              <ListItem color={"black"} fontWeight={600}>
                About
              </ListItem>
              <ListItem>How it works</ListItem>
              <ListItem>Featured</ListItem>
              <ListItem>Partnership</ListItem>
              <ListItem>Bussiness Relation</ListItem>
            </FooterItem>

            <FooterItem isLoading={isLoading}>
              <ListItem color={"black"} fontWeight={600}>
                Community
              </ListItem>
              <ListItem>Events</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Podcast</ListItem>
              <ListItem>Invite a friend</ListItem>
            </FooterItem>

            <FooterItem isLoading={isLoading}>
              <ListItem color={"black"} fontWeight={600}>
                Socials
              </ListItem>
              <ListItem>Discord</ListItem>
              <ListItem>Instagram</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Facebook</ListItem>
            </FooterItem>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <Box as="hr"></Box>
      <Flex flexWrap={"wrap"} color={"black"}>
        {isLoading ? (
          <Skeleton
            startColor="Primary.300"
            endColor="Primary.200"
            borderRadius={"10px"}
            w={116}
            height="16px"
          />
        ) : (
          <Text pr={12} order={{ base: 1, sm: 0 }} py="4">
            © 2024 MORENT. All rights reserved
          </Text>
        )}

        <HStack
          spacing={{ base: 0, sm: 5 }}
          justify={{ base: "space-between", md: "flex-end" }}
          py="4"
          flexGrow={1}
        >
          {isLoading ? (
            <Skeleton borderRadius={"10px"} w={116} height="16px" />
          ) : (
            <Text>Privacy & Policy</Text>
          )}
          {isLoading ? (
            <Skeleton borderRadius={"10px"} w={116} height="16px" />
          ) : (
            <Text>Terms & Condition</Text>
          )}
        </HStack>
      </Flex>
    </Container>
  );
}

export default Footer;
