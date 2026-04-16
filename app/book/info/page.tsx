import Link from "next/link"

export default function PersonalInfoPage() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">

      <h1 className="text-2xl font-bold">Your Details</h1>

      <div className="space-y-4">

        <div className="flex flex-col space-y-1">
          <label className="font-medium">Name</label>
          <input
            type="text"
            className="border rounded-lg p-3"
            placeholder="Your full name"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-medium">Email</label>
          <input
            type="email"
            className="border rounded-lg p-3"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-medium">Phone (optional)</label>
          <input
            type="tel"
            className="border rounded-lg p-3"
            placeholder="087 123 4567"
          />
        </div>

      </div>

    <Link href="/book/payment">
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold">
            Continue to Payment
        </button>
    </Link>

    </div>
  );
}
