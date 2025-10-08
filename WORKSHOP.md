# 🎯 Cursor Workshop for Non Technical Professionals

Welcome! This workshop will teach you how to use Cursor to build a beautiful recipe management app called **FlavorFlow** - no coding experience required!

## 👥 Who This Workshop Is For

- Product & Project Managers
- UI/UX Designers
- Anyone who wants to build MVPs and prototypes without engineering help

## 🎓 What You'll Learn

- How to interact with Cursor to write code for you
- How to turn Figma designs into working applications
- How to iterate and improve your app through conversation

## 📋 Prerequisites

Before the workshop begins, please complete these setup steps:

### 1. Install Cursor IDE
Download and install Cursor from: https://cursor.com/download

### 2. Sign In to Cursor
1. Open Cursor IDE
2. Go to **Cursor Settings**
3. Click **Sign In**

### 3. Get AI Credits
For non-Wix attendees, make sure you have credits activated at: https://cursor.com/dashboard

(You'll receive a link to activate them)

### 4. Access Workshop Resources

Open these links - you'll need them throughout the workshop:

- **Figma Design**: https://www.figma.com/design/E3JnDjBeKGkpVWNXk6p8tz/Cursor-non-tech-workshop--FlavorFlow-?node-id=0-1&p=f&t=Xzg1ZEKTxsVmuzmL-0
- **FigJam Board** (for sharing progress): https://www.figma.com/board/hUraQ6nTpPIsxU7pjgG52s/Cursor-workshop?node-id=0-1&p=f&t=Y2j3ZVsbsOmbkSZP-0

### 5. Download the Starter Project
1. Go to: https://github.com/kaguya3222/cursor-non-technical-workshop
2. Click the green **Code** button
3. Select **Download ZIP**
4. Unzip the file to a location you can easily find

## 🚀 Stage 1: Meet Your AI Coding Partner
⏱️ **Time: 10 minutes**

**Concept**: Learn how to interact with Cursor and explore its interface

### Step 1: Open Your Project
1. Open Cursor IDE
   - **Windows users**: Right-click on Cursor and select "Run as Administrator" to ensure all features work properly
2. Click **File** → **Open Folder**
3. Select the unzipped workshop project folder

### Step 2: Explore the Interface
You'll see a file view on the left - this is the standard IDE layout engineers use.

**💡 Tip**: Press `Cmd + B` (Mac) or `Ctrl + B` (Windows) to hide/show the file sidebar

**💡 Tip**: You can zoom in/out to make text larger or smaller:
- **Zoom In**: `Cmd + =` (Mac) or `Ctrl + =` (Windows)
- **Zoom Out**: `Cmd + -` (Mac) or `Ctrl + -` (Windows)
- **Reset Zoom**: `Cmd + 0` (Mac) or `Ctrl + 0` (Windows)

### Step 3: Open the Chat
1. Look for the chat panel on the right side
2. If you don't see it, press `Cmd + L` (Mac) or `Ctrl + L` (Windows)

**This chat is your AI coding partner!** Think of it as ChatGPT or Claude, but with the ability to write and modify code.

### Step 4: Your First Interaction
In the chat, you'll see:
- **Mode selector** (Ask, Edit, Agent)
- **Model selector** (different AI models to choose from)
- **Attach buttons** (for images and files)

Let's try it out:
1. Select **Agent** mode
2. Keep the model on **Auto** (default)
3. Type: "What is this project about?"
4. Press Enter and watch the AI explore your project!

### Step 5: Try Another Question
1. Switch to **Ask** mode
2. Type: "Which technologies are used in this project?"
3. See how the AI understands your codebase!

## 📝 Stage 2: Create and Edit Files with AI
⏱️ **Time: 8 minutes**

**Concept**: Use Agent mode to create, edit, and delete files through conversation

### Task 1: Create a File
1. Make sure you're in **Agent** mode
2. Type: "Create a file called favorite-meal.md with a recipe of your favorite meal"
3. The AI will create the file for you!

### Task 2: Edit the File
1. Type: "Change the recipe to Ukrainian cuisine"
2. Notice how you can reference files by name or use **@favorite-meal.md** to tag them
3. The AI will make the changes automatically

**💡 About "Active Tab"**: If you have a file open, the AI can see it and work with it without you needing to tag it

### Task 3: Delete the File
1. Type: "Delete the favorite-meal.md file"
2. The AI will remove it for you

### 🎉 Checkpoint!
Share an emoji in the FigJam board that describes your impression so far! 

Suggestions: 😊 (enjoying), 😅 (overwhelmed), 🤔 (curious)

## 🪟 Stage 3: Unlock Agentic Window
⏱️ **Time: 5 minutes**

**Concept**: Switch to a simpler, more conversational interface

Since we're not engineers, we don't need all the technical IDE features. Cursor has a special "Agentic Window" that gives us a cleaner, chat-focused experience.

### Enable Agentic Window
1. Open **Cursor Settings**
2. Go to **Beta** section
3. Enable **Agent Window**

### Open Agentic Window
- Look for the Agent Window icon in the top-right corner of the chat
- Or press `Cmd + E` (Mac) or `Ctrl + E` (Windows)

This gives you a focused view perfect for working with AI!

## ⚙️ Stage 4: Run Your Project
⏱️ **Time: 10 minutes**

**Concept**: Let Cursor help you set up and run the application

### Step 1: Enable Claude Sonnet 4.5
Now we'll switch to a more powerful AI model for better results:

1. Open **Cursor Settings**
2. Go to **Models** section
3. Enable **Claude Sonnet 4.5**
4. In the chat, switch from **Auto** to **Claude Sonnet 4.5** in the model selector

**Why this matters**: Sonnet 4.5 is better at understanding complex tasks and writing code. We start with Auto to keep things simple, but now we want more power!

### Step 2: Install Dependencies
The project needs some software packages installed to run. Instead of figuring this out yourself, let the AI help!

Type in chat: "Install everything needed to run this project and run it @README.md"

The AI will run terminal commands for you. Don't worry - this is expected and normal!

**What's happening**: The AI is installing "dependencies" - think of them as building blocks your app needs to work.

### Step 3: Start the Application
Type: "Run the project"

The AI will start a development server, and you should see a message about opening your browser to a local address (usually `http://localhost:5173`)

### Step 4: View Your App
Open your browser and go to the address shown. You should see a basic version of FlavorFlow!

### 🎉 Checkpoint!
Share your result in FigJam!

## 🎨 Stage 5: Build Your First Screen
⏱️ **Time: 20 minutes**

**Concept**: Turn designs into reality through "vibe coding" with AI

Now the fun begins! We're going to build FlavorFlow - a beautiful app for saving food recipes!

### Step 1: Study the Design
1. Open the Figma design (link from prerequisites)
2. Look at the main screen that shows when there are no recipes yet
3. Notice the layout, colors, and components

### Step 2: Take a Screenshot
Take a screenshot of the empty state screen from Figma

### Step 3: Generate the Code
1. Make sure you're in **Agent** mode
2. Make sure **Claude Sonnet 4.5** model is selected (you enabled this in Stage 4)
3. Upload your screenshot to the chat
4. Write your own prompt describing what you want

**Example prompt:**
```
Please implement this screen for FlavorFlow. This is the empty state 
when the user hasn't added any recipes yet. Match the design in the 
screenshot.
```

5. Press Enter and watch the magic happen!

### Step 4: Iterate and Improve
The first result probably won't be perfect - **that's totally normal!** 

Keep refining with prompts like:
- "Make the spacing between elements larger"
- "Change the button color to match the design better"
- "Center the content on the page"
- "Make the text bigger"

**Pro tip**: Be specific about what you want changed!

### 🎉 Checkpoint!
Share your result in FigJam!

## 🎭 Stage 6: Build the Add Recipe Modal
⏱️ **Time: 15 minutes**

**Concept**: Turn design into an interactive popup window

Now let's add the modal (popup window) where users can add new recipes!

### Step 1: Get the Design
Take a screenshot of the modal design from Figma

### Step 2: Prompt the Agent
Upload your screenshot and describe what you need in your own words.

**Example prompt:**
```
Implement this modal for adding new recipes. It should have input 
fields for the recipe name, category, description, and image URL. 
The modal should open when clicking the "Add Recipe" button.
```

### Step 3: Iterate on the Modal UI
Refine the modal's appearance with example prompts like:
- "Make the input fields larger"
- "Add more spacing between the form fields"
- "Make the submit button more prominent"

### 🎉 Checkpoint!
Share your working modal in FigJam!

## 📚 Stage 7: Build the Recipes List
⏱️ **Time: 15 minutes**

**Concept**: Display saved recipes in a beautiful list

Now that you can add recipes, let's create a way to show them in a nice list!

### Step 1: Get the Design
Take a screenshot of the recipes list design from Figma

### Step 2: Prompt the Agent
Upload your screenshot and describe what you want in your own words.

**Example prompt:**
```
Implement what's shown on the screen. Display all saved recipes in a list. 
Note that the image and description are conditional fields - they should 
only appear if the recipe has them.
```

### Step 3: Iterate!
Make it perfect with example prompts like:
- "Add more spacing between recipe cards"
- "Make the recipe cards have a subtle shadow"
- "Show recipes in a grid layout instead of a list"

### 🎉 Checkpoint!
Share your result in FigJam!

## 💾 Stage 8: Make Recipes Permanent
⏱️ **Time: 15 minutes**

**Concept**: Save recipes so they don't disappear when you refresh

You might notice that after adding recipes, they probably disappear when you refresh the page. Let's fix this using Cursor's browser feature!

### Enable Cursor Browser
1. Open **Cursor Settings**
2. Go to **Beta** section
3. Enable **Cursor Browser**

### Use Browser to Debug and Fix
1. Open the chat
2. Look for the **Browser** toggle and enable it
3. Describe the problem you're seeing in your own words

**Example prompt:**
```
Recipes disappear when I refresh the page. Please open the browser, 
debug it and fix it so recipes are saved permanently.
```

The AI will open a browser, test your app, find the problem, and add code to save your recipes locally so they persist even after refreshing!

### Test It!
1. Add a few recipes
2. Refresh the page
3. Your recipes should still be there!

### 🎉 Checkpoint!
Share your results in FigJam!

## 🔍 Stage 9: Make the Search Work
⏱️ **Time: 10 minutes**

**Concept**: Add interactive functionality

The search bar at the top might already be working, but if it's not, let's fix that!

### Prompt the Agent
Describe what you want the search feature to do in your own words.

**Example prompt:**
```
The search bar isn't working yet. Please make it functional so users 
can search for recipes by name. The search should filter the recipes 
list in real-time as the user types.
```

### Test It!
1. Add a few different recipes
2. Try searching for them by name
3. Iterate if needed:
   - "Make the search case-insensitive"
   - "Also search in recipe categories, not just names"

### 🎉 Checkpoint!
Share your results in FigJam!

## 🎉 You Did It!

**Congratulations!** You've built a working recipe app with Cursor! 🎊

You've learned how to:
- ✅ Work with AI to write code
- ✅ Turn designs into reality
- ✅ Iterate and improve features
- ✅ Build something real from scratch

## 🎁 Bonus Challenges

**Have extra time or want to keep building at home?** Try these additional features!

### Bonus 1: Build Your Own Feature!

**Concept**: Get creative and add something unique

Now it's your turn to be creative! Choose a feature and implement it yourself:

### Feature Ideas

1. **Recipe Price**: Add a price field to track how much recipes cost to make
2. **Recipe Editing**: Allow users to edit existing recipes
3. **Drag and Drop**: Let users reorder recipes by dragging them
4. **Tags**: Add tags to recipes (e.g., "quick", "healthy", "dessert")
5. **Filtering**: Add buttons to filter recipes by category
6. **Favorites**: Let users mark favorite recipes with a star
7. **Cooking Time**: Add fields for prep time and cooking time
8. **Ingredients List**: Add a section to list ingredients
9. **Recipe Modal View**: Recipe probably will have long description, so we can add a modal view to see the full description

### Bonus 2: Deploy Your App to the Web

**Concept**: Make your app accessible to anyone on the internet

Your app currently only runs on your computer. Let's put it on the web!

#### Step 1: Ask the Agent
Ask the AI how to deploy your app in your own words.

**Example prompt:**
```
How do I deploy this app to the web so anyone can access it? 
I prefer a simple, free solution.
```

#### Step 2: Follow the Guide
The AI will likely recommend services like:
- **Netlify** (recommended - very beginner-friendly)
- **Vercel**
- **GitHub Pages**

Follow the step-by-step instructions the AI provides!🎉

## 🚀 What's Next?

Ready to level up your AI coding skills? Here are some powerful features to explore:

### 1. MCPs (Model Context Protocol)

MCPs are special connections that let Cursor talk to external tools. Think of them as superpowers for your AI assistant!

**Examples:** Figma, Gmail, Google Drive, Notion, Slack, Linear, context7.

**💡 Tip**: Start with one MCP at a time to understand how they work before adding more!


## 📖 Afterword

## 💡 Principles of Successful AI Coding

### 1. Context is God

The AI can only help you as well as it understands what you're trying to do. The more context you provide, the better results you'll get:

- **Attach relevant files** with `@filename` to show the AI what you're working with
- **Share screenshots** of what you want to achieve - a picture is worth a thousand words
- **Describe not just what you want, but why** - help the AI understand your goals
- **Start new chat** when you want to start a new task

Think of it like explaining your task to a helpful colleague - the clearer you are, the better they can help!

### 2. Iteration is Key

Your first attempt won't be perfect, and **that's completely normal!** Building with AI is a conversation, not a one-shot command:

- Start with a basic version and improve it step by step
- Don't be afraid to ask the AI to try again differently
- Break big tasks into smaller, manageable pieces
- Test frequently and adjust based on what you see
- Each iteration brings you closer to your vision

Remember: Professional developers iterate constantly too. The difference is that with AI, you can iterate on ideas without getting bogged down in technical details.

### 3. Your Communication Skills Place You Above

Here's the secret: **You don't need to know how to code.** Your ability to explain and describe what you want is what matters:

- **Clear writing skills** help you communicate your vision to the AI
- **Problem-solving abilities** help you break down features and debug issues
- **Understanding the "why"** behind features makes better products
- **Your domain knowledge** (recipes, business rules, user needs) is more valuable than knowing syntax

### 4. Starting from Scratch

**You may ask:** "We started this project when initial structure was ready, how do I prototype something from scratch?"

**The answer:** This workshop was structured this way so we don't spend a lot of time on project setup and avoid inconsistency between students. Instead, we focused on Cursor tooling to help you understand how to use it effectively.

**But here's the good news:** Cursor can absolutely help you build from total zero! The key is to use Cursor Rules (like the `@non-tech.mdc` rule you've seen in this project) that explain to the AI that you're a non-technical person. This tells the AI to:
- Use the easiest, most beginner-friendly technologies
- Set up projects with simple structures
- Choose straightforward solutions to test your ideas quickly
- Avoid complex technical concepts

