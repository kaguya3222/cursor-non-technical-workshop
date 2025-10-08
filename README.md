# FlavorFlow

A modern recipe management application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- Frontend: React 18 with TypeScript
- Styling: Tailwind CSS v4
- Build Tool: Vite
- Code Quality: Biome.js for linting and formatting
- Package Manager: pnpm
- Node Version: 22.20.0

## Prerequisites

1. Git
   
   MacOS:
   ```bash
   # Install Homebrew first
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
   # Install Git using Homebrew
   brew install git
   ```
   This installs Homebrew (a package manager for Mac), then uses it to install Git.
   
   Windows:
   ```bash
   winget install --id Git.Git -e --source winget
   ```
   This uses Windows' built-in package manager (winget) to download and install Git automatically. Winget comes pre-installed on Windows 10 and 11, so no setup needed!
   
   Verify installation (both MacOS and Windows):
   ```bash
   git --version
   ```
   This shows you which version of Git is installed.

2. Node.js 22.20.0
   
   MacOS:
   ```bash
   # Install Node.js using Homebrew (already installed above)
   brew install node@22
   
   # Verify the Node.js version:
   node -v # Should print "v22.20.0".
   
   # Verify npm version:
   npm -v # Should print "10.9.3".
   ```
   This uses Homebrew (already installed above) to install Node.js version 22. The verification commands confirm everything is working correctly.
   
   Windows:
   ```bash
   # Download and install Chocolatey:
   powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
   
   # Download and install Node.js:
   choco install nodejs --version="22.20.0"
   ```
   This installs Chocolatey (a package manager for Windows), then uses it to install Node.js version 22.20.0.
   
   **Important: Add Node.js to your PATH**
   
   After installation, you need to tell PowerShell where to find Node.js. First, find where it was installed:
   ```powershell
   Get-ChildItem -Path C:\, D:\, E:\ -Filter "node.exe" -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1 Directory
   ```
   This searches your computer for Node.js and shows you its location (usually `C:\Program Files\nodejs`).
   
   Then add it to your PATH (replace `<path-to-nodejs>` with the actual path from above):
   ```powershell
   $env:PATH += ";<path-to-nodejs>"
   ```
   For example, if it's in `C:\Program Files\nodejs`:
   ```powershell
   $env:PATH += ";C:\Program Files\nodejs"
   ```
   This tells PowerShell where to find Node.js so you can use it.
   
   Now verify everything is working:
   ```bash
   # Verify the Node.js version:
   node -v # Should print "v22.20.0".
   
   # Verify npm version:
   npm -v # Should print "10.9.3".
   ```
   These commands confirm Node.js is installed and accessible.

3. pnpm (Package Manager)
   
   Both MacOS and Windows:
   ```bash
   corepack enable pnpm
   ```
   This enables pnpm using Node.js's built-in package manager manager (corepack). This is the recommended way to install pnpm as it's included with Node.js.
   
   Verify installation (both MacOS and Windows):
   ```bash
   pnpm --version
   ```
   This confirms pnpm is installed correctly.

## Troubleshooting

### Windows PowerShell Error

"File cannot be loaded because running scripts is disabled on this system"

If you encounter this error when running any commands, open PowerShell as Administrator and run:
```powershell
Set-ExecutionPolicy RemoteSigned -Force
```
This enables script execution while maintaining security for downloaded files.

### Manual Installation

If the automated installation commands above don't work for you, you can download and install the software manually:

1. **Git**: Visit [https://git-scm.com/downloads](https://git-scm.com/downloads) and download the installer for your operating system. Run the installer and follow the on-screen instructions.

2. **Node.js**: Visit [https://nodejs.org/en/download](https://nodejs.org/en/download) and download Node.js version 22.20.0 for your operating system. Run the installer and follow the on-screen instructions. This will also install npm automatically.

3. **pnpm**: After Node.js is installed, open your terminal (Terminal on Mac, PowerShell on Windows) and run:
   ```bash
   corepack enable pnpm
   ```
   This enables pnpm using Node.js's built-in package manager.

After manual installation, verify everything is working by running the verification commands listed in the Prerequisites section above.

## Installation

1. Install dependencies:

   MacOS:
   ```bash
   pnpm install
   ```
   This downloads all the code libraries the project needs to work.
   
   Windows:
   ```bash
   pnpm install
   ```
   This downloads all the code libraries the project needs to work.

2. Start the development server:

   MacOS:
   ```bash
   pnpm dev
   ```
   This starts the app on your computer so you can see it in your browser.
   
   Windows:
   ```bash
   pnpm dev
   ```
   This starts the app on your computer so you can see it in your browser.

3. Open your browser and navigate to http://localhost:5173