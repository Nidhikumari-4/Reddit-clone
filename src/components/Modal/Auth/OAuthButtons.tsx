import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex mb={4}>
      <Button
        variant="oauth"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/assets/googlelogo.png" height="20px" />
      </Button>
      <Button
        variant="oauth"
        // isLoading={loading}
        // onClick={() => signInWithGoogle()}
      >
        <Image src="/assets/microsoftlogo.png" height="20px" />
      </Button>
      <Button variant="oauth">
        <Image src="/assets/githublogo.png" height="20px" />
      </Button>
      <Button
        variant="oauth"
        // isLoading={loading}
        // onClick={() => signInWithGoogle()}
      >
        <Image src="/assets/facebooklogo.png" height="20px" />
      </Button>
      <Button
        variant="oauth"
        // isLoading={loading}
        // onClick={() => signInWithGoogle()}
      >
        <Image src="/assets/twitterlogo.png" height="20px" />
      </Button>

      {/* {error && (
        <Text display="flex"  alignItems="center" justifyContent="center">
          {error.message}
        </Text>
      )} */}
    </Flex>
  );
};
export default OAuthButtons;
