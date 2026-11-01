import { Tabs } from '@/shared/ui'
import { FILTER_OPTIONS } from '../../config/constants'
import type { Filter } from '../../model/filter'

export interface TodoFilterProps {
  value: Filter
  onChange: (value: Filter) => void
}

export const TodoFilter = ({ value, onChange }: TodoFilterProps) => (
  <Tabs label="Фильтр задач" options={FILTER_OPTIONS} value={value} onChange={onChange} />
)
