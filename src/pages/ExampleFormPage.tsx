import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput, FormButton, FormSelect, FormTextarea, FormCheckbox } from '@/components/base'

const exampleSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  role: z.string().min(1, 'Please select a role'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  newsletter: z.boolean(),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms')
})

type ExampleFormData = z.infer<typeof exampleSchema>

export function ExampleFormPage() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<ExampleFormData>({
    resolver: zodResolver(exampleSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      bio: '',
      newsletter: false,
      terms: false
    }
  })

  const onSubmit = async (data: ExampleFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', data)
    alert('Form submitted successfully! Check console for data.')
    reset()
  }

  const roleOptions = [
    { value: 'admin', label: 'Administrator' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' },
    { value: 'contributor', label: 'Contributor' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card>
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
                  control={control}
                  isSubmitting={isSubmitting}
                  loadingText="Creating account..."
                  className="w-full"
                >
                  Create Account
                </FormButton>
              </div>
            </form>

            {/* Information Box */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Form Components Features:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✅ Automatic React Hook Form integration</li>
                <li>✅ Built-in error handling and display</li>
                <li>✅ Accessibility attributes (ARIA labels, descriptions)</li>
                <li>✅ Consistent styling with ShadCN design system</li>
                <li>✅ TypeScript support with type safety</li>
                <li>✅ Loading states for async operations</li>
                <li>✅ Responsive design for mobile and desktop</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}