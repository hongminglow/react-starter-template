import * as React from "react"
import type { Control, FieldValues } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface FormButtonProps<
  TFieldValues extends FieldValues = FieldValues
> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  control?: Control<TFieldValues>
  isSubmitting?: boolean
  loadingText?: string
}

export function FormButton<
  TFieldValues extends FieldValues = FieldValues
>({
  control,
  isSubmitting = false,
  loadingText = "Loading...",
  children,
  disabled,
  className,
  ...props
}: FormButtonProps<TFieldValues>) {
  const isDisabled = disabled || isSubmitting

  return (
    <Button
      {...props}
      disabled={isDisabled}
      className={cn(className)}
    >
      {isSubmitting ? loadingText : children}
    </Button>
  )
}