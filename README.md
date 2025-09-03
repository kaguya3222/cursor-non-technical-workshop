# FlavorFlow

A modern recipe management application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Code Quality**: Biome.js for linting and formatting
- **Package Manager**: pnpm
- **Node Version**: 22.17.0

## Getting Started

### Prerequisites

- Node.js 22.17.0 (use nvm: `nvm use`)
- pnpm package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd flavorflow
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run linter
- `pnpm lint:fix` - Run linter and fix issues
- `pnpm format` - Format code

## Project Structure

```
src/
├── utils/              # Utility functions (to be added)
│   └── index.ts
├── styles/             # CSS files
│   └── main.css
├── App.tsx             # Main App component
└── main.tsx            # Application entry point
```

### Directories to be created as needed:

- `components/` - Reusable UI components
- `hooks/` - Custom React hooks
- `types/` - TypeScript type definitions
- `pages/` - Page components (if using routing)

## Development

### Code Quality

This project uses Biome.js for consistent code formatting and linting:

- **Formatting**: 2-space indentation, double quotes, semicolons as needed
- **Linting**: Strict TypeScript rules with React best practices
- **Import Organization**: Automatic import sorting

### Adding New Features

1. Create directories as needed (`components/`, `hooks/`, `types/`, etc.)
2. Add TypeScript type definitions
3. Create utility functions in `src/utils/`
4. Build custom React hooks for state management
5. Create reusable UI components
6. Update the main App component

## Future Enhancements

- Recipe categories
- Cooking instructions
- Ingredient lists
- Recipe sharing
- Import/export functionality
- Recipe images upload
- Nutritional information
- Cooking timers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm lint:fix` and `pnpm format`
5. Commit your changes
6. Push to your branch
7. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
