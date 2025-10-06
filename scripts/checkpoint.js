#!/usr/bin/env node

import { copyFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

// Define all checkpoints
const CHECKPOINTS = {
  0: {
    name: "Starting Point",
    description: "Current state of main branch - where you begin",
  },
  1: {
    name: "Empty Screen",
    description: "Empty state when no recipes exist yet",
  },
  2: {
    name: "Add Recipe Modal",
    description: "Modal for creating new recipes",
  },
  3: {
    name: "Recipes List",
    description: "Display saved recipes in a list",
  },
  4: {
    name: "Permanent Storage",
    description: "Recipes saved permanently using localStorage",
  },
  5: {
    name: "Search Feature",
    description: "Working search functionality",
  },
};

function listCheckpoints() {
  console.log("\n📍 Available Checkpoints:\n");
  for (const [num, info] of Object.entries(CHECKPOINTS)) {
    console.log(`  ${num}. ${info.name}`);
    console.log(`     ${info.description}`);
    console.log("");
  }
  console.log("💡 Usage:");
  console.log("  pnpm checkpoint 0    - Go to starting point (main branch)");
  console.log("  pnpm checkpoint 1    - Jump to empty screen");
  console.log("  pnpm checkpoint 2    - Jump to modal implementation");
  console.log("  pnpm checkpoint 3    - Jump to list implementation");
  console.log("  pnpm checkpoint 4    - Jump to permanent storage");
  console.log("  pnpm checkpoint 5    - Jump to search feature");
  console.log("  pnpm checkpoint list - Show all checkpoints\n");
  console.log(
    "⚠️  Note: Switching checkpoints will overwrite your current code!\n"
  );
}

function switchCheckpoint(number) {
  const checkpoint = CHECKPOINTS[number];

  if (!checkpoint) {
    console.error(`\n❌ Error: Checkpoint ${number} doesn't exist.`);
    console.error("Available checkpoints: 0, 1, 2, 3, 4, 5");
    console.error('Run "pnpm checkpoint list" to see all options.\n');
    process.exit(1);
  }

  console.log(`\n🚀 Switching to Checkpoint ${number}: ${checkpoint.name}`);
  console.log(`   ${checkpoint.description}\n`);

  // Define the files to copy
  const files = ["App.tsx", "App.module.css"];
  const checkpointDir = join(projectRoot, "checkpoints", number);
  const targetDir = join(projectRoot, "src");

  // Check if checkpoint directory exists
  if (!existsSync(checkpointDir)) {
    console.error(`\n❌ Error: Checkpoint directory not found: ${checkpointDir}`);
    console.error("The checkpoint files may be missing from the repository.\n");
    process.exit(1);
  }

  try {
    // Copy each file
    for (const file of files) {
      const sourcePath = join(checkpointDir, file);
      const targetPath = join(targetDir, file);

      if (!existsSync(sourcePath)) {
        console.warn(`⚠️  Warning: File not found: ${sourcePath}, skipping...`);
        continue;
      }

      copyFileSync(sourcePath, targetPath);
      console.log(`  ✓ Copied ${file}`);
    }

    console.log(`\n✅ Successfully switched to checkpoint ${number}!`);
    console.log(
      `\n💡 Next step: Run "pnpm dev" to see the app at this stage.\n`
    );
  } catch (error) {
    console.error("\n❌ Error switching checkpoints:");
    console.error(error.message);
    process.exit(1);
  }
}

// Main logic
const command = process.argv[2];

if (!command || command === "list") {
  listCheckpoints();
} else if (command.match(/^[0-5]$/)) {
  switchCheckpoint(command);
} else {
  console.error(`\n❌ Invalid checkpoint: ${command}`);
  console.error('Run "pnpm checkpoint list" to see available checkpoints.\n');
  process.exit(1);
}