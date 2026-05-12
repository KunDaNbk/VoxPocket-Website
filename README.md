# VoxPocket Website

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable components
├── hooks/           # Custom hooks
├── lib/             # Utility functions
├── pages/           # Page components
├── App.tsx          # Root component
├── main.tsx         # Application entry
└── index.css        # Global styles
```

## Deploy to Cloudflare Pages

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Pages:
   - Go to [Cloudflare Pages](https://dash.cloudflare.com/)
   - Create a new project
   - Select "Direct Upload" and upload the `dist` folder
   - Set the build command to `npm run build` (if connecting via GitHub)

### Automated Deployment with GitHub Actions

This project includes a GitHub Actions workflow for automatic deployment.

**Setup:**

1. In your GitHub repository, go to **Settings > Secrets and variables > Actions**
2. Add the following secrets:
   - `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token with Pages permissions
   - `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

3. Push changes to the `main` branch to trigger deployment

### Cloudflare Pages Configuration

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | 20 |

## License

MIT