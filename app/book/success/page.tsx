export default function SuccessPage() {
  return (
    <div className="max-w-xl mx-auto p-5 space-y-6 text-center">
      <h1 className="text-3xl font-bold">Booking Confirmed</h1>
      <p>Thank you! Your booking has been saved.</p>
      <a
        href="/"
        className="inline-block mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </a>
    </div>
  );
}
