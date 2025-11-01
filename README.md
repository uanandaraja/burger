# Burger

Full-stack Bun starter. Built with Bun from the ground up - fast, simple, ready to use.

Full stack app using Bun 1.3, React 19, TypeScript, Tailwind CSS, and TanStack Router. Everything runs through Bun - no separate build tools needed.

## Quick Start

```bash
bun install
bun dev    # Start dev server with HMR
bun start   # Production mode
bun run build  # Build frontend for production
```

## Project Structure

```
burger/
├── backend/
│   ├── server.ts          # Main server entry point
│   └── routes/
│       ├── index.ts       # Combines all routes
│       ├── frontend.ts    # SPA routes (serves React app)
│       └── api/
│           ├── index.ts   # API route exports
│           ├── health.ts  # /health, /ping
│           └── hello.ts   # /api/hello endpoints
│
├── frontend/
│   └── src/
│       ├── App.tsx        # React app entry
│       ├── router.tsx     # TanStack Router config
│       ├── components/
│       │   ├── landing/   # Landing page components
│       │   │   ├── Hero.tsx
│       │   │   ├── Features.tsx
│       │   │   ├── LandingHeader.tsx
│       │   │   └── Footer.tsx
│       │   └── ui/        # shadcn/ui components
│       ├── pages/         # Route pages (Home, Auth)
│       └── public/
│           └── logos/    # Tech stack logo SVGs
│
└── styles/
    └── globals.css        # Tailwind + theme variables
```

## How It Works

**Backend**: Bun's `serve()` handles routing. Frontend routes serve the React app (SPA), API routes return JSON. See [Bun Routing docs](https://bun.com/docs/runtime/http/routing).

**Frontend**: TanStack Router handles client-side routing. Landing page uses LandingHeader, auth page has no header. See [TanStack Router docs](https://tanstack.com/router/latest).

**Development**: Bun's HMR watches files and hot-reloads both backend and frontend automatically.

## Key Files

- `backend/server.ts` - Server setup with routes and HMR config
- `frontend/src/router.tsx` - Route definitions and layout
- `frontend/src/App.tsx` - React app wrapper
- `backend/routes/` - All backend routes organized by concern

## References

- [Bun Server & Routing](https://bun.com/docs/runtime/http/routing)
- [Bun File System Router](https://bun.com/docs/runtime/file-system-router)
- [TanStack Router](https://tanstack.com/router/latest)
- [React 19](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
