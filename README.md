## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
ORM: TypeORM
DB: MySQL

## Prerequisites

Please make sure that Node.js (version >= 12, except for v13) is installed on your operating system.
Yarn

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

```

Don't forget to copy .env.example file and fill up with your DB connection and your secrets

## Docker

Run docker-compose up -d to setup local environment with Docker

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Migrations

```bash
# migration generate
$ yarn migration:generate BaseMigrations

# up migration
$ yarn migration:run

# revert migration
$ yarn migration:revert
```

## TODO

Content:

- Cart information stored in session

Ideas:

- add Redis support

