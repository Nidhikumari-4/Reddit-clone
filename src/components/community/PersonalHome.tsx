import React from "react";
import { Button, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";
import { Community } from "@/atoms/communitiesAtom";
import CreateCommunityModal from "../Modal/CreateCommunity/CreateCommunityModal";

type PersonalHomeProps = {
  communityData: Community;
};

const PersonalHome: React.FC<PersonalHomeProps> = ({ communityData }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Flex
        direction="column"
        bg="white"
        borderRadius={4}
        cursor="pointer"
        border="1px solid"
        borderColor="gray.300"
        position="sticky"
      >
        <Flex
          align="flex-end"
          color="white"
          p="6px 10px"
          bg="blue.500"
          height="34px"
          borderRadius="4px 4px 0px 0px"
          fontWeight={600}
          bgImage="url(/assets/redditPersonalHome.png)"
          backgroundSize="cover"
        ></Flex>
        <Flex direction="column" p="12px">
          <Flex align="center" mb={2}>
            <Icon as={FaReddit} fontSize={50} color="brand.100" mr={2} />
            <Text fontWeight={600}>Home</Text>
          </Flex>
          <Stack spacing={3}>
            <Text fontSize="9pt">
              Your personal Reddit frontpage, built for you.
            </Text>
            <Button height="30px" textDecoration="none">
              <Link href={`/r/${communityData?.id}/submit`}>Create post</Link>
            </Button>

            <Button
              variant="outline"
              height="30px"
              onClick={() => setOpen(true)}
            >
              Create Community
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
export default PersonalHome;
