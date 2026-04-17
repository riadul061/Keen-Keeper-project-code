"use client";

import { useTimeline } from "@/context/TimelineContext";
import timelineData from "@/data/timeline.json";
import friends from "@/data/friends.json";

export default function TimelinePage() {
    const { timeline } = useTimeline();

    const allTimeline = [...timeline, ...timelineData];

    const getFriend = (id) => {
        return friends.find((f) => f.id === id);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">

            <h1 className="text-2xl font-bold mb-6">
                📜 Timeline
            </h1>

            {allTimeline.length === 0 ? (
                <p className="text-gray-400">No activity yet</p>
            ) : (
                <div className="relative border-l-2 border-gray-200 ml-4 space-y-6">

                    {allTimeline.map((item) => {
                        const friend = getFriend(item.friendId);

                        return (
                            <div key={item.id} className="relative ml-6">

                                {/* ICON DOT */}
                                <span className="absolute -left-5 w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white text-xs shadow-md">
                                </span>

                                {/* CARD */}
                                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">

                                    <div className="flex justify-between items-center">

                                        <h3 className="font-semibold">
                                            {item.type === "Call" && "📞"}
                                            {item.type === "Text" && "💬"}
                                            {item.type === "Meet" && "🤝"}
                                            {item.type === "Video" && "🎥"}
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