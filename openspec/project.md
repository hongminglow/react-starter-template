# Project Context

## Purpose
A modern React starter template with TypeScript, Vite, and ESLint configured for rapid development of React applications. This template provides a solid foundation for building scalable, type-safe React applications with modern tooling and best practices.

## Tech Stack
- **Frontend Framework**: React 19.1.1 with React DOM
- **Build Tool**: Rolldown-Vite 7.1.14 (custom Vite build for improved performance)
- **Language**: TypeScript 5.9.3 with strict type checking
- **Linting**: ESLint 9.36.0 with React-specific plugins
- **Compiler Enhancement**: Babel React Compiler (experimental)
- **Development Server**: Vite dev server with hot module replacement

## Project Conventions

### Code Style
- Use TypeScript for all source files (.ts, .tsx)
- Follow ESLint configuration with React hooks and refresh plugins
- Prefer functional components with React hooks
- Use PascalCase for component names, camelCase for variables/functions
- Keep components in separate files under `src/` directory

### Architecture Patterns
- Component-based architecture with React functional components
- Modern React patterns: hooks, context, suspense
- Vite-based build system for fast development and optimized production builds
- Type-safe development with comprehensive TypeScript configuration

### Testing Strategy
- Testing framework not yet configured (opportunity for enhancement)
- Should follow React Testing Library best practices when added
- Unit tests for components and utility functions
- Integration tests for user workflows

### Git Workflow
- Standard feature branch workflow
- Conventional commit messages preferred
- ESLint checks before commits
- Build validation on CI/CD

## Domain Context
This is a foundational template for React applications, suitable for:
- Single-page applications (SPAs)
- Dashboard and admin interfaces
- Modern web applications requiring TypeScript safety
- Projects needing fast development iteration with Vite

## Important Constraints
- Node.js environment required for development
- Modern browser support (ES2020+ features)
- Vite requires ES modules (`"type": "module"` in package.json)
- TypeScript strict mode enabled for maximum type safety

## External Dependencies
- React ecosystem packages from npm
- Vite build tooling and plugins
- ESLint ecosystem for code quality
- TypeScript compiler and type definitions
- No external APIs or services configured by default
