"use client";

import { useSearchParams } from "next/navigation";

type ClassDate = {
  date: string;
  spots?: number;
};

export default function SelectDatesPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "dropin";

  // Placeholder dates
  const dropInDate: ClassDate[] = [
    { date: "Tuesday, April 22", spots: 8 }
  ];

  const fourPackDates: ClassDate[] = [
    { date: "Tuesday, April 22" },
    { date: "Tuesday, April 29" },
    { date: "Tuesday, May 6" },
    { date: "Tuesday, May 13" }
  ];

  const datesToShow = type === "4pack" ? fourPackDates : dropInDate;

  // For 4-pack: compute start + end
  const startDate = fourPackDates[0].date;
  const endDate = fourPackDates[fourPackDates.length - 1].date;

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">

      <h1 className="text-2xl font-bold">Select Your Dates</h1>

      <div className="space-y-4">

        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold">Your Booking</h3>
          <p className="text-gray-600 text-sm">Evening Flow with Rachael</p>
          <p className="text-gray-600 text-sm">Tuesdays • 7:30 PM</p>
        </div>

        <div className="border p-4 rounded-lg space-y-2">
          <h3 className="font-semibold">Included Dates</h3>

          {type === "dropin" && (
            <p>
              {dropInDate[0].date} — {dropInDate[0].spots} spots left
            </p>
          )}

          {type === "4pack" && (
            <>
              <p className="font-medium">4‑Week Course</p>
              <p>{startDate} → {endDate}</p>
              <p className="text-gray-600 text-sm">Every Tuesday at 7:30 PM</p>
            </>
          )}
        </div>

      </div>

      <a href="/book/info">
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold">
          Continue
        </button>
      </a>

    </div>
  );
}
