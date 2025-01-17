import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, type, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          type={type}
          className={cn(
            'flex h-11 w-full rounded-lg border border-secondary/20 bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-error focus-visible:ring-error',
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={cn('text-sm', error ? 'text-error' : 'text-secondary/70')}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
