"use client";

import { useTimeline } from "@/context/TimelineContext";
import friends from "@/data/friends.json";

export default function TimelinePage() {

  const { timeline } = useTimeline();

  const getFriend = (id) => {
    return friends.find((f) => String(f.id) === String(id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        📜 Timeline
      </h1>

      {timeline.length === 0 ? (
        <p className="text-gray-400">No activity yet</p>
      ) : (
        <div className="relative border-l-2 border-gray-200 ml-4 space-y-6">

          {timeline.map((item) => {
            const friend = getFriend(item.friendId);

            return (
              <div key={item.id} className="relative ml-6">

                {/* CARD */}
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">

                  <div className="flex justify-between items-center">

                    <h3 className="font-semibold flex items-center gap-2">

                      {/* ICON BEFORE NAME */}
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