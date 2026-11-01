import { describe, expect, it } from 'vitest'
import type { Todo } from '@/entities/todo'
import { filterTodos } from './filter'

const make = (id: string, completed: boolean): Todo => ({
  id,
  text: `task ${id}`,
  completed,
  createdAt: 1,
})

describe('filterTodos', () => {
  const list = [make('1', true), make('2', false), make('3', true)]

  it('возвращает все задачи для all', () => {
    expect(filterTodos(list, 'all')).toHaveLength(3)
  })

  it('возвращает только активные задачи', () => {
    expect(filterTodos(list, 'active').map((t) => t.id)).toEqual(['2'])
  })

  it('возвращает только выполненные задачи', () => {
    expect(filterTodos(list, 'completed').map((t) => t.id)).toEqual(['1', '3'])
  })
})
