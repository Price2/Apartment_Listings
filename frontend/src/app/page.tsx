import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans">
      

      {/* Main Content */}
      <main className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Apartment Listings</h1>
        <p className="text-lg text-gray-300">
          This is an apartment listing page. If you wish to add or see listings, please navigate using the navigation bar above.
        </p>
      </main>
    </div>
  );
}