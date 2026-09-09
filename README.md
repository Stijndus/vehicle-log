# VehicleLog

VehicleLog is a Docker-first monorepo for an automotive logging application. This repository currently contains only the development foundation: a Laravel API backend, an Ionic + Angular frontend, Docker tooling, a VS Code Dev Container, CI configuration, and Claude Code agent guidance.

No product features are implemented yet. VehicleLog will be built feature-by-feature, with backend, frontend, database, tests, and documentation evolving together in each feature.

## Project structure

```text
vehicle-log/
├── .claude/                # Claude Code project agents and agent memory structure
├── .devcontainer/          # VS Code Dev Container configuration
├── .github/workflows/      # GitHub Actions CI
├── backend/                # Laravel 13 REST API
├── docs/                   # Project documentation space
├── frontend/               # Ionic Angular 22 application
├── docker-compose.yml      # Development services
├── CLAUDE.md               # Project instructions for Claude Code agents
└── README.md               # Setup guide
```

## Technology stack

- Backend: Laravel 13, PHP 8.3+, MySQL 8.4, Composer
- Frontend: Ionic, Angular 22, TypeScript, standalone components, Signals
- Development: Docker, Docker Compose, VS Code Dev Containers, GitHub Actions

## Required host software

On Windows, install only:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/)
- VS Code **Dev Containers** extension
- Git

You do **not** need to install PHP, Composer, Node.js, npm, Angular CLI, Ionic CLI, MySQL, Apache, or WSL on the host machine.

## Open the project in VS Code

1. Clone the repository.
2. Open the repository folder in VS Code.
3. When prompted, choose **Reopen in Container**.
   - Or run `Dev Containers: Reopen in Container` from the command palette.
4. Wait for the container to finish installing backend and frontend dependencies.

## Start the development environment

From the Dev Container terminal:

1. Create the Laravel environment file if it does not exist:

   ```bash
   cd /workspace/backend
   cp .env.example .env
   php artisan key:generate
   ```

2. Start the Laravel API:

   ```bash
   cd /workspace/backend
   php artisan serve --host=0.0.0.0 --port=8000
   ```

3. In a second terminal, start the Ionic frontend:

   ```bash
   cd /workspace/frontend
   ionic serve --host=0.0.0.0 --port=8100 --no-open
   ```

Docker Compose starts MySQL automatically for the Dev Container.

## Application URLs

- Backend: http://localhost:8000
- Backend API base: http://localhost:8000/api/v1
- Health endpoint: http://localhost:8000/api/v1/health
- Frontend: http://localhost:8100

## Database configuration

Laravel uses environment variables from `backend/.env`.

Default development values:

```env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=vehicle_log
DB_USERNAME=vehicle_log
DB_PASSWORD=vehicle_log
```

Docker Compose provisions MySQL 8.4 with persistent storage through the `mysql-data` volume.

## Useful Docker commands

```bash
# Start the app container and MySQL
cd /workspace
docker compose up -d

# Stop containers
docker compose down

# Rebuild the dev container image
docker compose build app

# Open a shell in the app container
docker compose exec app bash

# View MySQL logs
docker compose logs mysql
```

> These commands work from the Dev Container terminal or from a host terminal opened at the repository root.

## Useful Laravel commands

```bash
cd /workspace/backend
composer install --prefer-source --no-cache --no-interaction
php artisan key:generate
php artisan migrate
php artisan test
./vendor/bin/pint
php artisan route:list
```

## Useful Angular / Ionic commands

```bash
cd /workspace/frontend
npm install
ionic serve --host=0.0.0.0 --port=8100 --no-open
npm run build
npm run lint
npm test -- --watch=false
npx cap sync
```

## Development philosophy

VehicleLog is developed feature-by-feature.

Each future feature is expected to evolve the full stack together as needed, including:

- MySQL schema changes
- Laravel models, requests, controllers, and API routes
- Angular services, components, and Ionic UI
- tests
- documentation

There are no separate frontend-only, backend-only, or database-only product phases for the application itself.

## Backend foundation

The backend is a clean Laravel 13 API foundation with:

- MySQL-ready environment configuration
- API routing prepared for `/api/v1/...`
- JSON error rendering for API requests
- CORS configuration for the frontend dev server
- a health endpoint at `GET /api/v1/health`
- PHPUnit-based testing and Laravel Pint formatting

## Frontend foundation

The frontend is a clean Ionic Angular foundation with:

- Angular 22 standalone components
- Angular Signals for local page state
- strict TypeScript configuration
- Ionic UI components
- environment-based API configuration
- a placeholder home screen that calls the Laravel health endpoint

## CI

GitHub Actions verifies:

- backend Composer install
- backend tests
- backend Pint formatting
- frontend `npm ci`
- frontend linting
- frontend build

## Claude Code agents

Project-specific Claude Code guidance lives in:

- `CLAUDE.md`
- `.claude/agents/ui-designer.md`
- `.claude/agents/frontend-coder.md`
- `.claude/agent-memory/`
