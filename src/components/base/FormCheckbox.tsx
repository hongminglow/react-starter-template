import * as React from "react"
import { useController, type Control, type FieldPath, type FieldValues } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface FormCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'type' | 'defaultValue' | 'defaultChecked'> {
  name: TName
  control: Control<TFieldValues>
  label?: string
  description?: string
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
}

export function FormCheckbox<
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
}: FormCheckboxProps<TFieldValues, TName>) {
  const {
    field: { value, onChange, ...field },
    fieldState: { error }
  } = useController({
    name,
    control,
  })

  return (
    <div className={cn("space-y-2", containerClassName)}>
      <div className="flex items-center space-x-2">
        <input
          {...field}
          {...props}
          type="checkbox"
          id={field.name}
          checked={value || false}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${field.name}-error` : 
            description ? `${field.name}-description` : undefined
          }
          className={cn(
            "h-4 w-4 rounded border border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus:ring-destructive",
            className
          )}
        />
        
        {label && (
          <Label 
            htmlFor={field.name} 
            className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", labelClassName)}
          >
            {label}
          </Label>
        )}
      </div>
      
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