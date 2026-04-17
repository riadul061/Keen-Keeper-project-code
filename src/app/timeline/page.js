"use client";

import { useTimeline } from "@/context/TimelineContext";
import friends from "@/data/friends.json";
import { useState } from "react";

export default function TimelinePage() {

  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("All");

  const getFriend = (id) => {
    return friends.find((f) => String(f.id) === String(id));
  };

  // ✅ FILTER LOGIC
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        📜 Timeline
      </h1>

      {/* ✅ FILTER DROPDOWN */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 px-3 py-2 rounded-lg bg-gray-100 text-sm"
      >
        <option value="All">All</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
        <option value="Meet">Meet</option>
      </select>

      {filteredTimeline.length === 0 ? (
        <p className="text-gray-400">No activity found</p>
      ) : (
        <div className="relative border-l-2 border-gray-200 ml-4 space-y-6">

          {filteredTimeline.map((item) => {
            const friend = getFriend(item.friendId);

            return (
              <div key={item.id} className="relative ml-6">

                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">

                  <div className="flex justify-between items-center">

                    <h3 className="font-semibold flex items-center gap-2">

                      {/* ICON */}
                      <span>
                        {item.type === "Call" && "📞"}
                        {item.type === "Text" && "💬"}
                        {item.type === "Meet" && "🤝"}
                        {item.type === "Video" && "🎥"}
                      </span>

                      {item.type} with {friend?.name || "Unknown"}

                    </h3>

                    <span className="text-xs text-gray-400">
                      {item.date}
                    </span>

                  </div>

                  {item.note && (
                    <p className="text-sm text-gray-500 mt-1">
                      {item.note}
                    </p>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      )}
    </div>
  );
}