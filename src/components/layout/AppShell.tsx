import type { ReactNode } from 'react'
import { AppTopBar } from '@/components/layout/AppTopBar'
import { env } from '@/lib/env'

interface AppShellProps {
  pageTitle: string
  pageDescription?: string
  userName?: string
  onLogout: () => void
  children: ReactNode
}

export function AppShell({
  pageTitle,
  pageDescription,
  userName,
  onLogout,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[26rem] bg-gradient-to-b from-primary/12 via-transparent to-transparent" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute left-0 top-56 h-72 w-72 rounded-full bg-secondary/35 blur-3xl" />
      </div>

      <AppTopBar
        appName={env.VITE_APP_NAME}
        pageTitle={pageTitle}
        userName={userName}
        onLogout={onLogout}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-10">
        {pageDescription ? (
          <section className="max-w-3xl space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary/75">
              Starter workspace
            </p>
            <div className="space-y-2 ">
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                {pageDescription}
              </p>
            </div>
          </section>
        ) : null}

        {children}
      </main>
    </div>
  )
}
