import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import "./globals.css";
import Container from "@mui/material/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apartment Listings",
  description: "A simple apartment listing application",};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AppBar
          position="static"
          sx={{
            backgroundColor: "#111827", // Equivalent to Tailwind's bg-gray-900
            boxShadow: 1, // MUI shadow (adjust as needed)
            mb:10
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
                      color: "#D1D5DB", // Tailwind's text-gray-300
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
                <Link href="/add-apartment" passHref>
                  <Button
                    sx={{
                      color: "#D1D5DB",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": { color: "#FFFFFF" },
                    }}
                  >
                    Add Apartment
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {children}
      </body>
    </html>
  );
}
