import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
         warning: // Added variant
          "border-yellow-500/50 text-yellow-700 bg-yellow-50 dark:border-yellow-600/60 dark:text-yellow-300 dark:bg-yellow-900/20 [&>svg]:text-yellow-500 dark:[&>svg]:text-yellow-400",
        info: // Added variant
          "border-blue-500/50 text-blue-700 bg-blue-50 dark:border-blue-600/60 dark:text-blue-300 dark:bg-blue-900/20 [&>svg]:text-blue-500 dark:[&>svg]:text-blue-400",
         success: // Added variant (optional, similar to default but explicit)
           "border-green-500/50 text-green-700 bg-green-50 dark:border-green-600/60 dark:text-green-300 dark:bg-green-900/20 [&>svg]:text-green-500 dark:[&>svg]:text-green-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
