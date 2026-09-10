# Muhamed Hussein Abd El-Azim — Portfolio Website

A personal portfolio website for **Muhamed Hussein Abd El-Azim**, AI & Machine Learning Engineer, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

Visual aesthetic inspired by **Magic Portfolio** & **Once UI**:
- Dark mode default (`#1F1D26` background, `#25232E` cards, hairline borders, subtle gradients)
- Modular cards and editorial grid layout
- Custom abstract vector visualizations for projects (A* route graph, n8n automation flow, Transformer pipeline)
- Dedicated project detail pages (`/projects/[slug]`)
- Centralized typed data layer (`src/data/portfolio.ts`)
- Responsive across mobile, tablet, and desktop

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom styling, hairline borders & variables
│   │   ├── layout.tsx               # Root layout, typography, metadata & viewport
│   │   ├── not-found.tsx            # Custom 404 page
│   │   ├── page.tsx                 # Main single-page portfolio layout
│   │   └── projects/[slug]/page.tsx # Dynamic project detail page
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky nav, theme toggle, mobile drawer
│   │   ├── Hero.tsx                 # Headline, CTAs, metadata badges
│   │   ├── About.tsx                # Section 01: Bio & domain tags
│   │   ├── Education.tsx            # Section 02: Beni Suef National University
│   │   ├── Skills.tsx               # Section 03: 5 Categorized skill cards
│   │   ├── Experience.tsx           # Section 04: NTI & ITI vertical timeline
│   │   ├── Projects.tsx             # Section 05: Magic Portfolio project showcase
│   │   ├── ProjectCard.tsx          # Card with gradient accents & preview
│   │   ├── ProjectVisualWrapper.tsx # Dynamic visual selector
│   │   ├── Courses.tsx              # Section 06: Courses & In-Progress status
│   │   ├── Languages.tsx            # Arabic & English proficiency
│   │   ├── Contact.tsx              # Section 07: Info, copy buttons & form
│   │   ├── Footer.tsx               # Copyright & footer navigation
│   │   └── visuals/
│   │       ├── FlightRouteVisual.tsx       # Abstract A* route graph
│   │       ├── SupportWorkflowVisual.tsx   # n8n & OpenAI automation flow
│   │       └── SentimentPipelineVisual.tsx # Transformer text classifier pipeline
│   ├── data/
│   │   └── portfolio.ts             # Typed single source of truth for all CV data
│   └── types/
│       └── portfolio.ts             # TypeScript interface definitions
```

---

## Content Customization
All personal and engineering information is centralized in [`src/data/portfolio.ts`](./src/data/portfolio.ts). Any updates to links, certifications, or projects can be made directly in this file.
