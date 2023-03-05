import { Community } from "@/atoms/communitiesAtom";
import { Post } from "@/atoms/postAtom";
import { firestore } from "@/firebase/clientApp";
import usePosts from "@/hooks/usePosts";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type PostProps = {
  communityData: Community;
  userId?: string;
};

const Post: React.FC<PostProps> = ({ communityData }) => {
  //useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { postStateValue, setPostStateValue } = usePosts();

  const getPosts = async () => {
    try {
      // get post for the community
      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );

      // store posts in state
      const postsDocs = await getDocs(postsQuery);
      const posts = postsDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));

      console.log("posts", posts);
    } catch (error: any) {
      console.log("getPosts error", error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>Posts</div>;
};
export default Post;
