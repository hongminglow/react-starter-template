# React Starter Template

A modern, production-ready React starter template with TypeScript, featuring all the essential tools and libraries for rapid development.

## 🚀 Features

This template includes all the modern tools listed for comprehensive React development:

### Core Stack
- ⚛️ **React 19.1.1** - Latest React with concurrent features
- 🟦 **TypeScript** - Full type safety throughout the application
- ⚡ **Vite** - Lightning-fast build tool with HMR
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **ShadCN/UI** - Beautiful, accessible component library

### State Management
- 🐻 **Zustand** - Lightweight state management with persistence
- 🔄 **TanStack Query** - Powerful server state management
- 📝 **React Hook Form** - Performant forms with easy validation
- 🛡️ **Zod** - TypeScript-first schema validation
- 🔄 **Immer** - Immutable state updates made easy

### Routing & Navigation
- 🗺️ **React Router** - Declarative routing for React
- 🔒 **Protected Routes** - Authentication guards built-in

### HTTP Client
- 📡 **Axios** - Promise-based HTTP client with interceptors

### Development Tools
- 🧹 **ESLint** - Code linting with React-specific rules
- 🔥 **React Compiler** - Experimental React compiler enabled
- 📁 **Path Aliases** - Clean imports with `@/` prefix

## 🎯 Demo Features

The template includes a complete authentication flow showcase:

### 🔐 Login Page
- Form validation with React Hook Form + Zod
- Hardcoded demo credentials: `demo` / `password`
- Persistent authentication state with Zustand
- Beautiful UI with ShadCN components

### 🏠 Home Page (Protected)
- TanStack Query integration with JSONPlaceholder API
- Loading states and error handling
- Responsive grid layout
- Real-time data fetching and caching

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download this template**
   ```bash
   git clone <your-repo> my-react-app
   cd my-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Login Credentials
- **Username:** `demo`
- **Password:** `password`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   ├── PostCard.tsx    # Example component
│   └── ProtectedRoute.tsx
├── pages/              # Page components
│   ├── LoginPage.tsx   # Authentication page
│   └── HomePage.tsx    # Main dashboard
├── hooks/              # Custom React hooks
│   └── usePosts.ts     # TanStack Query hook
├── stores/             # Zustand stores
│   └── auth-store.ts   # Authentication state
├── lib/                # Utilities and configurations
│   ├── axios.ts        # HTTP client setup
│   ├── utils.ts        # Helper functions
│   └── validations.ts  # Zod schemas
└── types/              # TypeScript type definitions
    ├── auth.ts         # Auth-related types
    └── api.ts          # API response types
```

## 🎨 Customization

### Styling
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Extend ShadCN components in `src/components/ui/`

### State Management
- Add new Zustand stores in `src/stores/`
- Create custom hooks for complex state logic
- Use Immer for immutable updates

### API Integration
- Configure base URLs in `src/lib/axios.ts`
- Add new API hooks in `src/hooks/`
- Define types in `src/types/api.ts`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (ready to configure)

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and customize:

```env
VITE_API_BASE_URL=https://your-api.com
VITE_APP_NAME=Your App Name
VITE_DEBUG=false
```

### Path Aliases
Import with clean paths:
```typescript
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth-store'
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy Options
- **Vercel** - Zero-config deployment
- **Netlify** - Drag & drop or Git integration  
- **GitHub Pages** - Free static hosting
- **AWS S3** - Scalable cloud storage

## 🧪 Testing (Ready to Configure)

This template is ready for testing framework integration:
- Add **Vitest** for unit testing
- Include **React Testing Library** for component tests
- Configure **MSW** for API mocking

## 📚 Learn More

### Documentation
- [React](https://react.dev/) - UI library
- [TypeScript](https://typescriptlang.org/) - Type safety
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ShadCN/UI](https://ui.shadcn.com/) - Component library
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [TanStack Query](https://tanstack.com/query/) - Server state
- [React Hook Form](https://react-hook-form.com/) - Form library
- [Zod](https://zod.dev/) - Schema validation

### Community
- [React Discord](https://react.dev/community)
- [TypeScript Discord](https://discord.gg/typescript)
- [Vite Discord](https://discord.gg/vite)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - feel free to use this template for any project!

---

**Happy coding! 🎉** This template gives you everything you need to build modern React applications with confidence.
