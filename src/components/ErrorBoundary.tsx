import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { env } from '@/lib/env'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error boundary caught an error', error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.error) {
      return this.props.children
    }

    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 text-foreground">
        <section className="w-full max-w-lg rounded-xl border bg-card p-6 shadow">
          <p className="text-sm font-medium text-muted-foreground">{env.VITE_APP_NAME}</p>
          <h1 className="mt-2 text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The app hit an unexpected error. You can reload to recover, and if it keeps happening,
            check the browser console for details.
          </p>
          <div className="mt-6 flex gap-3">
            <Button onClick={this.handleReload}>Reload App</Button>
          </div>
        </section>
      </main>
    )
  }
}
