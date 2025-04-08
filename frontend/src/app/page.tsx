import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans">
      {/* Navigation Bar */}
      {/* <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Apartment Listings</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/apartments" className="text-gray-300 hover:text-white">
                Apartments
              </a>
            </li>
            <li>
              <a href="/add-apartment" className="text-gray-300 hover:text-white">
                Add Apartment
              </a>
            </li>
          </ul>
        </div>
      </nav> */}

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