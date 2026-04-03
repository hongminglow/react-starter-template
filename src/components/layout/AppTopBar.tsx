import { LogOut } from 'lucide-react'
import { ThemeToggleButton } from '@/components/ThemeToggleButton'
import { Button } from '@/components/ui/button'

interface AppTopBarProps {
  appName: string
  pageTitle: string
  userName?: string
  onLogout: () => void
}

export function AppTopBar({ appName, pageTitle, userName, onLogout }: AppTopBarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
            {appName}
          </p>
          <h1 className="truncate text-lg font-semibold text-foreground sm:text-xl">{pageTitle}</h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-muted-foreground md:inline">
            Welcome, <span className="font-medium text-foreground">{userName ?? 'Guest'}</span>
          </span>
          <ThemeToggleButton />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="cursor-pointer gap-2 border-border/70 bg-background/75 backdrop-blur transition-colors hover:bg-accent"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
