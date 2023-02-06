import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/assets/redditFace.svg" height="30px" />
        <Image
          src="/assets/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      {/* <Directory /> */}
      <RightContent />
    </Flex>
  );
};
export default Navbar;