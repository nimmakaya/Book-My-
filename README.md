# Book My Cinema

This project is a full stack application for booking movie tickets online. It comprises a React-based frontend and a Golang-based backend with MongoDB as the database. The application allows users to register, login, view upcoming movies, and book tickets. Additionally, it provides an admin panel for managing movies, venues, and bookings.

## Structure

- **Backend** (`/backend`): Contains the Go API and MongoDB connection setup.
  - `db/` - MongoDB connection utilities.
  - `handlers/` - API handlers for CRUD operations on movie bookings.
  - `models/` - Data models.
  - `utils/` - Helper utilities.
  - `main.go` - Server setup and API routes.
- **Frontend** (`/frontend`):
  - `User/` - Contains user-related features like registration, login, movie listings.
  - `Admin/` - Admin functionalities such as manage cities, venues, movies.
  - `App.js` - Main React component that ties the user interface together.

**User Folder**  <br />
The User folder contains all the components and assets related to the user interface and functionalities accessible to the general public or registered users. Here's what each part is typically responsible for:

RegisterForm.js - Contains the user registration form and handles the registration process. <br />
LoginForm.js - Handles user authentication. Allows users to enter their credentials and access their accounts. <br />
UpcomingMovies.js - Displays a list of upcoming movies. May include brief descriptions, release dates, and other key information. <br />
MovieDetailsPage.js - Provides detailed information about a specific movie when a user selects one from the list. It typically includes trailers, cast information, venues, show timings, etc. <br />
SeatLayout.js - Responsible for displaying the seating arrangement of a specific showtime/movie. Allows users to select and book seats. <br />
ConfirmationPage.js - Shows a summary of the booking for user confirmation. Includes details like movie name, showtime, seats selected, and total price. <br />
Checkout.js - Handles the payment process. Users can enter payment details to finalize their booking. <br />
SplitTickets.js - Allows users to split ticket bookings among multiple participants, useful for group bookings. <br />
Profile.js - Displays user profile information and booking history. Users can edit their details or view past bookings. <br />
WelcomePage.js - The landing page after a user logs in. Generally provides a dashboard view with quick links to major features such as current bookings, upcoming movies, etc. <br />
icons/ - A folder containing images and icons used across the user interface. <br />

**Admin Folder** <br />
The Admin folder encompasses all the components related to administrative functions of the website. These components are accessible only to users with administrative privileges. The folder typically includes:

CreateCity.js - Allows admins to add new cities where movies will be shown. Useful for geographical scaling of services. <br />
CreateVenue.js - Enables admins to add and manage venues (theaters) within registered cities, including details like number of screens, etc. <br />
CreateMovie.js - Admins can add new movies to the system, specifying details like title, cast and crew, release date, and attaching trailers or posters. <br />
OpenMovies.js - Used for scheduling showtimes for different movies at various venues. This involves setting the date, time. <br />
SelectVenue.js - Admin can select venues for opening movies section <br />
LoginForm.js - A separate authentication component for admins to access the backend administrative functionalities. <br />
WelcomePage.js - Welcome page for admin and showcase admin features <br />

## Prerequisites

Before running the project, ensure you have the following installed:
- Go (version 1.x)
- Node.js and npm

## Installation

Clone the repository:

```bash
git clone https://github.com/nimmakaya/Book-My-Cinema.git
cd Book-My-Cinema
```

### Setting up the Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
go get .
```

Run the server:

```bash
go run main.go
```

### Setting up the Frontend

Navigate to the frontend directory:

```bash
cd ../frontend
npm install
```

Start the React app:

```bash
npm start
```

The frontend should now be running on [http://localhost:3000].

## Usage

- Visit [http://localhost:3000] in your web browser to view the user interface.
- Log in as an admin to manage the system, or register as a user to start booking movie tickets.
- Admin credentials: Email: admin2901@gmail.com Password: admin2901

## Deployment

The application is deployed on AWS EC2 instances. 
Access it at http://13.53.132.117
