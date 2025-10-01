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

1. **Git**
   
   **MacOS:**
   ```bash
   # Option A: Trigger automatic installation
   git --version
   ```
   This checks if Git is installed. If not, MacOS will prompt you to install it.
   
   ```bash
   # Option B: Install via Homebrew (gets latest version)
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   brew install git
   ```
   This installs Homebrew first, then uses it to install Git.
   
   **Windows:**
   ```bash
   winget install --id Git.Git -e --source winget
   ```
   This uses Windows' built-in package manager (winget) to download and install Git automatically. Winget comes pre-installed on Windows 10 and 11, so no setup needed!
   
   **Verify installation (both MacOS and Windows):**
   ```bash
   git --version
   ```
   This shows you which version of Git is installed.

2. **nvm (Node Version Manager)**
   
   **MacOS/Linux:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
   ```
   This downloads and installs nvm, which helps you manage different Node.js versions.
   
   **Windows:**
   ```bash
   winget install CoreyButler.NVMforWindows
   ```
   This uses winget to install nvm-windows automatically. After installation, close and reopen your terminal for nvm to work.
   
   **Verify installation (both MacOS and Windows):**
   ```bash
   nvm --version
   ```
   This confirms nvm is installed correctly.

3. **Node.js 22.17.0**
   
   **MacOS:**
   ```bash
   nvm install 22.17.0
   nvm use 22.17.0
   ```
   This installs Node.js version 22.17.0 and sets it as the active version.
   
   **Windows:**
   ```bash
   nvm install 22.17.0
   nvm use 22.17.0
   ```
   This installs Node.js version 22.17.0 and sets it as the active version.
   
   **Verify installation (both MacOS and Windows):**
   ```bash
   node --version
   ```
   This confirms Node.js is installed and shows the version number.

4. **pnpm (Package Manager)**
   
   **MacOS:**
   ```bash
   npm install -g pnpm
   ```
   This installs pnpm globally so you can use it anywhere on your computer.
   
   **Windows:**
   ```bash
   npm install -g pnpm
   ```
   This installs pnpm globally so you can use it anywhere on your computer.
   
   **Verify installation (both MacOS and Windows):**
   ```bash
   pnpm --version
   ```
   This confirms pnpm is installed correctly.

## Installation

1. Clone the repository:

   **MacOS:**
   ```bash
   git clone <repository-url>
   cd flavorflow
   ```
   This downloads the project from GitHub and opens the project folder.
   
   **Windows:**
   ```bash
   git clone <repository-url>
   cd flavorflow
   ```
   This downloads the project from GitHub and opens the project folder.

2. Install dependencies:

   **MacOS:**
   ```bash
   pnpm install
   ```
   This downloads all the code libraries the project needs to work.
   
   **Windows:**
   ```bash
   pnpm install
   ```
   This downloads all the code libraries the project needs to work.

3. Start the development server:

   **MacOS:**
   ```bash
   pnpm dev
   ```
   This starts the app on your computer so you can see it in your browser.
   
   **Windows:**
   ```bash
   pnpm dev
   ```
   This starts the app on your computer so you can see it in your browser.

4. Open your browser and navigate to `http://localhost:5173`
