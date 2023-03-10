import { communityState } from "@/atoms/communitiesAtom";
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/posts/NewPostForm";
import { auth } from "@/firebase/clientApp";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

const submitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const communityStateValue = useRecoilValue(communityState);
  console.log("communityStateValue", communityStateValue);

  return (
    <PageContent>
      <>
        {/* NewPostForm */}
        <Box p="14px 0px">
          <Text fontWeight={600}>Craete a Post</Text>
          {user && <NewPostForm user={user} />}
        </Box>
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default submitPostPage;
