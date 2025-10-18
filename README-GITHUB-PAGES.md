# Deploying to GitHub Pages

1. Replace `YOUR_REPO_NAME` in `next.config.ts` with your actual GitHub repository name.
2. Commit and push your code to GitHub.
3. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Run the deploy script:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, set GitHub Pages source to the `gh-pages` branch.
6. Your site will be live at `https://github.com/mrsltycrml/IAS-Project`.

## Notes
- Make sure your repo is public for GitHub Pages to work.
- If you change your repo name, update `next.config.ts` accordingly.
