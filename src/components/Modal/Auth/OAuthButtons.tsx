import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // const [signInWithMicrosoft, user, loading, error] = useSignInWithMicrosoft(auth);
  // const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  // const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
  // const [signInWithTwitter, user, loading, error] = useSignInWithTwitter(auth);

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

      {error && (
        <Text display="flex" alignItems="center" justifyContent="center">
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
