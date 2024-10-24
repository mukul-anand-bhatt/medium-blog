# Medium Blog Clone

A full-stack Medium blog clone built using modern web technologies. This project focuses on building a performant, scalable, and feature-rich blogging platform.

## Tech Stack

### Frontend:
- **Next.js**: React-based framework for server-side rendering and static site generation.
- **TypeScript**: Statically typed JavaScript for type safety and scalability.
- **Zod**: A schema validation library used for data validation and type inference.

### Backend:
- **Cloudflare Workers**: Serverless functions for the backend, providing scalability and low-latency APIs.
- **Prisma**: ORM for database management and connection pooling, ensuring efficient interaction with the PostgreSQL database.
- **PostgreSQL**: Relational database for storing blog posts, user data, and other information.

### Authentication:
- **JWT (JSON Web Tokens)**: Secure token-based authentication for user login and session management.

## Features
- User authentication and authorization using JWT.
- Create, read, update, and delete (CRUD) functionality for blog posts.
- Efficient data validation with Zod to ensure data integrity.
- Server-side rendering for better performance and SEO.
- Connection pooling with Prisma for optimized database interaction.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medium-blog-clone.git
   cd medium-blog-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and provide your configuration:
   ```bash
   DATABASE_URL=your_postgres_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. Migrate the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the application:
   ```bash
   npm run dev
   ```

## Usage
- Access the frontend at `http://localhost:3000`
- The backend is powered by Cloudflare Workers and interacts with the PostgreSQL database through Prisma.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.

