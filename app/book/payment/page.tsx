export default function PaymentPage() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">

      <h1 className="text-2xl font-bold">Payment</h1>

      {/* Booking Summary */}
      <div className="border p-4 rounded-lg space-y-2">
        <h3 className="font-semibold">Your Booking</h3>
        <p className="text-gray-600 text-sm">Evening FLow with Rachael</p>
        <p className="text-gray-600 text-sm">Tuesdays • 7:30 PM</p>

        <div className="pt-2">
          <h4 className="font-medium">Included Dates</h4>
          <p>Tuesday, April 22</p>
          <p>Tuesday, April 29</p>
          <p>Tuesday, May 6</p>
          <p>Tuesday, May 13</p>
        </div>

        <div className="pt-2">
          <h4 className="font-medium">Total</h4>
          <p className="text-xl font-bold">€40</p>
        </div>
      </div>

      {/* Pay Button */}
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold">
        Pay Now
      </button>

    </div>
  );
}
