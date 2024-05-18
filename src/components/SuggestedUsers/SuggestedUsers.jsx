import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Dan Abrahmov"
        followers={1392}
        avatar="https:/bit.ly/-abramov"
      />
      <SuggestedUser
        name="Ryan Florence"
        followers={789}
        avatar="https:/bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Christian Nwamba"
        followers={592}
        avatar="https:/bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Instagram from Meta
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
