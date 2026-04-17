import { supabase } from "@/lib/supabaseClient";

export default async function BookPage() {
  const { data: classes, error } = await supabase
    .from("classes")
    .select("*")
    .order("name");

  if (error) {
    console.error(error);
    return <p>Error loading classes</p>;
  }

  return (
    <div className="p-5 space-y-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Book a Class</h1>

      {classes?.map((c) => (
        <a
          key={c.id}
          href={`/book/${c.slug}`}
          className="block bg-white shadow-sm border rounded-xl p-4"
        >
          <p className="font-semibold">{c.name}</p>
          <p className="text-gray-600">{c.day_of_week} at {c.time}</p>
        </a>
      ))}
    </div>
  );
}
