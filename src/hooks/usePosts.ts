import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Post } from '@/types/api'

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data.slice(0, 10) // Only show first 10 posts
}

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}