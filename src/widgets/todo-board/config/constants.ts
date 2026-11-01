import type { Filter } from '@/features/filter-todos'
import { InboxIcon, SearchIcon } from '@/shared/assets'

export const EMPTY_STATES: Record<
  Filter,
  { Icon: typeof InboxIcon; title: string; description: string }
> = {
  all: {
    Icon: InboxIcon,
    title: 'Пока пусто',
    description: 'Добавьте первую задачу, чтобы начать.',
  },
  active: {
    Icon: SearchIcon,
    title: 'Ничего не найдено',
    description: 'Все задачи выполнены.',
  },
  completed: {
    Icon: SearchIcon,
    title: 'Ничего не найдено',
    description: 'Выполненных задач пока нет.',
  },
}
