# Omkar Portfolio Website

Personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and a modular component/data structure.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- ESLint 9
- Vitest + Testing Library
- Husky + lint-staged

## Project Structure

- `app/`: App Router entry files and global styles
- `components/portfolio/`: Portfolio UI component and unit tests
- `data/`: Structured portfolio data (skills, experience, projects)
- `test/`: Shared test setup

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality Checks

```bash
npm run lint
npm run test:run
npm run build
```

Pre-commit checks are enabled with Husky and run:

- `lint-staged` (ESLint on staged JS/TS files)
- `npm run test:run`

## Customize Content

Update portfolio content in `data/portfolio.ts`.

UI layout and styling live in `components/portfolio/omkar-portfolio.tsx`.
