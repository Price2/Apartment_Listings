"use client";
// This is a client component that fetches and displays a list of apartments
import React, { useEffect, useState } from "react";
import {
    Card, CardContent, CardMedia, Typography, Box, Chip, Button,
    TextField, Container, Dialog, DialogTitle, DialogContent,
    DialogActions, DialogContentText
} from "@mui/material";
import AddApartmentDialog from './components/AddApartmentDialog';
import AddIcon from '@mui/icons-material/Add';

interface Apartment {
    id: number;
    name: string;
    location: string;
    price: number;
    description: string;
}

export default function ApartmentsPage() {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        price: '',
        description: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        location: '',
        price: '',
        description: ''
    });

    const validateForm = () => {
        const newErrors = {
            name: '',
            location: '',
            price: '',
            description: ''
        };

        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        } else if (!isNaN(formData.name as any)) {
            newErrors.name = 'Name must contain text, not just numbers';
            isValid = false;
        }

        // Location validation
        if (!formData.location.trim()) {
            newErrors.location = 'Location is required';
            isValid = false;
        } else if (!isNaN(formData.location as any)) {
            newErrors.location = 'Location must contain text, not just numbers';
            isValid = false;
        }

        // Price validation
        if (!formData.price) {
            newErrors.price = 'Price is required';
            isValid = false;
        } else if (isNaN(Number(formData.price))) {
            newErrors.price = 'Price must be a valid number';
            isValid = false;
        }

        // Description validation
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
            isValid = false;
        } else if (!isNaN(formData.description as any)) {
            newErrors.description = 'Description must contain text, not just numbers';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmitApartment = async () => {
        if (!validateForm()) return;

        try {
            const response = await fetch('http://localhost:5000/apartments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    price: Number(formData.price)
                }),
            });

            if (response.ok) {
                const newApartment = await response.json();
                setApartments([...apartments, newApartment]);
                setOpenDialog(false);
                setFormData({ name: '', location: '', price: '', description: '' });
                setErrors({ name: '', location: '', price: '', description: '' });
            }
        } catch (error) {
            console.error('Error creating apartment:', error);
        }
    };


    useEffect(() => {
        // Fetch apartments from the backend API
        fetch("http://localhost:5000/apartments")
            .then((response) => response.json())
            .then((data) => setApartments(data))
            .catch((error) => console.error("Error fetching apartments:", error));
    }, []);




    return (
        <Container>
            <Box sx={{ position: "relative", width: "100%", height: "350px", mb: 8 }}>
                {/* Background Image with Gradient Overlay */}
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/search_apartments.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 2,
                        filter: "brightness(1.5)",
                    }}
                />
                {/* Search Card overlaid on the hero image */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "90%",
                        maxWidth: "600px",
                    }}
                >
                    <Card
                        sx={{
                            boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.15)",
                            borderRadius: 3,
                            p: 2,
                            '&:hover': {
                                boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.3)"
                            }
                        }}
                    >
                        <CardContent sx={{ pt: 0 }}>
                            <Typography variant="h6" gutterBottom>
                                Properties For Sale and For Rent
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Search apartments..."
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        borderRadius: 2,
                                        "& fieldset": { borderRadius: "8px" },
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        borderRadius: "8px",
                                        boxShadow: 3,
                                        textTransform: "none",
                                        px: 3,
                                        py: 1,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    Search
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<AddIcon />}
                                    onClick={() => setOpenDialog(true)}
                                    sx={{
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        px: 3,
                                        borderWidth: "2px",
                                        "&:hover": { borderWidth: "2px" }
                                    }}
                                >
                                    Add
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            {/* Header Section */}
            <Typography variant="h4" gutterBottom>
                Apartments
            </Typography>


            <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
                {apartments.map((apartment) => (
                    <Card
                        key={apartment.id}
                        sx={{
                            mb: 3,
                            maxWidth: 345,
                            boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.25)",
                            '&:hover': {
                                boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.3)",
                                transform: "translateY(-4px)",
                                transition: "all 0.3s ease"
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
                            <Chip
                                label="Available"
                                color="success"
                                size="small"
                                sx={{
                                    position: "absolute",
                                    top: 8,
                                    left: 8,
                                    fontWeight: "bold",
                                }}
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
                            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        minWidth: 0,
                                        borderRadius: "50%",
                                        padding: 0,
                                    }}
                                >
                                    <i className="fas fa-phone"></i>
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    size="small"
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        minWidth: 0,
                                        borderRadius: "50%",
                                        padding: 0,
                                    }}
                                >
                                    <i className="fab fa-whatsapp"></i>
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <AddApartmentDialog
                open={openDialog}
                onClose={() => {
                    setOpenDialog(false);
                    setErrors({ name: '', location: '', price: '', description: '' });
                }}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmitApartment}
                errors={errors}
            />
        </Container>



    );
}