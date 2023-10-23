# ABOUT REPOSITORY
This GitHub repository hosts the backend component of a user management application built with Typescript and Node.js(Express.js).

## INSTALLING
```bash
npm i express  
npm install -g typescript
npm i sequelize
npm install ts-node --save-dev
npm install --save @types/node
```

## SETTING UP DATABASE
For your application to function correctly, you need to create a database and configure its connection details in the .env file. Make sure to provide the appropriate database connection settings in your environment file.

## DATABASE SEEDING
To populate your database with initial data, you can uncomment the createUsers() function call in the index.ts file. After seeding the database, be sure to comment it out again to avoid reseeding on subsequent application launches.

## STARTING APP
```bash
npm run dev
```

