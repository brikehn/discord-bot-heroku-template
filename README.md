## Setup

### Create a bot application

Discord.js has a guide on how to set one up: https://discordjs.guide/preparations/setting-up-a-bot-application.html

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

## Deploy

Create a new [heroku app](https://dashboard.heroku.com/apps)

![image](https://user-images.githubusercontent.com/44129391/162097411-7fa68768-4725-4f69-b3fb-b6db2dcc6845.png)

In the 'Settings' tab, add these in your 'Config Vars'

![image](https://user-images.githubusercontent.com/44129391/162097632-055d1547-f129-4275-9b85-3daf2680e2f7.png)

In the 'Deploy' tab, easiest way to get up and running is to deploy by connecting with GitHub.

Once you've deployed, go to the resources tab and configure your Dynos like this:

![image](https://user-images.githubusercontent.com/44129391/162097539-2201f56e-33dd-45ef-baec-4d927bc813a2.png)

If you've set up everything correctly, at this point you should be able to invite your Discord bot the any server that you manage!
