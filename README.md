# Medium Blog Clone

A full-stack Medium blog clone built using modern web technologies, focusing on performance, scalability, and feature-rich functionality.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Zod (for validation)
- **Backend**: Cloudflare Workers, Prisma (with connection pooling)
- **Database**: PostgreSQL
- **Authentication**: JWT

## Installation

1. Clone Repo:
   ```bash
   git clone https://github.com/mukul-anand-bhatt/medium-blog
   cd medium-blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```bash
   DATABASE_URL=your_postgres_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Initialize Prisma**:
   ```bash
   npm install prisma
   npx prisma init
   ```

5. Replace `DATABASE_URL` in `.env`:
   ```bash
   DATABASE_URL="your_postgres_connection_string"
   ```

6. Add `DATABASE_URL` to `wrangler.toml`:
   ```toml
   name = "backend"

   [vars]
   DATABASE_URL = "your_prisma_connection_pool_url"
   ```

7. Migrate the database:
   ```bash
   npx prisma migrate dev
   ```

8. Run the application:
   ```bash
   npm run dev
   ```

---
