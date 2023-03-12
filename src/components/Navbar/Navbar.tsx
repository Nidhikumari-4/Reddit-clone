import React from "react";
import { Flex, Image, Stack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { auth } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./Directory/Directory";
import useDirectory from "@/hooks/useDirectory";
import { defaultMenuItem } from "@/atoms/directoryMenuAtom";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const { onSelectMenuItem } = useDirectory();

  return (
    <Stack spacing={5} position="sticky" top="0">
      <Flex
        bg="white"
        height="44px"
        padding="6px 12px"
        justifyContent={{ md: "space-between" }}
      >
        <Flex
          align="center"
          width={{ base: "40px", md: "auto" }}
          mr={{ base: 0, md: 2 }}
          cursor="pointer"
          onClick={() => onSelectMenuItem(defaultMenuItem)}
        >
          <Image src="/assets/redditFace.svg" height="30px" />
          <Image
            src="/assets/redditText.svg"
            height="46px"
            display={{ base: "none", md: "unset" }}
          />
        </Flex>
        {user && <Directory />}
        <SearchInput user={user} />
        <RightContent user={user} />
      </Flex>
    </Stack>
  );
};
export default Navbar;
