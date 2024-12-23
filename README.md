Carpooling web app used at [DHBW Lörrach](https://www.dhbw-loerrach.de).

Tech stack:

- [Next.js](https://nextjs.org/) (frontend/backend)
- [SQLite](https://sqlite.org) database
- [Prisma](https://www.prisma.io/) as ORM
- [shadcn/ui](https://ui.shadcn.com) components

After cloning the repo and installing dependencies (`npm install`) follow these steps to run the app:

- Create `.env` and specify where SQLite should store its data, e.g. `DATABASE_URL="file:./dev.db"`
- Run `npx prisma db push` to create the SQLite database file (e.g. `./prisma/dev.db`) and to load the schema into it
- `npm run dev` to start the development server.

The app will be available at [http://localhost:3000](http://localhost:3000) where you can sign up with a new user which is stored locally. To inspect the SQLite database, you can use Prisma studio by running `npx prisma studio` and opening [http://localhost:5555](http://localhost:5555).

## Deployment with Docker

This involves building the docker image locally, pushing it to GitHub Container registry (ghcr.io) and pulling the image in the server.

### Create Personal Access Tokens (PAT) on GitHub

- Settings ➔ Developer settings ➔ Personal access tokens ➔ Tokens (classic) ➔ Generate new token (classic)
  - PAT for dev: `carpooling-push` with `write:packages` scope.
  - PAT for server: `carpooling-docker` with `read:packages` scope.

### Build and push image

- `docker build . --platform linux/amd64 -t ghcr.io/dhbwloerrach/carpooling:latest`
- `docker login ghcr.io` with PAT `carpooling-push` as password
- `docker push ghcr.io/dhbwloerrach/carpooling:latest`
- Verify that the new package landed in https://github.com/orgs/DHBWLoerrach/packages/container/package/carpooling
- (Occasionly remove obsolete versions.)

### Deploy on server (WIP)

- Set environment variable `GHCR_PAT` to contain server PAT
- Execute deployment script
