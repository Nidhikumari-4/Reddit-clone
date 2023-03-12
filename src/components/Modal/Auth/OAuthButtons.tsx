import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth);
  // const [signInWithMicrosoft, user, loading, error] = useSignInWithMicrosoft(auth);
  // const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  // const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
  // const [signInWithTwitter, user, loading, error] = useSignInWithTwitter(auth);

  return (
    <Flex direction="column" mb={4} width="100%">
      <Flex direction="row" mb={2}>
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
          // onClick={() => signInWithMicrosoft()}
        >
          <Image src="/assets/microsoftlogo.png" height="20px" />
        </Button>
        <Button variant="oauth">
          <Image src="/assets/githublogo.png" height="20px" />
        </Button>
        <Button
          variant="oauth"
          // isLoading={loading}
          // onClick={() => signInWithFacebook()}
        >
          <Image src="/assets/facebooklogo.png" height="20px" />
        </Button>
        <Button
          variant="oauth"
          // isLoading={loading}
          // onClick={() => signInWithTwitter()}
        >
          <Image src="/assets/twitterlogo.png" height="20px" />
        </Button>
      </Flex>
      {error && (
        <Text display="flex" alignItems="center" justifyContent="center" ml={5}>
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
