import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/app/ThemeProvider'
import { Button } from '@/components/ui/button'

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="cursor-pointer border-border/70 bg-background/75 backdrop-blur transition-colors hover:bg-accent"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
