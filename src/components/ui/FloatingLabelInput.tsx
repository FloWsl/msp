'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const FloatingLabelInput = ({
  label,
  error,
  className,
  required,
  ...props
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative">
      <input
        {...props}
        className={cn(
          'peer h-14 w-full rounded-lg border-2 bg-background px-4 pt-4 text-secondary transition-all',
          'placeholder-transparent focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          error
            ? 'border-destructive focus:border-destructive focus:ring-destructive/20'
            : 'border-input',
          className
        )}
        onFocus={(e) => {
          setIsFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          setHasValue(e.target.value.length > 0)
          props.onBlur?.(e)
        }}
        onChange={(e) => {
          setHasValue(e.target.value.length > 0)
          props.onChange?.(e)
        }}
      />
      <label
        className={cn(
          'absolute left-4 top-4 origin-[0] transform text-sm text-secondary/60 transition-all duration-200',
          'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base',
          'peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary',
          hasValue && '-translate-y-3 scale-75',
          error && 'peer-focus:text-destructive'
        )}
      >
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}
