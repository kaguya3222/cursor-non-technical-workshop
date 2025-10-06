# Checkpoint System

This workshop uses a file-based checkpoint system that lets participants jump between different stages of building the FlavorFlow recipe app.

## How It Works

Instead of using git commits (which create fragile dependencies), checkpoints are stored as actual files in the `checkpoints/` directory. Each checkpoint folder contains the version of the app files for that stage.

### Structure

```
checkpoints/
├── 0/  (Starting point - main branch)
│   ├── App.tsx
│   └── App.module.css
├── 1/  (Empty screen)
│   ├── App.tsx
│   └── App.module.css
├── 2/  (Add recipe modal)
│   ├── App.tsx
│   └── App.module.css
├── 3/  (Recipes list)
│   ├── App.tsx
│   └── App.module.css
├── 4/  (Permanent storage)
│   ├── App.tsx
│   └── App.module.css
└── 5/  (Search feature)
    ├── App.tsx
    └── App.module.css
```

## Usage

### List all checkpoints:
```bash
pnpm checkpoint list
```

### Switch to a specific checkpoint:
```bash
pnpm checkpoint 0  # Starting point
pnpm checkpoint 1  # Empty screen
pnpm checkpoint 2  # Add recipe modal
pnpm checkpoint 3  # Recipes list
pnpm checkpoint 4  # Permanent storage
pnpm checkpoint 5  # Search feature
```

## What Gets Changed

When you switch checkpoints, the script:
1. Copies `App.tsx` from `checkpoints/{N}/` to `src/`
2. Copies `App.module.css` from `checkpoints/{N}/` to `src/`

**That's it!** All other files remain unchanged.

## Benefits Over Git-Based Approach

The previous git-based checkpoint system had a circular dependency problem:
- Checkpoints were git commit SHAs
- The checkpoint script needed to be in each checkpoint commit
- Updating the script required creating new commits with new SHAs
- This created an endless loop of updates

The file-based approach is:
- ✅ **Simple**: Just copy files, no git magic
- ✅ **Maintainable**: Easy to update checkpoint versions
- ✅ **Stable**: No circular dependencies or fragile SHA references
- ✅ **Transparent**: You can see exactly what each checkpoint contains

## Maintaining Checkpoints

### To update a checkpoint:

1. Make your changes to `src/App.tsx` and/or `src/App.module.css`
2. Copy the files to the checkpoint directory:
   ```bash
   cp src/App.tsx checkpoints/3/
   cp src/App.module.css checkpoints/3/
   ```
3. Commit the changes:
   ```bash
   git add checkpoints/
   git commit -m "Update checkpoint 3"
   ```

### To add a new checkpoint:

1. Create a new directory:
   ```bash
   mkdir checkpoints/6
   ```
2. Copy the files:
   ```bash
   cp src/App.tsx checkpoints/6/
   cp src/App.module.css checkpoints/6/
   ```
3. Update `scripts/checkpoint.js` to add the new checkpoint to the `CHECKPOINTS` object
4. Commit everything

## Technical Details

The checkpoint script (`scripts/checkpoint.js`) is a simple Node.js script that:
1. Takes a checkpoint number as an argument
2. Validates the checkpoint exists
3. Copies the files from `checkpoints/{N}/` to `src/`
4. Shows success messages

No git operations, no dependencies, just straightforward file copying!
