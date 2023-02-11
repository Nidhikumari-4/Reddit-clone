import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Flex, Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({
  user,
  // could also be written as props and then props.user
}) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RightContent;
