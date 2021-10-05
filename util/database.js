/*
This file is node.js NOT next.js. fs is also from node.js.
Node.js WILL NEVER show up in the frontend
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

import fs from 'node:fs';

console.log('filesystem', fs);
// obere Zeilen mit fs enkommentieren wenn ich weiterarbeiten möchte

/*
This is the database that is used by the frontend
Database name: e_commerce_db
User name is the same
Password is the same
*/
export const arsenal = [
  { id: '1', name: 'Gladius' },
  { id: '2', name: 'Scutum' },
];
