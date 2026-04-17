"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ClassData {
  id: string;
  name: string;
  slug: string;
  type: string;
}

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get("type");
  const slug = searchParams.get("class");
  const selectedDate = searchParams.get("date");

  const [classData, setClassData] = useState<ClassData | null>(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("classes")
        .select("*")
        .eq("slug", slug)
        .single();

      setClassData(data);
      setLoading(false);
    }

    load();
  }, [slug]);

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    const { data, error } = await supabase
      .from("bookings")
      .insert({
        class_id: classData?.id,
        type,
        selected_date: selectedDate || null,
        name,
        email,
        phone,
        payment_status: "pending"
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      alert("Error creating booking");
      return;
    }

    // Redirect to success page
    router.push("/book/success");
  };

  if (loading) return <p>Loading…</p>;

  return (
    <div className="max-w-xl mx-auto p-5 space-y-6">
      <h1 className="text-3xl font-bold">Your Details</h1>

      <p className="text-gray-700">
        Booking: <strong>{classData?.name}</strong>
      </p>

      {selectedDate && (
        <p className="text-gray-700">
          Date: <strong>{new Date(selectedDate).toDateString()}</strong>
        </p>
      )}

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Your Phone"
          className="w-full border p-3 rounded-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold"
      >
        Confirm Booking
      </button>
    </div>
  );
}
