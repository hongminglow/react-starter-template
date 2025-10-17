import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput, FormButton } from '@/components/base'
import { useAuthStore } from '@/stores/auth-store'
import { loginSchema, type LoginFormData } from '@/lib/validations'

export function LoginPage() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuthStore()
  const [error, setError] = useState('')

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'demo',
      password: 'password'
    }
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
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
              control={control}
              isSubmitting={isSubmitting}
              loadingText="Signing in..."
              className="w-full"
            >
              Sign in
            </FormButton>
          </form>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium">Demo Credentials:</p>
            <p className="text-sm text-blue-700">Username: demo</p>
            <p className="text-sm text-blue-700">Password: password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}