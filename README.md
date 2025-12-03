# 🚀 Personal Portfolio - Ian Axel

A modern, clean, and responsive personal portfolio website built with **Astro**, **Tailwind CSS**, and **Preline UI**. Features an iOS-like aesthetic with bilingual support (English/Spanish).

## ✨ Features

- 🎨 **iOS-like Design**: Clean, minimalist interface with soft shadows and rounded corners
- 🌍 **Bilingual Support**: Full English and Spanish translations with easy language switching
- 📱 **Fully Responsive**: Mobile-first design that looks great on all devices
- ⚡ **Fast Performance**: Built with Astro for optimal loading speeds
- 🎭 **Smooth Animations**: Subtle hover effects and scroll animations
- 🧩 **Component-Based**: Reusable UI components built with Preline UI
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Core
- [Astro](https://astro.build/) - Static Site Generator
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [React](https://react.dev/) - Interactive Components

### Styling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS
- [Preline UI](https://preline.co/) - UI Component Library

### State Management
- [Nanostores](https://github.com/nanostores/nanostores) - Lightweight State Management

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── common/      # Navbar, Footer, LanguageSwitcher
│   │   ├── sections/    # Hero, TechStack, Projects, etc.
│   │   └── ui/          # Card, Badge, Button
│   ├── i18n/            # Translation files (en.ts, es.ts)
│   ├── layouts/         # BaseLayout
│   ├── pages/           # Route pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   ├── notes.astro
│   │   └── es/          # Spanish versions
│   ├── store/           # Language state
│   └── styles/          # Global styles
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 🌐 Routes

### English (Default)
- `/` - Home page
- `/about` - About page
- `/projects` - Projects listing
- `/notes` - Blog/Notes

### Spanish
- `/es` - Home page (Spanish)
- `/es/about` - About page (Spanish)
- `/es/projects` - Projects listing (Spanish)
- `/es/notes` - Blog/Notes (Spanish)


## 🎯 Key Components

### LanguageSwitcher
Interactive toggle for switching between English and Spanish. Uses nanostores for state management.

### Card
Reusable card component with hover effects:
```astro
<Card href="#">
  <!-- Your content -->
</Card>
```

### Badge
Colored badges for tags:
```astro
<Badge label="Swift" color="blue" />
```

### Button
Styled buttons with variants:
```astro
<Button variant="primary" href="#">Click me</Button>
```

## 📱 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **Tech Stack** - Categorized skills display
3. **Projects** - Featured projects grid
4. **Experience** - Professional timeline
5. **Education** - Academic background and courses
6. **About** - Personal information and hobbies
7. **Contact** - Social links (no email)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically


## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- LinkedIn: [Ian Axel Perez de la Torre](https://www.linkedin.com/in/ian-axel-perez-de-la-torre-35688b20b/)
- GitHub: [IandelaTorre](https://github.com/IandelaTorre)
- Portfolio: [Mi sitio web](https://google.com)

---

⌨️ con ❤️ por IandelaTorre 😊
