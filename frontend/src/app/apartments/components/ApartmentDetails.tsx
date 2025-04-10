"use client";

import { Container, Box, Typography, Button } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Apartment {
    id: number;
    name: string;
    location: string;
    price: number;
    description: string;
    imageUrl?: string; // Optional field for the image
}

export default function ApartmentDetails() {
    const params = useParams(); // Extract dynamic route parameters
    const id = params.id; // Get the "id" from the URL path
    const [apartment, setApartment] = useState<Apartment | null>(null);

    useEffect(() => {
        if (id) {
            // Fetch apartment details from the backend
            fetch(`http://localhost:5000/apartments/${id}`)
                .then((response) => response.json())
                .then((data) => setApartment(data))
                .catch((error) => console.error("Error fetching apartment details:", error));
        }
    }, [id]);

    if (!apartment) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container>
            {/* Image Section */}
            <Box sx={{ mb: 4 }}>
                <img
                    src={apartment.imageUrl || "/placeholder.jpg"} // Use placeholder if no image is available
                    alt={apartment.name}
                    style={{ width: "100%", borderRadius: "8px" }}
                />
            </Box>

            {/* Apartment Details */}
            <Typography variant="h4" gutterBottom>
                {apartment.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                {apartment.location}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
                {Number(apartment.price).toLocaleString("en-US")} EGP
            </Typography>
            <Typography variant="body1" gutterBottom>
                {apartment.description}
            </Typography>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "none" }}
                >
                    Call Us
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ textTransform: "none" }}
                >
                    WhatsApp
                </Button>
            </Box>
        </Container>
    );
}