# Before Day 1 Setup

## Verified locally

- Git: `2.50.1`
- Node.js: `v26.0.0` (meets the Node.js 22 LTS or newer requirement)
- Docker CLI: `29.6.2`
- VS Code is installed (`code` command is available).
- Google Chrome is installed.
- PostgreSQL 17 training container: `pg-training`, mapped to `localhost:5433`; `pg_isready` reports that it is accepting connections.
- MongoDB 7 training container: `mongo-training`, mapped to `localhost:27018`; `mongosh` ping check succeeds.

## Needs GitHub access

- A GitHub CLI account is configured as `yaswanth211825`, but its saved token is invalid. The account must be re-authenticated before creating the public training repo or board.
- After the training repo is created, add the reporting manager and other intern as collaborators. Their GitHub handles are not recorded here yet.

## Start here to resume setup

1. Re-authenticate the GitHub CLI with `gh auth login -h github.com`.
2. Create the public repository `yaswanth211825-training` as the Day 1 first exercise.
3. Add the reporting manager and other intern as collaborators so they can review pull requests.

The two database containers can be stopped with `docker stop pg-training mongo-training` when the training environment is no longer needed.
