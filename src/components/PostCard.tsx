import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Post } from '@/types/api'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg">
          {post.title}
        </CardTitle>
        <CardDescription>
          Post #{post.id} • User {post.userId}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.body}
        </p>
      </CardContent>
    </Card>
  )
}