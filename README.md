# Personal Website

This is the personal website of Minh Anh Dong Nguyen, built with Next.js 15, React 19, and TypeScript.

## Features

- **Modern Design**: Clean, minimalist interface with dark/light theme toggle
- **Interactive Elements**: ASCII art animations, cursor tracing effects, and 3D components
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 15
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **UI Components**: Radix UI primitives
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Anh220305/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This site can be deployed to any platform that supports Next.js:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Deploy with automatic builds from your repository
- **GitHub Pages**: Use GitHub Actions for static export deployment

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── library/           # Book library with dynamic routes
│   ├── scent/             # Perfume showcase with 3D viewer
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # UI primitives
│   └── ...               # Feature components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Audio Credits

The background music is a Creative Commons licensed Lo-Fi track that provides a relaxing atmosphere while browsing the site.

## License

This project is open source and available under the [MIT License](LICENSE).
