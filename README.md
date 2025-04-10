# Apartment Listings

This is a full-stack application for managing apartment listings. It includes a **frontend** built with Next.js and Material-UI and a **backend** built with NestJS and TypeORM, connected to a PostgreSQL database.

## Features

- View apartment listings
- Search apartments by name
- Add new apartment listings
- View detailed information about apartments

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Apartment_Listings
```

### 2. Start the Application with Docker

The project includes a `docker-compose.yml` file to simplify setup. Run the following command to start the application:

```bash
- docker-compose up --build
```

This will:

- Start a PostgreSQL database container
- Build and start the **backend** (NestJS) container
- Build and start the **frontend** (Next.js) container

### 3. Access the Application

- **Frontend**: Open [http://localhost:3000](http://localhost:3000) in your browser.
- **Backend API**: Access the API at [http://localhost:5000](http://localhost:5000).

---

## Development Instructions

### 1. Run the Frontend Locally

Navigate to the `frontend` directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

### 2. Run the Backend Locally

Navigate to the `backend` directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start:dev
```

The backend will be available at [http://localhost:5000](http://localhost:5000).

---

## Environment Variables

The project uses the following environment variables:

### Backend

- `DATABASE_HOST`: Hostname of the PostgreSQL database (default: `postgres`)
- `DATABASE_USER`: Database username (default: `admin`)
- `DATABASE_PASSWORD`: Database password (default: `admin`)
- `DATABASE_NAME`: Database name (default: `apartments`)

### Frontend

No additional environment variables are required for the frontend.

---

## Project Structure

### Frontend

- **`frontend/src/app`**: Contains Next.js pages and components.
- **`frontend/src/app/apartments`**: Contains apartment-related components and pages.

### Backend

- **`backend/src/apartments`**: Contains modules, controllers, services, and entities for apartment management.
- **`backend/src/main.ts`**: Entry point for the backend application.

---

## Troubleshooting

- Ensure Docker is running before starting the application.
- If the database container fails, delete the `postgres_data` volume and restart Docker Compose:

```bash
docker-compose down -v
docker-compose up --build
```

---

## License

This project is licensed under the MIT License.