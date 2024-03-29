import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
  maxWidth?: string;
};

const PageContent: React.FC<PageContentProps> = ({ children, maxWidth }) => {
  console.log("children", children);

  return (
    <Flex
      justify="center"
      p="16px 0px"
      // border="1px solid green"
    >
      <Flex
        width="95%"
        justify="center"
        maxWidth={maxWidth || "860px"}
        // border="1px solid red"
      >
        {/* LHS */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
          //   border="1px solid blue"
        >
          {children && children[0 as keyof typeof children]}
        </Flex>

        {/* RHS */}
        <Flex
          flexDirection="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          //   border="1px solid orange"
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
