import { Post } from "@/atoms/postAtom";
import PageContent from "@/components/Layout/PageContent";
import PostItem from "@/components/posts/PostItem";
import { auth, firestore } from "@/firebase/clientApp";
import usePosts from "@/hooks/usePosts";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { pid } from "process";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const PostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { postStateValue, setPostStateValue, onVote, onDeletePost } =
    usePosts();

  const fetchPost = async (postId: string) => {
    setLoading(true);
    try {
      const postDocRef = doc(firestore, "posts", postId);
      const postDoc = await getDoc(postDocRef);

      // update selcted post in state
      setPostStateValue((prev) => ({
        ...prev,
        selectedPost: { id: postDoc.id, ...postDoc.data() } as Post,
      }));
    } catch (error: any) {
      console.log("fetchPost error", error.message);
    }
    setLoading(false);
  };

  // Fetch post if not in already in state
  useEffect(() => {
    const { pid } = router.query;
    if (pid && !postStateValue.selectedPost) {
      fetchPost(pid as string);
    }
  }, [router.query, postStateValue.selectedPost]);

  return (
    <PageContent>
      {/* Selected post -> we will add postItem component that we created*/}
      <>
        {postStateValue.selectedPost && (
          <PostItem
            post={postStateValue.selectedPost}
            onVote={onVote}
            onDeletePost={onDeletePost}
            userVoteValue={
              postStateValue.postVotes.find(
                (vote) => vote.postId === postStateValue.selectedPost?.id
              )?.voteValue
            }
            userIsCreator={user?.uid === postStateValue.selectedPost?.creatorId}
          />
        )}
        {/* comments */}
      </>
      <>{/* about */}</>
    </PageContent>
  );
};
export default PostPage;
