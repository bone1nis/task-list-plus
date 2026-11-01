import './ActiveCount.scss'
import { pluralize } from '@/shared/lib'
import { ACTIVE_FORMS } from '../../config/constants'

export interface ActiveCountProps {
  count: number
}

export const ActiveCount = ({ count }: ActiveCountProps) => (
  <span className="active-count" aria-live="polite">
    {count} {pluralize(count, ACTIVE_FORMS)}
  </span>
)