When starting from scratch, simply tell the AI: "I want to build [your idea]. I'm not technical, so please use simple, beginner-friendly technologies and explain your choices." The AI will guide you through the entire setup! or use `@non-tech.mdc` rule.

## 🆚 Why Choose Cursor Over Other AI Coding Tools?

There are many AI coding tools out there - Loveable, v0, Bolt, Replit Agent, and more. Here's what makes Cursor special:

### Key Advantages

**Your Files, Your Computer**
Everything saves locally - you own all the code with no vendor lock-in

**Choose Your Stack (if needed)**
Use any technology you want (React, Vue, plain HTML, etc.)

**Control Through Rules**
Customize how the AI behaves (like the `.cursor/rules` you've seen)

**Powerful MCPs**
Connect to tools like Gmail, Google Drive, Notion and more

### When to Use Alternatives

If Cursor feels overwhelming, tools like **Loveable**, **v0**, **Bolt**, or **Replit Agent** are great starting points:

- ✅ Simpler interfaces, less setup
- ✅ Perfect for quick prototypes
- ✅ Faster time to "hello world"

**Think of them as training wheels** - use them to build confidence, then graduate to Cursor when you need more control, want to integrate with other tools, or are building something long-term.

## 🤝 Community

Join Cursor UA Telegram channel !

<img src="resources/scan_me.png" alt="Scan Me" width="300">

*Made with ❤️ from Wix and Cursor UA Community*
