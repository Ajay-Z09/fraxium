# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/17e3ce05-a4c9-4341-bb30-a54615752ef3

## How to Deploy to GitHub Pages

1. First, create a new repository on GitHub
2. Push your code to the repository:
```sh
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

3. Install the gh-pages package:
```sh
npm install gh-pages --save-dev
```

4. Add these scripts to your package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

5. Add homepage to your package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

6. Deploy your website:
```sh
npm run deploy
```

7. On GitHub, go to your repository settings, scroll down to "GitHub Pages" section, and select the "gh-pages" branch as the source.

Your site will be available at: https://yourusername.github.io/your-repo-name

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/17e3ce05-a4c9-4341-bb30-a54615752ef3) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project in two ways:

1. Using Lovable:
   Simply open [Lovable](https://lovable.dev/projects/17e3ce05-a4c9-4341-bb30-a54615752ef3) and click on Share -> Publish.

2. Using GitHub Pages:
   Follow the GitHub Pages deployment instructions above.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
