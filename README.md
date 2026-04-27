This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Docker

Build the production image:

```bash
docker build -t plainreply .
```

Run it with the required environment variables:

```bash
docker run --rm -p 3000:3000 \
	-e MONGODB_URI="your-mongodb-uri" \
	-e JWT_SECRET="your-jwt-secret" \
	-e OPENAI_API_KEY="your-openai-key" \
	plainreply
```

## Required Environment Variables

- `MONGODB_URI`
- `JWT_SECRET`
- `OPENAI_API_KEY`

## CI Pipeline

The repository includes a GitHub Actions workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml) that installs dependencies, runs lint, and builds the app on every push and pull request.

## CD Pipeline

The repository includes [.github/workflows/cd.yml](.github/workflows/cd.yml), which builds and publishes the Docker image to Docker Hub on pushes to `dev` and `main`.

## Render Deployment

**Setup:**

1. Add these GitHub repository secrets:
   - `DOCKERHUB_USERNAME` (your Docker Hub username)
   - `DOCKERHUB_TOKEN` (Docker Hub access token)
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `OPENAI_API_KEY`

2. Create a free account on [Render](https://render.com).

3. Choose one of two deployment options:

   **Option A: Deploy from Docker Hub (Recommended)**
   - In Render dashboard, create a new "Web Service".
   - Select "Docker Image" as the runtime.
   - Enter image URL: `docker.io/<your-dockerhub-username>/plainreply:dev` or `:main`.
   - Add environment variables: `MONGODB_URI`, `JWT_SECRET`, `OPENAI_API_KEY`.
   - Render automatically injects `PORT`; no fixed port value is needed.
   - Deploy and access via Render's URL.

   **Option B: Deploy from GitHub (Automatic Rebuilds)**
   - In Render dashboard, create a new "Web Service".
   - Connect your GitHub repository.
   - Set root directory: `plainreply`.
   - Set build command: `npm ci && npm run build`.
   - Set start command: `npm run start`.
   - Add environment variables: `MONGODB_URI`, `JWT_SECRET`, `OPENAI_API_KEY`.
   - Render automatically injects `PORT`; no fixed port value is needed.
   - Deploy and access via Render's URL.

4. Every push to `dev` or `main` will trigger CI and publish a new image. Render will auto-redeploy if connected to Docker Hub or GitHub.
