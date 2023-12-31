/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  NODE_ENV = "production",
  DATABASE_URL = "postgres://tyhpxxtt:kppwFEbqBW66mdoiwZNI_uwmUgB9OwvP@berry.db.elephantsql.com/tyhpxxtt",
  DATABASE_URL_DEVELOPMENT = "postgres://gjnhmrob:D3GN88IgioUsDiiguwPjBScGpGCP5i8P@berry.db.elephantsql.com/gjnhmrob",
  DATABASE_URL_TEST = "postgres://brxgzbsn:QhGBeFgYjJHFwihc0_2bB2WsP0kVTz2f@berry.db.elephantsql.com/brxgzbsn",
  DATABASE_URL_PREVIEW = "postgres://pmkrpktu:Bc19jFQSpoP2lyApZGNmtz5KJy1Yn7qT@berry.db.elephantsql.com/pmkrpktu",
  DEBUG,
  } = process.env;

  const URL =
  NODE_ENV === "production"
    ? DATABASE_URL
    : DATABASE_URL_DEVELOPMENT;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
