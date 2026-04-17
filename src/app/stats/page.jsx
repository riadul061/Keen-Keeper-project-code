"use client";

import { useTimeline } from "@/context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

export default function StatsPage() {
  const { timeline } = useTimeline();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  //  Count interactions
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  //  Chart data
  const data = [
    { name: "Text", value: counts.Text, color: "#3b82f6" },
    { name: "Call", value: counts.Call, color: "#111827" },
    { name: "Video", value: counts.Video, color: "#166534" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">

      {/*  Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Friendship Analytics
      </h1>

      {/*  Card */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">

        <h2 className="text-lg text-gray-600 mb-4">
          By Interaction Type
        </h2>

        {/*  Chart */}
        <div className="w-full flex justify-center">
          <div style={{ width: "100%", height: 400 }}>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>
        </div>

        {/*  Legend */}
        <div className="flex justify-center gap-6 mt-6">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}