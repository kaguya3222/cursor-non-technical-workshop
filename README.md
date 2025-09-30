# FlavorFlow

A modern recipe management application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Code Quality**: Biome.js for linting and formatting
- **Package Manager**: pnpm
- **Node Version**: 22.17.0

## Prerequisites

1. **nvm (Node Version Manager)**
   - Install from: https://github.com/nvm-sh/nvm
   - macOS/Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
   - Windows: Install nvm-windows from https://github.com/coreybutler/nvm-windows
   - Verify installation: `nvm --version`

2. **Node.js 22.17.0**
   - Use nvm: `nvm install` (automatically reads from `.nvmrc` file)
   - Or install specific version: `nvm install 22.17.0 && nvm use 22.17.0`
   - Verify installation: `node --version`

3. **pnpm (Package Manager)**
   - Install globally: `npm install -g pnpm`
   - Verify installation: `pnpm --version`

4. **Git**
   - Verify installation: `git --version`

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd flavorflow
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

   This downloads all the code libraries the project needs to work.

3. Start the development server:

   ```bash
   pnpm dev
   ```

   This starts the app on your computer so you can see it in your browser.

4. Open your browser and navigate to `http://localhost:5173`
