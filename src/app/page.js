"use client";

import { useState } from "react";
import Banner from "@/components/homepage/Banner";
import Friends from "@/components/homepage/Friends";
import Stats from "@/components/homepage/Stats";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {

  const [friends, setFriends] = useState([
    { name: "David Kim", status: "Almost Due", tag: "WORK" },
    { name: "Emma Wilson", status: "Overdue", tag: "FAMILY" },
    { name: "Lisa Nakamura", status: "Overdue", tag: "WORK" },
    { name: "James Wright", status: "Overdue", tag: "HOBBY TRAVEL" },

    { name: "David Kim", status: "Overdue", tag: "WORK" },
    { name: "Emma Wilson", status: "On Track", tag: "FAMILY" },
    { name: "Lisa Nakamura", status: "On Track", tag: "WORK" },
    { name: "James Wright", status: "Almost Due", tag: "HOBBY TRAVEL" },

    { name: "David Kim", status: "Almost Due", tag: "WORK" },
    { name: "Emma Wilson", status: "Overdue", tag: "FAMILY" },
  ]);

  return (
    <div>
      <Banner friends={friends} setFriends={setFriends} />
      <Stats friends={friends} />
      <Friends friends={friends} setFriends={setFriends} />
    </div>
  );
}