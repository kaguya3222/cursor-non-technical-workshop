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

2. **Node.js 22.17.0**
   
   **MacOS:**
   ```bash
   # Download and install nvm:
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
   
   # In lieu of restarting the shell:
   \. "$HOME/.nvm/nvm.sh"
   
   # Download and install Node.js:
   nvm install 22
   
   # Verify the Node.js version:
   node -v # Should print "v22.17.0".
   
   # Verify npm version:
   npm -v # Should print "10.9.3".
   ```
   This downloads and installs nvm (Node Version Manager), then uses it to install Node.js version 22 (which will get the latest 22.x version, currently 22.17.0). The verification commands confirm everything is working correctly.
   
   **Windows:**
   ```bash
   # Download and install Chocolatey:
   powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
   
   # Download and install Node.js:
   choco install nodejs --version="22.17.0"
   
   # Verify the Node.js version:
   node -v # Should print "v22.17.0".
   
   # Verify npm version:
   npm -v # Should print "10.9.3".
   ```
   This installs Chocolatey (a package manager for Windows), then uses it to install Node.js version 22.17.0. The verification commands confirm everything is working correctly.

3. **pnpm (Package Manager)**
   
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
