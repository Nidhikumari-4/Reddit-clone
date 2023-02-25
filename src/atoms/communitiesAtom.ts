import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorAt: string;
  numberOfMembers: number;
  privacyType: "public" | "restrictied" | "private";
  createdAt?: Timestamp;
  imageURL?: string;
}
export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}
export interface CommunityState {
  mySnippets: CommunitySnippet[];
  //visited communities
}
export const defaultCommunityState: CommunityState = {
  mySnippets: [],
};
export const communityState = atom<CommunityState>({
  key: "communitiesState",
  default: defaultCommunityState,
});
