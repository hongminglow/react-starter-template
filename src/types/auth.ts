export interface User {
  id: string
  username: string
  email: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

export interface LoginFormData {
  username: string
  password: string
}