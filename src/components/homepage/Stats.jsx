import React from 'react';

const Stats = () => {
  const stats = [
    { value: 10, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8 px-4">
      
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-sm  rounded-lg p-6 text-center"
        >
          <h2 className="text-2xl font-bold">{item.value}</h2>
          <p className="text-gray-500 text-sm mt-1">{item.label}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Stats;