"use client";
import {
    Card, CardContent, CardMedia, Typography, Box,
} from "@mui/material";
import { useRouter } from 'next/navigation'

export default function ApartmentCard(
    { apartment }: { apartment: { id: number; name: string; location: string; price: number; description: string } }) {
    
    const router = useRouter()

    const handleCardClick = (e: any) => {
        e.preventDefault();
        router.push(`/apartments/${apartment.id}`);
    };
    return (
        <Card
            onClick={handleCardClick}
            key={apartment.id}
            sx={{
                mb: 3,
                maxWidth: 345,
                boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.25)",
                '&:hover': {
                    boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.3)",
                    transform: "translateY(-4px)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                }
            }}
        >
            {/* Image Section */}
            <Box sx={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={"/apartment_card.jpg"}
                    alt={apartment.name}
                />

            </Box>

            {/* Card Content */}
            <CardContent sx={{ pb: 0 }}>
                <Typography variant="h6" component="div" color="text.primary">
                    {apartment.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {apartment.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    {apartment.description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ marginTop: 1 }}>
                    {Number(apartment.price).toLocaleString("en-US")} EGP
                </Typography>

            </CardContent>
        </Card>
    )
}