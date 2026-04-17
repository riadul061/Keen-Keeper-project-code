"use client";

import { useParams, useRouter } from "next/navigation";
import friendsData from "@/data/friends.json";
import Image from "next/image";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "react-toastify";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const timelineContext = useTimeline();
  if (!timelineContext) return <div>Loading...</div>;

  const { addEntry } = timelineContext;

  const friend = friendsData.find((f) => String(f.id) === id);
  if (!friend) return <div>Not Found</div>;

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    };

    addEntry(newEntry);
    toast.success(`${type} added!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* TOP STATS */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-semibold">62</p>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-2xl font-semibold">30</p>
            <p className="text-sm text-gray-500">Goal (Days)</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-lg font-semibold">Feb 27, 2026</p>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-6 py-2">

          {/* LEFT PROFILE */}
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">

            <Image
              src="https://i.pravatar.cc/100"
              width={90}
              height={90}
              alt="user"
              className="rounded-full mx-auto"
            />

            <h2 className="mt-3 font-semibold text-lg">{friend.name}</h2>

            <span className="inline-block mt-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
              {friend.tag}
            </span>

            <p className="text-xs text-gray-400 mt-2 italic">
              "Former colleague, great mentor"
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Preferred: email
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-6 space-y-2">
              <button className="w-full bg-gray-100 py-2 rounded">
                ⏸ Snooze 2 Weeks
              </button>

              <button className="w-full bg-gray-100 py-2 rounded">
                📁 Archive
              </button>

              <button
                onClick={() => router.push("/")}
                className="w-full bg-red-100 text-red-600 py-2 rounded"
              >
                🗑 Delete
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-4">

            {/* RELATIONSHIP GOAL */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-medium">Relationship Goal</h3>
                <p className="text-sm text-gray-500">
                  Connect every <span className="font-semibold">30 days</span>
                </p>
              </div>

              <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                Edit
              </button>
            </div>

            {/* QUICK CHECK-IN */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="mb-4 font-medium">Quick Check-In</h3>

              <div className="grid grid-cols-3 gap-3 py-2">

                <button
                  onClick={() => handleAction("Call")}
                  className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
                >
                  📞 
                  <br /> 
                  Call
                </button>

                <button
                  onClick={() => handleAction("Text")}
                  className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
                >
                  💬 
                  <br /> 
                  Text
                </button>

                <button
                  onClick={() => handleAction("Video")}
                  className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
                >
                  🎥 
                  <br /> 
                  Video
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}