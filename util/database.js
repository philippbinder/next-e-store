/*
Node.js
This file is node.js NOT next.js. fs is also from node.js.
Node.js WILL NEVER show up in the frontend

Postgres
- to start postgres write the command postgres (in the second terminal)
- Command "psql -U postgres" to connect to Postgres via psql. "It tries to connect to a database called postgres, which is the only database that exist when you first start ... default database that has some connection information etc." => create a new database connected to the current project
- psql -U userName is the command in the terminal (of VS) to set up PostrgeSQL Database on Windows. PW: postgres
- Once you have connected, run the following to create the database:
  CREATE DATABASE <database name>;
  CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
  GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
- Then, to connect to the database using this new user, quit psql and reconnect:
\q
psql -U <user name> <database name>
https://github.com/upleveled/next-js-example-sep-2021/blob/master/README.md
*/

// import fs from 'node:fs';

import dotenvSafe from 'dotenv-safe';
// dotenv for connecting to the database properly
// this will get the environment variables from .env
import postgres from 'postgres';

// Read in the environment variables
// in the .env file, making it possible
// to connect to PostgreSQL
// calls the function to get the .env Inhalt
// https://www.npmjs.com/package/dotenv
dotenvSafe.config(); // needs to be before postgres

// Connect to PostgreSQL
const sql = postgres();

// Add a query to get all the items of the arsenal back
// in order to get some information back from the databse we need to run a function first- we don't want to just export the data itself from this file, we want to export a function that gets the data
// no parameters because I want all the items in the database, not just one
// https://www.youtube.com/watch?v=aUduAiJTgcA&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=41 20:49
export async function getArsenal() {
  const arsenal = await sql`
    SELECT * FROM arsenal;
    `;
  console.log('arsenal', arsenal);

  return arsenal;
}

// could the const arsenal have any name, if so, it's only a placeholder name
export async function getItem(id) {
  const arsenal = await sql`
    SELECT
    *
    FROM
      arsenal
    WHERE
      id = ${id}
  `;
  const singleItem = arsenal[0];
  // console.log('arsenal', arsenal);
  console.log(singleItem);
  return singleItem;
}

// console.log('filesystem', fs);
// obere Zeilen mit fs enkommentieren wenn ich weiterarbeiten m??chte

/*
This is the database that is used by the frontend
Database name: e_commerce_db
User name is the same
Password is the same
*/

// Show all tables: \dt

// Create new item in table
// INSERT INTO arsenal
//   (id, name)
// VALUES
//   (1, 'Gladius');

// Retrieve all details from all items
// SELECT * FROM arsenal;

// Modify table with NOT NULL
// 1.
// Modify table without NOT NULL (could stop at this point if I don't need the NOT NULL contraint)
// ALTER TABLE arsenal
// ADD COLUMN item_type VARCHAR;
// 2.
// => update values, siehe unten
// 3.
// Set NOT NULL constraint
// ALTER TABLE arsenal
// ALTER COLUMN item_type SET NOT NULL;

// Modify User name with id matching 1
// UPDATE arsenal
// SET item_type = 'Shield'
// WHERE id = 2;

// yarn add dotenv-safe and make a new file .env and .env.example. The 2nd one will be commited to github, the 1st one not. Sinn des Ganzen? To connect to database as user of the web page?
// add .env to gitignore under # local env files!!!
// same link at 1:08:30
// dotenv is for enviroment variables
// export const arsenal = [
//   { id: '1', name: 'Gladius' },
//   { id: '2', name: 'Scutum' },
// ];

// Was war nochmal env und dotenv-safe?
// Was macht Karl nun mit der sql const?
