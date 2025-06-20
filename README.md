# Blueprint Wizard Next.js

The "Blueprint Wizard" serves as a prototype for a live development portal. It allows stakeholders to preview how different content sections, themes, and layouts will appear before the site goes live. The modular design enables easy updates and personalization, ensuring that the final product meets the institution's requirements.

## App Details

- **Version:** 1.0.0
- **Author:** Tony Boswell

## What This Application Does

The "Blueprint Wizard" is a client facing application that allows stakeholders to preview in Anthology's Blueprint Product how different content sections, themes, and layouts will appear in their Encompass CMS before the site goes live. The modular design enables easy updates and personalization, ensuring that the final product meets the institution's requirements. [Geist font](https://vercel.com/font) and is ready for customization.

You can view a live demo at [https://blueprint-wizard-app.vercel.app/](https://blueprint-wizard-app.vercel.app/).

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-org/blueprint-wizard-nextjs.git
cd blueprint-wizard-nextjs
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You can start editing the page by modifying [`app/page.js`](app/page.js). The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Key Techniques

- **[Dynamic Routing](https://nextjs.org/docs/app/building-your-application/routing)** with the Next.js App Router for flexible page structures.
- **[Automatic Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font) efficiently.
- **[Hot Module Replacement (HMR)](https://nextjs.org/docs/app/building-your-application/optimizing/hot-reloading)** for instant feedback during development.
- **[ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)** for modular, maintainable code.

## Notable Technologies

- [Next.js](https://nextjs.org) for server-side rendering, routing, and API routes.
- [Geist Font](https://vercel.com/font) for a modern, readable UI.
- [Bun](https://bun.sh), [pnpm](https://pnpm.io), [Yarn](https://yarnpkg.com), and [npm](https://www.npmjs.com/) supported for flexible package management.

## Project Structure

```
blueprint-wizard-nextjs/
├── app/
├── public/
├── styles/
├── README.md
├── package.json
```

- **app/**: Main application code, including pages and routing logic.
- **public/**: Static assets like images and icons.
- **styles/**: Global and component-level CSS.
- **README.md**: Project documentation.
- **package.json**: Project dependencies and scripts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.