"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ClassData {
  id: string;
  name: string;
  slug: string;
  description: string;
  day_of_week: string;
  time: string;
  type: string;
  price_dropin: number | null;
  price_pack: number | null;
  price_course: number | null;
}

interface ClassDate {
  id: string;
  class_id: string;
  date: string;
  capacity: number | null;
  booked_count: number | null;
}

export default function DatesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get("type");
  const slug = searchParams.get("class");

  const [classData, setClassData] = useState<ClassData | null>(null);
  const [dates, setDates] = useState<ClassDate[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    async function load() {
      // Load class
      const { data: c } = await supabase
        .from("classes")
        .select("*")
        .eq("slug", slug)
        .single();

      setClassData(c);

      // Load dates
      const { data: d } = await supabase
        .from("class_dates")
        .select("*")
        .eq("class_id", c.id)
        .order("date", { ascending: true });

      setDates(d || []);
    }

    load();
  }, [slug]);

  const handleContinue = () => {
    const params = new URLSearchParams();
    params.set("type", type || "");
    params.set("class", slug || "");

    if (type === "dropin") {
      params.set("date", selectedDate);
    }

    router.push(`/book/payment?${params.toString()}`);
  };

  if (!classData) return <p>Loading…</p>;

  return (
    <div className="max-w-xl mx-auto p-5 space-y-6">
      <h1 className="text-3xl font-bold">Choose Dates</h1>

      {/* Drop‑in */}
      {type === "dropin" && (
        <div className="space-y-3">
          {dates.map((d) => (
            <div
              key={d.id}
              onClick={() => setSelectedDate(d.date)}
              className={`border rounded-xl p-4 cursor-pointer ${
                selectedDate === d.date
                  ? "bg-purple-100 border-purple-500"
                  : "bg-white shadow-sm"
              }`}
            >
              {new Date(d.date).toDateString()}
            </div>
          ))}
        </div>
      )}

      {/* 4‑pack or course */}
      {type !== "dropin" && (
        <div className="bg-white shadow-sm border rounded-xl p-5 space-y-2">
          <p className="font-medium">{classData.name}</p>
          <p>
            {dates[0]?.date} → {dates[dates.length - 1]?.date}
          </p>
        </div>
      )}

      <button
        onClick={handleContinue}
        disabled={type === "dropin" && !selectedDate}
        className={`w-full py-3 rounded-lg text-lg font-semibold ${
          type === "dropin" && !selectedDate
            ? "bg-gray-300 text-gray-500"
            : "bg-purple-600 text-white"
        }`}
      >
        Continue
      </button>
    </div>
  );
}
