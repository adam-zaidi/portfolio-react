# Adam Zaidi Portfolio - React Version

This is a React.js remake of the original portfolio website, built with Vite for faster development and easier maintenance.

## Features

- **React 18** with React Router for client-side routing
- **Vite** for fast development and optimized builds
- **Component-based architecture** for easy maintenance
- **Centralized data** - all posts/links stored in `src/data/posts.js`
- **Same UI/UX** as the original terminal-themed design

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── public/
│   ├── generated-icon.png
│   └── media/
│       └── euclidpaper.pdf
├── src/
│   ├── assets/
│   │   ├── fonts/          # Terminal fonts
│   │   └── media/          # Images for articles
│   ├── components/
│   │   ├── ArticleLayout.jsx
│   │   ├── AsciiTitle.jsx
│   │   ├── LinkList.jsx
│   │   ├── PGPButton.jsx
│   │   ├── PostItem.jsx
│   │   └── Section.jsx
│   ├── data/
│   │   └── posts.js        # All posts and links data
│   ├── pages/
│   │   ├── articles/       # Individual article pages
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Posts.jsx
│   ├── styles/
│   │   ├── Article.css
│   │   ├── Home.css
│   │   ├── NotFound.css
│   │   └── Posts.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Adding New Posts

1. Add the post data to `src/data/posts.js`
2. If it's an internal article, create a new component in `src/pages/articles/`
3. Add the route in `src/App.jsx`

## Original Design

This React version maintains the exact same terminal-themed design with:
- Green text on dark background (#33ff00 on #282828)
- ASCII art headers with glow effects
- Cursor blinking animations on hover
- Responsive design for mobile devices
