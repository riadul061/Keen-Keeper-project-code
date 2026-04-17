const Stats = ({ friends }) => {

  const total = friends.length;

  const onTrack = friends.filter(
    (f) => f.status === "On Track"
  ).length;

  const needAttention = friends.filter(
    (f) => f.status === "Overdue" || f.status === "Almost Due"
  ).length;

  const stats = [
    { value: total, label: "Total Friends" },
    { value: onTrack, label: "On Track" },
    { value: needAttention, label: "Need Attention" },
    { value: "12", label: "Interactions This Month" }, 
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {item.value}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              {item.label}
            </p>
          </div>
        ))}

      </div>

      <div className="border-t mt-8"></div>

    </div>
  );
};

export default Stats;