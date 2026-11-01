import { FILTERS } from '../model/filter'
import type { Filter } from '../model/filter'

const LABELS: Record<Filter, string> = {
  all: 'Все',
  active: 'Активные',
  completed: 'Выполненные',
}

export const FILTER_OPTIONS = FILTERS.map((value) => ({ value, label: LABELS[value] }))
