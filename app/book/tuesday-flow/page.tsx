"use client";

import Link from "next/link";

export default function TuesdayFlowPage() {
  // TEMPORARY placeholder data
  const nextClass = {
    date: "Tuesday, April 22",
    time: "7:30 PM",
    duration: "60 minutes",
    location: "Dunboyne",
    capacity: 12,
    booked_count: 4,
  };

  const spotsLeft = nextClass.capacity - nextClass.booked_count;
  const isFull = spotsLeft <= 0;

  return (
    <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto p-5 space-y-8">


      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Tuesday Evening Flow</h1>
        <p className="text-gray-600">A calming weekly class to unwind and reset</p>
      </div>

      {/* Class Summary */}
      <div className="bg-white shadow-sm border rounded-xl p-5 space-y-2">
        <h2 className="text-xl font-semibold">Evening Flow with Rachael</h2>
        <p className="text-gray-700">{nextClass.date} • {nextClass.time}</p>
        <p className="text-gray-600">{nextClass.duration}</p>
        <p className="text-gray-600">{nextClass.location}</p>

        <p className="text-green-600 font-medium pt-1">
          {spotsLeft} spots remaining
        </p>
      </div>

      {/* Booking Options */}
      <div className="space-y-5">

        {/* Drop-In */}
        <div>
          <Link href="/book/dates?type=dropin&class=tuesday-flow">
            <div className="bg-white shadow-sm border rounded-xl p-5 cursor-pointer hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Drop‑In</h3>
                <p className="text-lg font-bold">€12</p>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                One‑time class • Perfect for trying it out
              </p>
            </div>
          </Link>
        </div>

        {/* 4-Class Pack */}
        <div>
          <Link href="/book/dates?type=4pack&class=tuesday-flow">
            <div
              className={`rounded-xl p-5 cursor-pointer transition shadow-sm border 
                ${isFull ? "opacity-50 pointer-events-none" : "bg-purple-50 hover:shadow-md"}
              `}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">4‑Class Pack</h3>
                <p className="text-lg font-bold">€40</p>
              </div>

              <p className="text-gray-700 text-sm mt-1">
                4‑week course • Tuesdays at 7:30 PM
              </p>

              <p className="text-green-700 text-sm font-medium mt-2">
                Save €8 (17%) compared to drop‑ins
              </p>

              {isFull && (
                <p className="text-red-600 text-sm mt-2">
                  This term is fully booked.
                </p>
              )}
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}


