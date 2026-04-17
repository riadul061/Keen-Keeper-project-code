"use client";

import { useState } from "react";
import friendsData from "@/data/friends.json";

import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import Friends from "@/components/homepage/Friends";
import Footer from "@/components/footer/Foooter";

export default function Home() {
  const [friends, setFriends] = useState(friendsData);

  return (
    <div className="bg-gray-50 min-h-screen">

      <Banner friends={friends} setFriends={setFriends} />
      <Stats friends={friends} />

      <Friends friends={friends} />
    </div>
  );
}