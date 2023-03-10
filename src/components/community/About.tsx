import { Community } from "@/atoms/communitiesAtom";
import {
  Flex,
  Icon,
  Text,
  Box,
  Stack,
  SkeletonCircle,
  Skeleton,
  Divider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { RiCakeLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  const router = useRouter();
  return (
    <Box position="sticky" top="14px">
      <Flex
        justify="space-between"
        align="center"
        p={3}
        color="white"
        bg="blue.400"
        borderRadius="4px 4px 0px 0px"
      >
        <Text fontSize="10pt" fontWeight={700}>
          About Community
        </Text>
        <Icon as={HiOutlineDotsHorizontal} cursor="pointer" />
      </Flex>

      <Flex direction="column" p={3} bg="white" borderRadius="0px 0px 4px 4px">
        {/* <Stack mt={2}>
          <SkeletonCircle size="10" />
          <Skeleton height="10px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack> */}
        {/* <Box
            bg="gray.100"
            width="100%"
            p={2}
            borderRadius={4}
            border="1px solid"
            borderColor="gray.300"
            cursor="pointer"
          >
            <Text fontSize="9pt" fontWeight={700} color="blue.500">
              Add description
            </Text>
          </Box> */}

        <Stack>
          <Flex width="100%" p={2} fontWeight={600} fontSize="10pt">
            <Flex direction="column" flexGrow={1}>
              <Text>{communityData?.numberOfMembers?.toLocaleString()}</Text>
              <Text>Members</Text>
            </Flex>
            <Flex direction="column" flexGrow={1}>
              <Text>1</Text>
              <Text>Online</Text>
            </Flex>
          </Flex>

          <Divider />

          <Flex
            align="center"
            width="100%"
            p={1}
            fontWeight={500}
            fontSize="10pt"
          >
            <Icon as={RiCakeLine} mr={2} fontSize={18} />
            {communityData?.createdAt && (
              <Text>
                Created{" "}
                {moment(
                  new Date(communityData.createdAt!.seconds * 1000)
                ).format("MMM DD, YYYY")}
              </Text>
            )}
          </Flex>
          <Link href={`/routes/${router.query.communityId}/submit`}>
            <Button mt={3} pr="20" pl="20" height="30px">
              Create Post
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};
export default About;
