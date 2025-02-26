Tech stack:

- [Next.js](https://nextjs.org/) (frontend/backend)
- [Lucia](https://lucia-auth.com) (authentication)
- [SQLite](https://sqlite.org) database
- [Prisma](https://www.prisma.io/) as ORM
- [shadcn/ui](https://ui.shadcn.com) components

After cloning the repo and installing dependencies (`npm install`) follow these steps to run the app:

- Create `.env` and specify where SQLite should store its data, e.g. `DATABASE_URL="file:./dev.db"`
- Run `npx prisma db push` to create the SQLite database file and to load the schema into it
- `npm run dev` to start the development server.

The app will be available at [http://localhost:3000](http://localhost:3000) where you can sign up with a new user which is stored locally. To inspect the SQLite database, you can use Prisma studio by running `npx prisma studio` and opening [http://localhost:5555](http://localhost:5555).
