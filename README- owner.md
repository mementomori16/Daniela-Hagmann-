# Project README

**Owner:** Hieroglyph Code - Custom Software Solutions

---
**ВАЖНО, КАК КОРЕКТИРОВАТЬ КОД**: 
Все изменения и коректировки кода можно делать в корневых файлах но затем вручную их переводить в те же самые файлы в папке public. В корневых файлах все переходы на ссылки дожны проходить через public/style.css, public/script.js. В папке public, все переходы на ссылке должы быть прямыми: style.css, script.js. 

## Project Structure and Deployment

- This project uses **TypeScript**, **SCSS**, and **HTML**.
- The source files (TS, SCSS, HTML) are located in the **root** directory.
- The compiled output files (JavaScript, CSS, and processed HTML if any) are generated into the **`public/`** folder.
- The website is served online from the **`public/`** folder (e.g., via Firebase Hosting).

## Development Workflow

1. **Edit source files in the root folder:**
   - `.ts` files for TypeScript code
   - `.scss` files for styles
   - `.html` files for content and markup

2. **Compile/Transpile your source files:**
   - Use your editor’s compile/build commands (e.g., VSCode’s right-click "Compile File" on `.ts` and `.scss` files) to produce JavaScript and CSS inside `public/`.
   - The `public/` folder is the "build" folder containing the runnable version of your app.

3. **Do NOT manually edit files inside the `public/` folder:**
   - Changes made directly in `public/` will be overwritten on the next compilation.
   - Always make changes in the **source files in root**, then compile.

4. **Test your changes locally:**
   - Open the compiled `public/index.html` file using a **local web server** to properly serve assets.
   - Do not open `index.html` from the root folder directly in the browser, as it will not load compiled CSS or JS correctly.

## Important Notes About Local Testing

- Because of relative paths and browser security restrictions, opening `public/index.html` directly by double-clicking the file in your file explorer might cause issues (missing CSS/JS).
- Use a **local server** to test:
  - The easiest way is to use **Live Server** extension in VSCode.
  - Right-click on `public/index.html` and select **"Open with Live Server"**.
  - This runs a lightweight server, e.g., at `http://127.0.0.1:5500/public/index.html`, where all assets load correctly.
- Alternatively, you can use any other static server like:
  - `npx http-server public`

## Notes About Your `tsconfig.json`

- Ensure your `tsconfig.json` is configured to compile your `.ts` files from root to `public/` output.
- Example minimal config snippet:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./public",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["./**/*.ts"],
  "exclude": ["node_modules"]
}
Deployment to Firebase Hosting
This section outlines the steps to deploy your website to Firebase Hosting using the command-line interface.

Install Firebase CLI:
Ensure you have the Firebase tools installed globally. If not, run:

Bash

npm install -g firebase-tools
Initialize Firebase Project (First-Time Setup):
If this is your first time deploying, you need to initialize your project. In your terminal, run:

Bash

firebase init
During the setup, follow these steps based on your project:

Choose features: Select Hosting.

Web framework: Answer N (No).

Public directory: Enter public (as this is where your compiled files are).

Single-page app: Answer N (No).

Overwrite index.html: Answer N (No).

Confirm Project Link:
Ensure your local project is correctly linked to the Firebase project that has your domain lebend-ich.ch. The .firebaserc file should point to the correct project ID. If not, use:

Bash

firebase use --add
Compile Your Code:
Before every deployment, make sure your source files are compiled into the public folder. Use your build command or manual process to ensure the latest changes are ready.

Deploy to Firebase:
Once your public folder is up-to-date and your project is linked correctly, run the deployment command:

Bash

firebase deploy
After the deployment is complete, your changes will be live on your custom domain, https://lebend-ich.ch/.