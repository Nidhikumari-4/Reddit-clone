import { Post, postState } from "@/atoms/postAtom";
import { firestore } from "@/firebase/clientApp";
import { Box, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  collection,
  doc,
  increment,
  serverTimestamp,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import CommentInput from "./CommentInput";

type CommentsProps = {
  user: User;
  selectedPost: Post | null;
  communityId: string;
};

export type Comment = {
  id: string;
  createdId: string;
  createdDisplayText: string;
  communityId: string;
  postId: string;
  postTitle: string;
  text: string;
  createdAt: Timestamp;
};

const Comments: React.FC<CommentsProps> = ({
  user,
  selectedPost,
  communityId,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const setPostState = useSetRecoilState(postState);

  const onCreateComment = async () => {
    setCreateLoading(true);
    try {
      const batch = writeBatch(firestore);

      // create a comment document
      const commentDocRef = doc(collection(firestore, "comments"));

      const newComment: Comment = {
        id: commentDocRef.id,
        createdId: user.uid,
        createdDisplayText: user?.email!.split("@")[0],
        communityId,
        postId: selectedPost?.id!,
        postTitle: selectedPost?.title!,
        text: commentText,
        createdAt: serverTimestamp() as Timestamp,
      };

      batch.set(commentDocRef, newComment);

      // update post noOfComments +1
      const postDocRef = doc(firestore, "posts", selectedPost?.id as string);
      batch.update(postDocRef, {
        numberOfComments: increment(1),
      });

      // batch commit
      await batch.commit();

      // update client recoil state
      setCommentText("");
      setComments((prev) => [newComment, ...prev]);

      setPostState((prev) => ({
        ...prev,
        selectedPost: {
          ...prev.selectedPost,
          numberOfComments: prev.selectedPost?.numberOfComments! + 1,
        } as Post,
      }));
    } catch (error: any) {
      console.log("onDeleteComment error", error.message);
    }
    setCreateLoading(false);
  };

  const onDeleteComment = async (comment: string) => {
    // delete a comment documenr
    // update post noOfComments -1
    // update client recoil state
  };

  const getPostComments = async () => {};

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <Box bg="white" borderRadius="0px 0px 4px 4px" p={2}>
      <Flex
        direction="column"
        pl={10}
        pr={4}
        mb={6}
        fontSize="10pt"
        width="100%"
      >
        {/* CommentInput */}
        <CommentInput
          commentText={commentText}
          setCommentText={setCommentText}
          user={user}
          createLoading={createLoading}
          onCreateComment={onCreateComment}
        />
      </Flex>
    </Box>
  );
};
export default Comments;
