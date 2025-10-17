import * as React from "react"
import { useController, type Control, type FieldPath, type FieldValues } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'name' | 'defaultValue'> {
  name: TName
  control: Control<TFieldValues>
  label?: string
  description?: string
  options: Array<{ value: string; label: string }>
  placeholder?: string
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
}

export function FormSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  label,
  description,
  options,
  placeholder,
  className,
  containerClassName,
  labelClassName,
  errorClassName,
  ...props
}: FormSelectProps<TFieldValues, TName>) {
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
      
      <select
        {...field}
        {...props}
        id={field.name}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          error ? `${field.name}-error` : 
          description ? `${field.name}-description` : undefined
        }
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
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