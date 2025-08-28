# ElectroMart

ElectroMart is a modern e-commerce application built with Next.js 15, TypeScript, and Tailwind CSS. It offers a seamless shopping experience with features like product browsing, authentication, and responsive design.

## Features

- **Product Catalog**: Browse a wide range of electronic products.
- **Authentication**: Secure login and registration using NextAuth.js.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Image Optimization**: Utilizes Next.js Image component for efficient image loading.

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js
- **Image Handling**: Next.js Image component
- **Styling**: Tailwind CSS, DaisyUI

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/electromart.git
   cd electromart
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env.local file in the root directory and add the following:

env
Copy code
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
Run the development server:

bash
Copy code
npm run dev
The application will be accessible at http://localhost:3000.

Build & Production
To build the application for production:

bash
Copy code
npm run build
npm start
The production build will be available at http://localhost:3000.

Demo Credentials
Use the following credentials to log in:

Email: demo@electromart.com

Password: password123

Notes
AVIF images are not supported in Turbopack. They will be emitted without optimization or encoding.

Ensure your environment variables are correctly set to avoid runtime errors.

License
This project is licensed under the MIT License.

pgsql
Copy code

I made sure it’s **all in one block** so you can copy and paste directly.  

If you want, I can also **add a “Live Demo” section** with your deployed Vercel link.