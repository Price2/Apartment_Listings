"use client";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    TextField,
    Button
} from "@mui/material";


export default function AddApartmentDialog({
    open,
    onClose,
    formData,
    setFormData,
    handleSubmit,
    errors
}: {
    open: boolean;
    onClose: () => void;
    formData: {
        name: string;
        location: string;
        price: string;
        description: string;
    };
    setFormData: (data: {
        name: string;
        location: string;
        price: string;
        description: string;
    }) => void;
    handleSubmit: () => void;
    errors: { 
        name: string;
        location: string;
        price: string;
        description: string;
    };
}) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Apartment</DialogTitle>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <DialogContent>
                    <DialogContentText sx={{ mb: 3 }}>
                        Please fill in all required fields
                    </DialogContentText>

                    {/* Name Field */}
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Apartment Name"
                        fullWidth
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{ mb: 2 }}
                    />

                    {/* Location Field */}
                    <TextField
                        margin="dense"
                        label="Location"
                        fullWidth
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        error={!!errors.location}
                        helperText={errors.location}
                        sx={{ mb: 2 }}
                    />

                    {/* Price Field */}
                    <TextField
                        margin="dense"
                        label="Price (EGP)"
                        fullWidth
                        required
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        error={!!errors.price}
                        helperText={errors.price}
                        slotProps={{
                            htmlInput: {
                                min: 0,
                                inputMode: "numeric",
                                pattern: "[0-9]*",
                            }
                        }}
                        sx={{ mb: 2 }}
                    />

                    {/* Description Field */}
                    <TextField
                        margin="dense"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        error={!!errors.description}
                        helperText={errors.description}
                        sx={{ mb: 1 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" variant="contained" color="primary">
                        Add Apartment
                    </Button>
                    <Button onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}