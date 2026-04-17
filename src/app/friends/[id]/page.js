"use client";

import { useParams, useRouter } from "next/navigation";
import friendsData from "@/data/friends.json";
import Image from "next/image";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "react-toastify";

export default function Page() {

  const { id } = useParams();
  const router = useRouter();

  // ✅ FIX: only ONE time call
  const timelineContext = useTimeline();

  if (!timelineContext) {
    return <div>Loading...</div>;
  }

  const { addEntry } = timelineContext;

  const friend = friendsData.find((f) => f.id === id);

  if (!friend) return <div>Not Found</div>;

  // ✅ timeline add function
  const handleAction = (type) => {

    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    };

    addEntry(newEntry);

    toast.success(`${type} added!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="bg-white p-6 rounded-xl text-center shadow-sm">

          <Image
            src="https://i.pravatar.cc/100"
            width={90}
            height={90}
            alt="user"
            className="rounded-full mx-auto"
          />

          <h2 className="mt-3 font-semibold">{friend.name}</h2>

          <p className="text-xs text-gray-400 mt-1">
            {friend.tag}
          </p>

          {/* DELETE */}
          <button
            onClick={() => router.push("/")}
            className="mt-6 w-full bg-red-100 text-red-600 py-2 rounded"
          >
            🗑️ Delete
          </button>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2">

          <div className="bg-white p-4 rounded shadow-sm">

            <h3 className="mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-3">

              <button
                onClick={() => handleAction("Call")}
                className="bg-gray-100 py-3 rounded"
              >
                📞 Call
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="bg-gray-100 py-3 rounded"
              >
                💬 Text
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="bg-gray-100 py-3 rounded"
              >
                🎥 Video
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}