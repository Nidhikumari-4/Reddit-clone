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
