# Mohamed Portfolio

A simple, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. The design focuses on clarity, calm colors, and a humble presentation that reflects a developer who values clean work and thoughtful user experiences.

## Features

- Clean and minimal landing page
- About, services, skills, projects, and contact sections
- Responsive layout for desktop and mobile
- Smooth animations and polished transitions
- Contact form integration with EmailJS
- Projects page with category filters

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Router
- React Icons
- EmailJS
- Oxlint

## Project Structure

```text
protfolio/
├── public/
│   └── img/
│       └── Project/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── pages/
│   │   ├── AllProjects.jsx
│   │   └── HomePage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3) Run the development server

```bash
npm run dev
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build the project for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint checks

## Deployment

This project is ready to be deployed on platforms such as Vercel, Netlify, or GitHub Pages.

For a production build:

```bash
npm run build
```

## Customization

You can update your personal details, projects, and content in:

- `src/data/portfolioData.js`
- `src/components/` for layout and section content

## License

This project is intended for personal portfolio use.
