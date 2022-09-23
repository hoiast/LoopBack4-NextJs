This is a [LoopBack 4](https://loopback.io/) project bootstrapped with [`LoopBack 4 CLI`](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html)..

## Install Dependencies

```bash
npm install
```

## Start PostgreSQL Server

This project uses PostgreSQL as datasource. Please initialize a server and create a database. This project was developed using **PostgreSQL v14.5**.

Default details for host, port, database name and credentials may be found in:

```bash
/src/datasources/postgre-db.datasource.ts
```

## Run Migrations

To create tables and insert some seed data, please run:

```bash
npm run migrate -- --rebuild
```

You may found seeding data on _migrateSchema_ at:

```bash
/src/application.ts
```

## Run Application

```sh
npm start
```

Open http://127.0.0.1:3000 in your browser.

## Linting

```sh
npm run lint
```
