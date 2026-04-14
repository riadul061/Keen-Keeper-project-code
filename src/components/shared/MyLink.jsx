"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`pb-2 font-semibold ${pathname === href ? "rounded-lg bg-green-900 text-white" : ""}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;