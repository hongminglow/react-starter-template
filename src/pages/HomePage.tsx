import { useAuthStore } from '@/stores/auth-store'
import { usePosts } from '@/hooks/usePosts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PostCard } from '@/components/PostCard'
import { ArrowRight, Blocks, Database, Loader2, RefreshCw, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'

export function HomePage() {
  const { user, logout } = useAuthStore()
  const { data: posts, isLoading, error, refetch, isFetching } = usePosts()

  return (
    <AppShell
      pageTitle="React Starter Template"
      pageDescription="A reusable starter shell with typed envs, shared providers, protected routing, and theme-aware UI primitives."
      userName={user?.username}
      onLogout={logout}
    >
      <section className="grid gap-4 md:grid-cols-3 my-3">
        <Card className="border-border/70 bg-card/80 shadow-lg shadow-primary/5 backdrop-blur">
          <CardHeader>
            <ShieldCheck className="h-5 w-5 text-primary" />
            <CardTitle className="mt-4">State and auth</CardTitle>
            <CardDescription>
              Persisted Zustand auth flow with route protection already wired.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-border/70 bg-card/80 shadow-lg shadow-primary/5 backdrop-blur">
          <CardHeader>
            <Database className="h-5 w-5 text-primary" />
            <CardTitle className="mt-4">Server data</CardTitle>
            <CardDescription>
              TanStack Query hooks now flow through the shared Axios client and env config.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-border/70 bg-card/80 shadow-lg shadow-primary/5 backdrop-blur">
          <CardHeader>
            <Blocks className="h-5 w-5 text-primary" />
            <CardTitle className="mt-4">Composable UI</CardTitle>
            <CardDescription>
              Top bar, shell, theme toggle, and form primitives are extracted for reuse.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              to="/example-form"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Open the form component showcase
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6 py-3">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">Latest posts</h3>
            <p className="text-sm text-muted-foreground">
              Demo content fetched through the shared API layer.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => refetch()}
              disabled={isFetching}
              className="cursor-pointer gap-2 border-border/70 bg-background/75 backdrop-blur transition-colors hover:bg-accent"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {isLoading && (
          <Card className="border-border/70 bg-card/80 shadow-lg shadow-primary/5 backdrop-blur">
            <CardContent className="flex items-center justify-center gap-3 py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="text-sm text-muted-foreground">Loading posts...</span>
            </CardContent>
          </Card>
        )}

        {error && (
          <Card className="border-destructive/50 bg-destructive/5">
            <CardContent className="pt-6">
              <div className="text-center text-destructive">
                <p className="font-medium">Failed to load posts</p>
                <p className="mt-1 text-sm">
                  {error instanceof Error ? error.message : 'Something went wrong'}
                </p>
                <Button variant="outline" onClick={() => refetch()} className="mt-4 cursor-pointer">
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {posts ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : null}
      </section>
    </AppShell>
  )
}
