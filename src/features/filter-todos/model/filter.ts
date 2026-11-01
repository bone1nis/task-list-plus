import type { Todo } from '@/entities/todo'

export type Filter = 'all' | 'active' | 'completed'

export const FILTERS: readonly Filter[] = ['all', 'active', 'completed']

export const filterTodos = (todos: readonly Todo[], filter: Filter): Todo[] => {
  switch (filter) {
    case 'active':
      return todos.filter((t) => !t.completed)
    case 'completed':
      return todos.filter((t) => t.completed)
    case 'all':
      return [...todos]
  }
}
