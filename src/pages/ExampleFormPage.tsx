import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { ArrowLeft, BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput, FormButton, FormSelect, FormTextarea, FormCheckbox } from '@/components/base'
import { AppShell } from '@/components/layout/AppShell'
import { useAuthStore } from '@/stores/auth-store'

const exampleSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  role: z.string().min(1, 'Please select a role'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  newsletter: z.boolean(),
  terms: z.boolean().refine((val) => val === true, 'You must accept the terms'),
})

type ExampleFormData = z.infer<typeof exampleSchema>

export function ExampleFormPage() {
  const { user, logout } = useAuthStore()
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ExampleFormData>({
    resolver: zodResolver(exampleSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      bio: '',
      newsletter: false,
      terms: false,
    },
  })

  const onSubmit = async (data: ExampleFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Form submitted:', data)
    alert('Form submitted successfully! Check console for data.')
    reset()
  }

  const roleOptions = [
    { value: 'admin', label: 'Administrator' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' },
    { value: 'contributor', label: 'Contributor' },
  ]

  return (
    <AppShell
      pageTitle="Form component showcase"
      pageDescription="Use this page as a reference for starter-friendly form patterns built with React Hook Form, Zod, and the shared UI primitives."
      userName={user?.username}
      onLogout={logout}
    >
      <div className="flex">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <Card className="border-border/70 bg-card/85 shadow-xl shadow-primary/5 backdrop-blur">
          <CardHeader>
            <CardTitle>Form Components Showcase</CardTitle>
            <CardDescription>
              Demonstrating all the base form components with React Hook Form integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Text Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  name="firstName"
                  control={control}
                  label="First Name"
                  placeholder="John"
                  description="Enter your first name"
                />

                <FormInput
                  name="lastName"
                  control={control}
                  label="Last Name"
                  placeholder="Doe"
                  description="Enter your last name"
                />
              </div>

              {/* Email Input */}
              <FormInput
                name="email"
                control={control}
                type="email"
                label="Email Address"
                placeholder="john.doe@example.com"
                description="We'll never share your email"
              />

              {/* Select Dropdown */}
              <FormSelect
                name="role"
                control={control}
                label="Role"
                placeholder="Select your role"
                options={roleOptions}
                description="Choose your primary role in the organization"
              />

              {/* Textarea */}
              <FormTextarea
                name="bio"
                control={control}
                label="Bio"
                placeholder="Tell us about yourself..."
                rows={4}
                description="Write a brief description about yourself (minimum 10 characters)"
              />

              {/* Checkboxes */}
              <div className="space-y-4">
                <FormCheckbox
                  name="newsletter"
                  control={control}
                  label="Subscribe to our newsletter"
                  description="Get updates about new features and announcements"
                />

                <FormCheckbox
                  name="terms"
                  control={control}
                  label="I agree to the terms and conditions"
                  description="Required to proceed with registration"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <FormButton
                  type="submit"
                  isSubmitting={isSubmitting}
                  loadingText="Creating account..."
                  className="w-full"
                >
                  Create Account
                </FormButton>
              </div>
            </form>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/8 p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                <BadgeCheck className="h-4 w-4" />
                Included starter behaviors
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Automatic React Hook Form integration</li>
                <li>Built-in validation states and helper copy</li>
                <li>Accessible labels and descriptive text hooks</li>
                <li>Consistent theme-aware surfaces across light and dark mode</li>
                <li>Responsive spacing tuned for mobile and desktop layouts</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
