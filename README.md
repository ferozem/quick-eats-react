# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ISSUES FIXED

Issue 1:  [plugin:vite:css] [postcss] It looks like you're trying to use tailwindcss directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install @tailwindcss/postcss and update your PostCSS configuration.

Fix: 
  1. npm install -D @tailwindcss/postcss
  2. Update postcss.config.js to
    export default {
      plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
      },
    };
    
    
Issue 2: Taiwind css not working
Update index.css with @import "tailwindcss";

## Deployment to GitHub Pages

The project includes a GitHub Actions workflow that builds the Vite app and
publishes the contents of the `dist` directory to GitHub Pages. Routing works
thanks to a `404.html` file that redirects unknown paths back to the SPA.

To deploy:

1. Ensure the repository name matches the configured Vite `base` option:
   `/quick-eats-react/`.
2. Push changes to the `main` branch. The workflow will build the project and
   automatically deploy to the `gh-pages` environment.

If you need to run the build locally you can execute:

```bash
npm install
npm run build
```

The static files will appear in the `dist` folder.
