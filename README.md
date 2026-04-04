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
docker run --rm -p 4050:4050 \
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

The repository also includes [.github/workflows/cd.yml](.github/workflows/cd.yml), which builds and publishes the Docker image to GitHub Container Registry and deploys it to `116.202.210.102` on pushes to `dev` and `main`.

What you need to do:

1. Add these repository secrets in GitHub:
	- `SERVER_USER` (SSH user on `116.202.210.102`)
	- `SERVER_SSH_KEY` (private key for that user)
	- `GHCR_USERNAME` (GitHub username that can read packages)
	- `GHCR_TOKEN` (GitHub PAT with `read:packages`)
	- `MONGODB_URI`
	- `JWT_SECRET`
	- `OPENAI_API_KEY`
2. On the server, install Docker and ensure the SSH user can run `docker`.
3. Push to `dev` or `main` branch. GitHub Actions will publish and redeploy automatically.
