"use client";

import { useTimeline } from "@/context/TimelineContext";

export default function TimelinePage() {

  const { timeline } = useTimeline();

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Timeline
      </h1>

      <div className="space-y-3">

        {timeline.map((item) => (

          <div key={item.id} className="bg-white p-4 rounded shadow-sm flex gap-3">

            <span>
              {item.type === "Call" && "📞"}
              {item.type === "Text" && "💬"}
              {item.type === "Video" && "🎥"}
            </span>

            <div>
              <p className="text-sm font-medium">
                {item.title}
              </p>
              <p className="text-xs text-gray-400">
                {item.date}
              </p>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}