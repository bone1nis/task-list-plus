import './Input.scss'
import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: string
  error?: string | null
  compact?: boolean
}

export const Input = ({ label, error, compact, className, ...rest }: InputProps) => {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={cn('field', compact && 'field--compact')}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input
        id={id}
        className={cn('input', compact && 'input--compact', error && 'input--invalid', className)}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      <p id={errorId} className="field__error" role="alert">
        {error}
      </p>
    </div>
  )
}
