import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LockKeyhole, MoonStar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput, FormButton } from '@/components/base'
import { ThemeToggleButton } from '@/components/ThemeToggleButton'
import { env } from '@/lib/env'
import { useAuthStore } from '@/stores/auth-store'
import { loginSchema, type LoginFormData } from '@/lib/validations'

export function LoginPage() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuthStore()
  const [error, setError] = useState('')

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'demo',
      password: 'password',
    },
  })

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const onSubmit = async (data: LoginFormData) => {
    setError('')

    const success = login(data.username, data.password)

    if (success) {
      navigate('/', { replace: true })
    } else {
      setError('Invalid credentials. Use "demo" and "password".')
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[24rem] bg-gradient-to-b from-primary/15 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
        <ThemeToggleButton />
      </div>

      <Card className="w-full max-w-md border-border/70 bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur">
        <CardHeader className="space-y-1">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to open the starter workspace
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              name="username"
              control={control}
              label="Username"
              placeholder="Enter your username"
              description="Use 'demo' for demonstration"
            />

            <FormInput
              name="password"
              control={control}
              type="password"
              label="Password"
              placeholder="Enter your password"
              description="Use 'password' for demonstration"
            />

            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                {error}
              </div>
            )}

            <FormButton
              type="submit"
              isSubmitting={isSubmitting}
              loadingText="Signing in..."
              className="w-full"
            >
              Sign in
            </FormButton>
          </form>

          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/8 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
              <MoonStar className="h-4 w-4" />
              {env.VITE_APP_NAME}
            </div>
            <p className="text-sm text-muted-foreground">Demo credentials</p>
            <p className="text-sm text-foreground">Username: demo</p>
            <p className="text-sm text-foreground">Password: password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
