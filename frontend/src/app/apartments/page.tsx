"use client";
// This is a client component that fetches and displays a list of apartments
import React, { useEffect, useState } from "react";
import {
    Typography, Box, 
    Container
    } from "@mui/material";
import AddApartmentDialog from './components/AddApartmentDialog';
import Header from "./components/Header";
import ApartmentCard from "./components/ApartmentCard";

interface Apartment {
    id: number;
    name: string;
    location: string;
    price: number;
    description: string;
}

export default function ApartmentsPage() {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [message, setMessage] = useState(""); // Unified message for both cases
    const [searchQuery, setSearchQuery] = useState("");
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
        const fetchApartments = async () => {
            try {
                const response = await fetch("http://localhost:5000/apartments");
                const data = await response.json();
                if (data.length === 0) {
                    setMessage("There are currently no apartment listings");
                } else {
                    setApartments(data);
                    setMessage("");
                }
            } catch (error) {
                console.error("Error fetching apartments:", error);
            }
        };

        fetchApartments();
    }, []);





    return (

        <Container>
            {/* Header Section */}
            
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setApartments={setApartments}
                setNoResultsMessage={setMessage}
                setOpenDialog={setOpenDialog}
            />

            
            {/* Header Section */}
            <Typography variant="h4" gutterBottom>
                Apartments
            </Typography>
            {message ? (
                <Typography
                    variant="h6"
                    sx={{ textAlign: "center", mt: 4, color: "gray" }}
                >
                    {message}
                </Typography>
            ) : (
                <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
                    {apartments.map((apartment) => (
                        <ApartmentCard
                            key={apartment.id}
                            apartment={apartment}
                        />
                    ))}
                </Box>
            )}

            {/* Add Apartment Dialog */}
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