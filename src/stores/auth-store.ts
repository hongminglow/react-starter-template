import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { AuthState, User } from '@/types/auth'

// Hardcoded demo credentials
const DEMO_CREDENTIALS = {
  username: 'demo',
  password: 'password'
}

const DEMO_USER: User = {
  id: '1',
  username: 'demo',
  email: 'demo@example.com'
}

export const useAuthStore = create<AuthState>()(
  persist(
    immer((set) => ({
      user: null,
      isAuthenticated: false,
      login: (username: string, password: string) => {
        if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
          set((state) => {
            state.user = DEMO_USER
            state.isAuthenticated = true
          })
          return true
        }
        return false
      },
      logout: () => {
        set((state) => {
          state.user = null
          state.isAuthenticated = false
        })
      }
    })),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)