"use client";
import { useRouter } from "next/navigation";

const DeleteButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteButton;