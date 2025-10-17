import * as React from "react"
import { useController, type Control, type FieldPath, type FieldValues } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue'> {
  name: TName
  control: Control<TFieldValues>
  label?: string
  description?: string
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
}

export function FormInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  label,
  description,
  className,
  containerClassName,
  labelClassName,
  errorClassName,
  ...props
}: FormInputProps<TFieldValues, TName>) {
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
  })

  return (
    <div className={cn("space-y-2", containerClassName)}>
      {label && (
        <Label 
          htmlFor={field.name} 
          className={cn(labelClassName)}
        >
          {label}
        </Label>
      )}
      
      <Input
        {...field}
        {...props}
        id={field.name}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          error ? `${field.name}-error` : 
          description ? `${field.name}-description` : undefined
        }
        className={cn(
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
      />
      
      {description && !error && (
        <p 
          id={`${field.name}-description`}
          className="text-sm text-muted-foreground"
        >
          {description}
        </p>
      )}
      
      {error && (
        <p 
          id={`${field.name}-error`}
          className={cn("text-sm text-destructive", errorClassName)}
        >
          {error.message}
        </p>
      )}
    </div>
  )
}