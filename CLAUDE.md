# VehicleLog Claude Code Guide

## Project purpose

VehicleLog is an automotive logging application under active foundation setup. The current repository contains only the monorepo development baseline and a minimal health-check flow between the Ionic frontend and Laravel API.

## Repository structure

- `backend/`: Laravel 13 REST API
- `frontend/`: Ionic Angular 22 application
- `.devcontainer/`: Docker-based VS Code development environment
- `.github/workflows/`: CI definitions
- `.claude/agents/`: project-specific Claude Code agents
- `.claude/agent-memory/`: durable, non-secret project memory areas
- `docs/`: supporting project documentation

## Technology stack

- Laravel 13 on PHP 8.3+
- MySQL 8.4
- Ionic + Angular 22
- TypeScript strict mode
- Angular standalone components and Signals
- Docker Compose and VS Code Dev Containers

## Development workflow

1. Read this file before making changes.
2. Inspect the existing repository and follow established patterns.
3. State a plan before substantial edits.
4. Keep changes scoped to the requested feature.
5. Verify linting, builds, tests, and any changed runtime flows before completion.
6. Update documentation when architecture or conventions change.

## Docker and Dev Container usage

- The project is designed to run entirely inside Docker containers.
- Use the `app` service for PHP, Composer, Node.js, Angular CLI, and Ionic CLI work.
- Use the `mysql` service for local development data.
- Backend development URL: `http://localhost:8000`
- Frontend development URL: `http://localhost:8100`
- API base URL: `http://localhost:8000/api/v1`

## Angular / Ionic conventions

- Use standalone Angular components for new UI code.
- Use Angular Signals for component-local state.
- Prefer modern Angular template control flow such as `@if` and `@for`.
- Use strict TypeScript and avoid `any` unless absolutely necessary.
- Use Ionic components when they improve the mobile-first experience.
- Keep the VehicleLog visual language modern, premium, automotive, technical, and clean.

## Laravel conventions

- Keep the backend API-focused and JSON-first.
- Place versioned API controllers under `App\Http\Controllers\Api\V1`.
- Place future versioned form requests under `App\Http\Requests\Api\V1`.
- Use environment-driven configuration.
- Keep validation strict and centered in Laravel request validation.

## API conventions

- Use `/api/v1/...` routes for application APIs.
- The Laravel backend is the source of truth for business logic and persisted data.
- Frontend services should use typed request/response models and environment-based API URLs.
- Handle loading, success, empty, validation error, server error, and network error states consistently.

## Testing requirements

- Backend changes should run relevant `php artisan test` coverage and `./vendor/bin/pint --test`.
- Frontend changes should run the relevant `npm run lint`, `npm run build`, and targeted unit tests where present.
- Manual runtime verification is required for server and UI flows touched by the change.

## Agent responsibilities

- `ui-designer`: UI/UX direction, layouts, responsive design, Ionic component choice, prototypes, accessibility, and visual consistency.
- `frontend-coder`: Angular/Ionic implementation, Signals, routing, forms, API integration, tests, and frontend verification.
- Main or future backend-focused workflows: Laravel controllers, requests, migrations, database changes, and API behavior.

## Feature-driven development

VehicleLog is built feature-by-feature. A single feature may change Laravel, Angular, MySQL, tests, and documentation together. Do not treat backend, frontend, or database as separate product phases.

## Agent memory

Use `.claude/agent-memory/` only for stable, project-specific knowledge such as established UI patterns, API integration conventions, reusable components, or recurring implementation lessons. Never store secrets, credentials, or temporary task notes there.
