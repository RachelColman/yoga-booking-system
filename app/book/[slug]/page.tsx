import { supabase } from "@/lib/supabaseClient";

interface ClassPageProps {
  params: {
    slug: string
  }
}

export default async function ClassPage({ params }: ClassPageProps) {
  const { slug } = params;

  const { data: classData, error } = await supabase
    .from("classes")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!classData) return <p>Class not found</p>;

  return (
    <div className="p-5 space-y-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">{classData.name}</h1>
      <p>{classData.description}</p>
      <p className="text-gray-600">
        {classData.day_of_week} at {classData.time}
      </p>

      {/* Drop‑in */}
      {classData.price_dropin && (
        <a
          href={`/book/dates?class=${classData.slug}&type=dropin`}
          className="block bg-purple-600 text-white p-3 rounded-lg text-center"
        >
          Book Drop‑In (€{classData.price_dropin})
        </a>
      )}

      {/* 4‑Class Pack */}
      {classData.price_pack && (
        <a
          href={`/book/dates?class=${classData.slug}&type=4pack`}
          className="block bg-purple-600 text-white p-3 rounded-lg text-center"
        >
          4‑Class Pack (€{classData.price_pack})
        </a>
      )}

      {/* Course */}
      {classData.price_course && (
        <a
          href={`/book/dates?class=${classData.slug}&type=course`}
          className="block bg-purple-600 text-white p-3 rounded-lg text-center"
        >
          Beginner Course (€{classData.price_course})
        </a>
      )}
    </div>
  );
}
