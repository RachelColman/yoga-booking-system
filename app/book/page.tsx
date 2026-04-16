"use client";

import Link from "next/link";

export default function BookPage() {
  // TEMPORARY placeholder classes until Supabase is ready
  const classes = [
    {
      id: "tuesday-flow",
      name: "Tuesday Evening Flow",
      time: "Tuesdays • 7:30 PM",
      location: "Dunboyne",
      description: "A calming weekly class to unwind and reset"
    },
    {
      id: "beach-yoga",
      name: "Beach Yoga",
      time: "Saturdays • 9:00 AM",
      location: "Bettystown Beach",
      description: "A refreshing outdoor practice by the sea"
    },
    {
      id: "full-moon-event",
      name: "Full Moon Yoga",
      time: "Monthly • 8:00 PM",
      location: "Outdoor",
      description: "A special evening event under the moonlight"
    }
  ];

  return (
    <div className="max-w-md mx-auto p-5 space-y-8">

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Book a Class</h1>
        <p className="text-gray-600">Choose from weekly classes and special events</p>
      </div>

      {/* Class List */}
      <div className="space-y-5">
        {classes.map((cls) => (
          <div key={cls.id}>
            <Link href={`/book/${cls.id}`}>
              <div className="bg-white shadow-sm border rounded-xl p-5 cursor-pointer hover:shadow-md transition">
                <h2 className="text-xl font-semibold">{cls.name}</h2>
                <p className="text-gray-700 mt-1">{cls.time}</p>
                <p className="text-gray-600">{cls.location}</p>
                <p className="text-gray-600 text-sm mt-2">{cls.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
