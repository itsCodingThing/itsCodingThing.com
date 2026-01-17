# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Project Overview

This is a Next.js 16 terminal-style portfolio website built with TypeScript, React, and Tailwind CSS. The project simulates a command-line interface where users can explore portfolio content through terminal commands.

## Development Commands

### Core Commands

- `npm run dev` - Start development server with Turbo (recommended for development)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Testing

This project currently does not have a test framework configured. When adding tests, check for existing test patterns or ask the user for preferred testing approach.

### Code Quality Tools

- **Biome**: Primary formatter (configured with tabs, double quotes)
- **ESLint**: Linting with Next.js recommended rules
- **Prettier**: Available but Biome is preferred for formatting

## Code Style Guidelines

### Formatting

- Use **tabs** for indentation (Biome configuration)
- Use **double quotes** for strings and object properties
- Follow Biome formatting rules over Prettier when conflicts occur
- Run `npx @biomejs/biome check --write .` to auto-format files

### TypeScript Configuration

- Strict mode enabled
- Target ES2017
- React JSX transform
- Path alias: `@/*` maps to `./src/*`

### Import Organization

- Group imports: React/Next.js → third-party → local modules
- Use absolute imports with `@/` prefix for local modules
- Example order:
  ```typescript
  import type { Metadata } from "next";
  import { useRef, useEffect } from "react";
  import TerminalInput from "./terminal-input";
  import { fileSystem } from "@/utils/file-system";
  ```

### Component Patterns

- Use functional components with React hooks
- Client components: Add `"use client";` directive at top
- Export components as default: `export default function ComponentName()`
- Use TypeScript interfaces for props and data structures
- Component files use kebab-case: `terminal-input.tsx`

### State Management

- **Jotai** is used for global state management
- Create atoms with `atom()` function
- Use `useAtom()` hook for accessing state
- Example: `const [input, setInput] = useAtom(inputAtom);`

### Styling Guidelines

- **Tailwind CSS** v4 with custom configuration
- Use utility classes for styling
- Responsive design with mobile-first approach
- Terminal theme: black background, green/gray text
- Custom CSS variables in `src/styles/tailwind.css` for animations

### File Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/             # React components
│   ├── terminal-input.tsx # Terminal input component
│   ├── terminal.tsx       # Main terminal component
│   └── terminal-ouput-history.tsx # Output history component
├── hooks/                  # Custom React hooks
│   └── use-terminal.ts    # Terminal logic hook
├── styles/                 # CSS and Tailwind files
│   ├── tailwind.css       # Tailwind CSS configuration
│   └── style.css          # Global styles
└── utils/                  # Utility functions and data
    ├── cmds.ts            # Command definitions and parsing
    ├── file-system.ts     # File system simulation
    ├── text.ts            # Static text content
    └── register-styled-components.js # Styled components setup
public/
├── assets/
│   ├── tech/              # Technology stack icons
│   ├── social/            # Social media icons
│   └── [profile-images]   # Personal and placeholder images
```

### Naming Conventions

- **Components**: PascalCase (e.g., `TerminalInput`)
- **Files**: kebab-case (e.g., `terminal-input.tsx`)
- **Variables/Functions**: camelCase (e.g., `executeCmd`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `AvailableCmds`)
- **Interfaces**: PascalCase with descriptive names (e.g., `CommandHistory`)

### Error Handling

- Use TypeScript for compile-time type safety
- Validate command inputs in `parseCommand` function
- Handle unknown commands gracefully in terminal
- Use Zod for runtime validation when needed

### Terminal-Specific Patterns

- Commands are defined in `AvailableCmds` array
- Use `parseCommand` utility for command parsing
- Command history managed with Jotai atoms
- File system simulation in `utils/file-system.ts`
- Terminal output types: "success" | "error" | "info"

## Dependencies

### Key Libraries

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Styling
- **Jotai**: State management
- **Framer Motion**: Animations
- **Zod**: Schema validation
- **Firebase**: Backend services
- **Octokit**: GitHub API client
- **React Icons**: Icon library
- **Styled Components**: CSS-in-JS styling
- **@uidotdev/usehooks**: Custom React hooks

### Development Tools

- **Biome**: Formatting and linting
- **ESLint**: Code quality
- **Prettier**: Code formatting (secondary)

## Best Practices

1. **Type Safety**: Always use TypeScript interfaces for data structures
2. **Component Composition**: Build small, reusable components
3. **State Management**: Use Jotai atoms for shared state
4. **Performance**: Leverage Next.js optimizations and React.memo when needed
5. **Accessibility**: Ensure terminal interface is keyboard-navigable
6. **Mobile-First**: Design responsive layouts with Tailwind breakpoints

## Common Tasks

### Adding New Terminal Commands

1. Add command to `AvailableCmds` array in `utils/cmds.ts`
2. Implement command logic in `useTerminal` hook
3. Add any required text content to `utils/text.ts`
4. Update file system if command interacts with files

### Creating New Components

1. Use functional component pattern with TypeScript
2. Add `"use client";` if using hooks or browser APIs
3. Import and export consistently
4. Follow naming conventions
5. Use Tailwind for styling

### State Management

1. Create atoms in appropriate hook files
2. Use `useAtom` for accessing state
3. Keep state close to where it's used
4. Consider performance implications

## Notes

- This is a static site portfolio with terminal interface
- Focus on user experience and interactive command responses
- Maintain consistency with terminal theme and behavior
- Test commands thoroughly before deployment
