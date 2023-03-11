import useCommunityData from "@/hooks/useCommunityData";
import { Box, Flex, Icon, Text, Button, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaReddit } from "react-icons/fa";
import { Community } from "../../atoms/communitiesAtom";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const { communityStateValue, onJoinOrLeaveCommunity } = useCommunityData();
  const [loading, setLoading] = useState(false);

  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityData.id
  );

  return (
    <Flex direction="column" width="100%" height="146px">
      <Box height="50%" bg="blue.400" />
      <Flex justifyContent="center" bg="white" flexGrow={1}>
        <Flex width="95%" maxWidth="860px">
          {communityStateValue.currentCommunity?.imageURL ? (
            <Image
              borderRadius="full"
              boxSize="66px"
              src={communityStateValue.currentCommunity.imageURL}
              alt="Dan Abramov"
              position="relative"
              top={-3}
              color="blue.500"
              border="4px solid white"
            />
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position="relative"
              top={-3}
              color="blue.500"
              border="4px solid white"
              borderRadius="full"
            />
          )}
          <Flex padding="10px 16px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16pt">
                {communityData.id}
              </Text>
              <Text fontWeight={600} fontSize="10pt" color="gray.400">
                routes/{communityData.id}
              </Text>
            </Flex>
          </Flex>
          <Button
            variant={isJoined ? "outline" : "solid"}
            height="30px"
            pr={6}
            pl={6}
            alignSelf="center"
            onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
            isLoading={loading}
          >
            {isJoined ? "Joined" : "Join"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
