## Setup

### Set your environment variables

Copy `.env.example` to set the required environment variables

```sh
cp .env.example .env
```

### Create your Prisma database schema (optional)

Follow the [guide in Prisma's documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgres#creating-the-database-schema) to set up your database

### Add your commands

Commands go in `src/commands`. Each command should have it's own file and then be added to `_CommandList.ts`

## Usage

Install dependencies

```
yarn install
```

Run the development environment

```
yarn dev
```

There's other scripts but you shouldn't really need them.

Learn more about cool stuff you can do with a Discord bot here: [Discord.js](https://discordjs.guide/)
