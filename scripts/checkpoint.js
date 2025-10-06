#!/usr/bin/env node

import { execSync } from "child_process";

// Define all checkpoints with their actual commit SHAs
const CHECKPOINTS = {
  0: {
    sha: "main",
    name: "Starting Point",
    description: "Current state of main branch - where you begin",
  },
  1: {
    sha: "eabd43b08ff97241b75f7f6c96e681148349517",
    name: "Empty Screen",
    description: "Empty state when no recipes exist yet",
  },
  2: {
    sha: "103aa9759b9f73451fbd7c942691d843770c4d16",
    name: "Add Recipe Modal",
    description: "Modal for creating new recipes",
  },
  3: {
    sha: "38d7bbb9b8ca147cf1b3f11aa3ac761824ea7cca",
    name: "Recipes List",
    description: "Display saved recipes in a list",
  },
  4: {
    sha: "e700c75911d3110b2b9bea93865d54b173109f60",
    name: "Permanent Storage",
    description: "Recipes saved permanently using localStorage",
  },
  5: {
    sha: "80232c6fb5cb490e51074c474473a8a28dfeafc0",
    name: "Search Feature",
    description: "Working search functionality",
  },
};

function execute(command) {
  try {
    return execSync(command, { encoding: "utf8", stdio: "pipe" });
  } catch (error) {
    return null;
  }
}

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
    "⚠️  Note: Switching checkpoints will discard any unsaved changes!\n"
  );
}

function checkoutCheckpoint(number) {
  const checkpoint = CHECKPOINTS[number];

  if (!checkpoint) {
    console.error(`\n❌ Error: Checkpoint ${number} doesn't exist.`);
    console.error("Available checkpoints: 0, 1, 2, 3, 4, 5");
    console.error('Run "pnpm checkpoint list" to see all options.\n');
    process.exit(1);
  }

  console.log(`\n🚀 Switching to Checkpoint ${number}: ${checkpoint.name}`);
  console.log(`   ${checkpoint.description}\n`);

  try {
    // Force checkout to discard any local changes
    if (checkpoint.sha === "main") {
      execSync("git checkout -f main", { stdio: "inherit" });
    } else {
      execSync(`git checkout -f ${checkpoint.sha}`, { stdio: "inherit" });
    }

    // Reinstall dependencies in case they changed
    console.log("\n📦 Reinstalling dependencies...\n");
    execSync("pnpm install", { stdio: "inherit" });

    console.log(`\n✅ Successfully switched to checkpoint ${number}!`);
    console.log(
      `\n💡 Next step: Run "pnpm dev" to see the app at this stage.\n`
    );

    if (number !== "0") {
      console.log('ℹ️  You are now in "detached HEAD" state - this is normal!');
      console.log("   Feel free to experiment. Your changes will be discarded");
      console.log("   when you switch to another checkpoint.\n");
    }
  } catch (error) {
    console.error("\n❌ Error switching checkpoints.");
    console.error('Make sure you have run "git fetch" to get all commits.\n');
    process.exit(1);
  }
}

// Main logic
const command = process.argv[2];

if (!command || command === "list") {
  listCheckpoints();
} else if (command.match(/^[0-5]$/)) {
  checkoutCheckpoint(command);
} else {
  console.error(`\n❌ Invalid checkpoint: ${command}`);
  console.error('Run "pnpm checkpoint list" to see available checkpoints.\n');
  process.exit(1);
}
