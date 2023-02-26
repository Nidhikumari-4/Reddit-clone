import PageContent from "@/components/Layout/PageContent";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const submitPostPage: React.FC = () => {
  return (
    <PageContent>
      <>
        {/* NewPostForm */}
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text fontWeight={600}>Create a post</Text>
        </Box>
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default submitPostPage;
