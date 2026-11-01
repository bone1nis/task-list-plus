import type { Filter } from '@/features/filter-todos'
import { EmptyState } from '@/shared/ui'
import { EMPTY_STATES } from '../../config/constants'

export interface TodoBoardEmptyProps {
  filter: Filter
}

export const TodoBoardEmpty = ({ filter }: TodoBoardEmptyProps) => {
  const { Icon, title, description } = EMPTY_STATES[filter]

  return (
    <EmptyState icon={<Icon width={28} height={28} />} title={title} description={description} />
  )
}
