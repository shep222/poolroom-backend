// Update with your config settings.
require('dotenv').config()
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/poolroom'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};







// // Update with your config settings.
//
// module.exports = {
//
//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },
//
//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//
//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
//
// };
