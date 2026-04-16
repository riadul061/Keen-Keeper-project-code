import Image from "next/image";

const Friends = ({ friends }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">

      <h2 className="text-lg font-semibold mb-6">
        Your Friends
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {friends.map((friend, index) => {

          // status style
          let statusStyle =
            "bg-green-100 text-green-700";

          if (friend.status === "Overdue") {
            statusStyle = "bg-red-100 text-red-600";
          } else if (friend.status === "Almost Due") {
            statusStyle = "bg-yellow-100 text-yellow-700";
          }

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
            >

              {/* Avatar */}
              <Image
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                alt={friend.name}
                width={70}
                height={70}
                className="rounded-full mx-auto"
              />

              {/* Name */}
              <h3 className="mt-3 font-semibold text-sm">
                {friend.name}
              </h3>

              {/* Time */}
              <p className="text-gray-400 text-xs mt-1">
                62d ago
              </p>

              {/* Tag */}
              <div className="mt-2">
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {friend.tag}
                </span>
              </div>

              {/* Status badge */}
              <div className="mt-3">
                <span
                  className={`text-[10px] px-3 py-1 rounded-full font-medium ${statusStyle}`}
                >
                  {friend.status}
                </span>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Friends;