import './EmptyState.scss'
import type { ReactNode } from 'react'

export interface EmptyStateProps {
  title: string
  description: string
  icon?: ReactNode
}

export const EmptyState = ({ title, description, icon }: EmptyStateProps) => {
  return (
    <div className="empty">
      {icon && (
        <div className="empty__icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h2 className="empty__title">{title}</h2>
      <p className="empty__text">{description}</p>
    </div>
  )
}
