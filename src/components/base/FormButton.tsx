import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean
  loadingText?: string
}

export function FormButton({
  isSubmitting = false,
  loadingText = "Loading...",
  children,
  disabled,
  className,
  ...props
}: FormButtonProps) {
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
