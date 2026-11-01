import './Checkbox.scss'
import type { InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'
import { CheckIcon } from '@/shared/assets'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export const Checkbox = ({ label, className, ...rest }: CheckboxProps) => (
  <span className={cn('checkbox', className)}>
    <input type="checkbox" className="checkbox__input" aria-label={label} {...rest} />
    <span className="checkbox__box" aria-hidden="true">
      <CheckIcon width={16} height={16} strokeWidth={3} className="checkbox__tick" />
    </span>
  </span>
)
