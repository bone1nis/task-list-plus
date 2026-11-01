import { useMemo, useState } from 'react'
import { countActive, useTodoStore } from '@/entities/todo'
import { filterTodos } from '@/features/filter-todos'
import type { Filter } from '@/features/filter-todos'

export const useTodoBoard = () => {
  const { todos, add, toggle, remove, edit, reorder, clearDone } = useTodoStore()
  const [filter, setFilter] = useState<Filter>('all')
  const visible = useMemo(() => filterTodos(todos, filter), [todos, filter])
  const activeCount = countActive(todos)

  return {
    hasTodos: todos.length > 0,
    visible,
    filter,
    setFilter,
    activeCount,
    hasCompleted: activeCount < todos.length,
    add,
    toggle,
    remove,
    edit,
    reorder,
    clearDone,
  }
}
