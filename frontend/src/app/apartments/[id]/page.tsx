"use client";

import { Container, Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Apartment {
    id: number;
    name: string;
    location: string;
    price: number;
    description: string;
    imageUrl?: string; // Optional field for the image
}

export default function ApartmentPage() {
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
        return <Typography color="white">Loading...</Typography>;
    }

    return (
        <Container sx={{ color: "#f5f5f5", mt: 4 }}>
            {/* Image Section */}
            <Box sx={{ mb: 4 }}>
                <img
                    src={apartment.imageUrl || "/apartment_page.jpg"} // Use placeholder if no image is available
                    alt={apartment.name}
                    style={{ width: "100%", borderRadius: "8px" }}
                />
            </Box>

            {/* Apartment Details */}
            <Paper sx={{ p: 4, backgroundColor: "#1e1e1e", borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
                    {apartment.name}
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: "#e0e0e0" }}>
                    {apartment.location}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ color: "#4caf50" }}>
                    {Number(apartment.price).toLocaleString("en-US")} EGP
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: "#e0e0e0" }}>
                    {apartment.description}
                </Typography>

                {/* Action Buttons */}
                <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                    <Button
                        variant="contained"
                        sx={{ textTransform: "none", backgroundColor: "#2196f3", color: "#ffffff" }}
                    >
                        Call Us
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ textTransform: "none", backgroundColor: "#43a047", color: "#ffffff" }}
                    >
                        WhatsApp
                    </Button>
                </Box>
            </Paper>

            {/* Additional Details Section */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper sx={{ p: 4, backgroundColor: "#1e1e1e", borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
                            Details
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ color: "#e0e0e0" }}>
                            Reference No: {apartment.id}
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ color: "#e0e0e0" }}>
                            Apartment Name: {apartment.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ color: "#e0e0e0" }}>
                            Address: {apartment.location}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper sx={{ p: 4, backgroundColor: "#1e1e1e", borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom sx={{ color: "#ffffff" }}>
                            Amenities
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ color: "#e0e0e0" }}>
                            - Medical Center
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ color: "#e0e0e0" }}>
                            - Commercial Strip
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ color: "#e0e0e0" }}>
                            - Business Hub
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ color: "#e0e0e0" }}>
                            - Sports Club
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
}