"use client";
// This is a client component that fetches and displays a list of apartments
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Apartment {
    id: number;
    name: string;
    location: string;
    price: number;
    description: string;
}

export default function ApartmentsPage() {
    const [apartments, setApartments] = useState<Apartment[]>([]);

    // useEffect(() => {
    //     // Fetch apartments from the backend API
    //     fetch("http://localhost:3000/api/apartments") // Replace with your backend URL
    //         .then((response) => response.json())
    //         .then((data) => setApartments(data))
    //         .catch((error) => console.error("Error fetching apartments:", error));
    // }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Apartments</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* {apartments.map((apartment) => (
                    <div
                        key={apartment.id}
                        className="border rounded-lg shadow-md p-4 bg-white"
                    >
                        <img
                            src="/static/apartment-placeholder.jpg" // Replace with your static image path
                            alt="Apartment"
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold">{apartment.name}</h2>
                        <p className="text-sm text-gray-600">{apartment.location}</p>
                        <p className="text-sm text-gray-800 font-bold">${apartment.price}</p>
                        <p className="text-sm text-gray-600 mt-2">
                            {apartment.description}
                        </p>
                    </div>
                ))} */}
                <div className="rounded-lg shadow bg-white overflow-hidden">
                    {/* Image Section */}
                    <div className="relative w-full h-52">
                        <div className="absolute inset-0 rounded-t-lg overflow-hidden">
                            <Image
                                src="/apartment_card.jpg" // Replace with your static image path
                                fill
                                alt="Apartment"
                                className="object-cover"
                            />
                        </div>
                        
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Available
                        </span>
                    </div>
                    {/* Card Content */}
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-400">Penthouse - El Patio Casa</h2>
                        <p className="text-xs text-gray-800 mb-2">El Shorouk, Egypt</p>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                            <div className="flex items-center mr-4">
                                Description
                               </div>
                        </div>
                        <p className="text-lg font-bold text-gray-800 mb-2">10,500,000 EGP</p>
                        <div className="flex space-x-2">
                            <button className="p-2 bg-blue-500 text-white rounded-full shadow">
                                <i className="fas fa-phone"></i> {/* Replace with your icon library */}
                            </button>
                            <button className="p-2 bg-green-500 text-white rounded-full shadow">
                                <i className="fab fa-whatsapp"></i> {/* Replace with your icon library */}
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}