# Parth Bhirwandekar — Portfolio 🚀

A modern, high-performance portfolio website built to showcase my work in Artificial Intelligence, Machine Learning, Computer Vision, Robotics, and Research. 

The website is designed with a custom **"Neural Cyan / Deep Space"** aesthetic, featuring a dark navy background (`#020B18`), electric cyan accents (`#00D4FF`), deep violet gradients, and a monospace-heavy typography system (Syne, JetBrains Mono) for a highly technical, computer-vision HUD feel.

---

## 🔗 Live Links

- **Portfolio URL**: [Coming Soon]
- **GitHub Repository**: [https://github.com/parth091006/parth-portfolio](https://github.com/parth091006/parth-portfolio)
- **LinkedIn**: [https://www.linkedin.com/in/parthbhirwandekar/](https://www.linkedin.com/in/parthbhirwandekar/)

---

## 🛠️ Tech Stack & Architecture

This project is built using industry-standard tools and a professional **Domain-Driven `src/` architecture**.

- **Framework**: Next.js 15.3 (App Router)
- **UI Library**: React 19.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content Management**: MDX (`next-mdx-remote`, `gray-matter`)

---

## 📁 Project Structure

The codebase strictly isolates application logic from configuration files by housing all code within the `src/` directory.

```text
parth-portfolio/
│
├── public/                  # Static assets (images, PDFs, certificates)
│   └── assets/              # Consolidated media files
│
├── src/                     # Application Source Code
│   ├── app/                 # Next.js App Router (pages & layouts)
│   ├── components/          # Reusable UI (Cards, Layouts, Sections)
│   ├── config/              # Site-wide metadata and settings
│   ├── content/             # MDX files (Case studies, Blogs)
│   ├── data/                # Hardcoded datasets (Profile, Skills)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and MDX parsers
│   ├── styles/              # Global CSS and Design Tokens
│   └── types/               # TypeScript interfaces
│
├── next.config.ts           # Next.js compiler configuration
├── tailwind.config.ts       # Tailwind theme configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript rules & path aliases
```

---

## 📝 Content Management (MDX)

The portfolio is designed as a headless CMS. You do not need to modify React components to add new case studies or blogs.

### Adding a New Project Case Study
1. Create a new markdown file: `src/content/project/your-project.mdx`
2. Add your rich text content (supports custom components like React code blocks and Mermaid diagrams).
3. Ensure the `slug` in your `src/data/projects.ts` matches the `.mdx` filename.
4. The application will automatically parse the MDX and render it using the dynamic `[slug]` route.

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parth091006/parth-portfolio.git
   cd parth-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server (Turbopack enabled):**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel**. 
Pushing to the `main` branch on GitHub will automatically trigger a production build.

```bash
npm run build
npm start
```

---

## 📄 License
This project is licensed under the MIT License.