import {
    Card, CardContent, Typography, Box, Button,
    TextField
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function Header({
    searchQuery,
    setSearchQuery,
    setOpenDialog,
    handleSearch,
}: {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setApartments: (apartments: any[]) => void;
    setNoResultsMessage: (message: string) => void,
    setOpenDialog: (open: boolean) => void;
    handleSearch: () => void;
}) {


    return (
        <Box sx={{ position: "relative", width: "100%", height: "350px", mb: 8, mt:10 }}>
            {/* Background Image */}
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
            {/* Search Card overlaid on the image */}
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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
                                onClick={handleSearch}
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
    )
}