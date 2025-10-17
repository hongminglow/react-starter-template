import { useAuthStore } from '@/stores/auth-store'
import { usePosts } from '@/hooks/usePosts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PostCard } from '@/components/PostCard'
import { LogOut, Loader2, RefreshCw, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomePage() {
  const { user, logout } = useAuthStore()
  const { data: posts, isLoading, error, refetch, isFetching } = usePosts()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                React Starter Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/example-form">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Form Examples
                </Button>
              </Link>
              <span className="text-sm text-gray-600">
                Welcome, {user?.username}!
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to React Starter Template!</CardTitle>
            <CardDescription>
              This template demonstrates modern React development with Zustand, TanStack Query, 
              React Hook Form, ShadCN/UI, and Tailwind CSS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-900">State Management</div>
                <div className="text-blue-700">Zustand with persist</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-medium text-green-900">Server State</div>
                <div className="text-green-700">TanStack Query</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-900">UI Components</div>
                <div className="text-purple-700">ShadCN/UI + Tailwind</div>
              </div>
            </div>
            
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="font-medium text-yellow-900 mb-1">🎯 New: Form Components</div>
              <div className="text-yellow-800 text-sm">
                Check out our enhanced form components that integrate directly with React Hook Form! 
                <Link to="/example-form" className="underline ml-1 font-medium">
                  View Form Examples →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
            <Button
              variant="outline"
              onClick={() => refetch()}
              disabled={isFetching}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
              <span className="ml-2 text-gray-600">Loading posts...</span>
            </div>
          )}

          {error && (
            <Card className="border-destructive">
              <CardContent className="pt-6">
                <div className="text-center text-destructive">
                  <p className="font-medium">Failed to load posts</p>
                  <p className="text-sm mt-1">
                    {error instanceof Error ? error.message : 'Something went wrong'}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => refetch()}
                    className="mt-4"
                  >
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {posts && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}