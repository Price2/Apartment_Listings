// components/Navbar.tsx
"use client"; // 👈 Marks this as a client component
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#111827",
        boxShadow: 1,
        mb: 10
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Apartment Listings
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/" passHref>
              <Button
                sx={{
                  color: "#D1D5DB",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/apartments" passHref>
              <Button
                sx={{
                  color: "#D1D5DB",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                Apartments
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}