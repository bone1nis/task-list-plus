import { describe, expect, it } from 'vitest'
import type { Todo } from './types'
import {
  addTodo,
  clearCompleted,
  countActive,
  createTodo,
  moveTodo,
  removeTodo,
  toggleTodo,
  updateTodoText,
} from './todos'

const make = (id: string, completed = false): Todo => ({
  id,
  text: `task ${id}`,
  completed,
  createdAt: 1,
})

describe('операции над задачами', () => {
  it('создаёт активную задачу с уникальным id', () => {
    const a = createTodo('a', 100)
    const b = createTodo('b', 100)
    expect(a).toMatchObject({ text: 'a', completed: false, createdAt: 100 })
    expect(a.id).not.toBe(b.id)
  })

  it('добавляет задачу в начало, не мутируя исходный массив', () => {
    const list = [make('1')]
    const next = addTodo(list, make('2'))
    expect(next.map((t) => t.id)).toEqual(['2', '1'])
    expect(list).toHaveLength(1)
  })

  it('переключает только нужную задачу', () => {
    const next = toggleTodo([make('1'), make('2')], '2')
    expect(next.map((t) => t.completed)).toEqual([false, true])
    expect(toggleTodo(next, '2')[1]?.completed).toBe(false)
  })

  it('удаляет задачу по id', () => {
    expect(removeTodo([make('1'), make('2')], '1').map((t) => t.id)).toEqual(['2'])
  })

  it('очищает выполненные задачи', () => {
    const next = clearCompleted([make('1', true), make('2'), make('3', true)])
    expect(next.map((t) => t.id)).toEqual(['2'])
  })

  it('считает активные задачи', () => {
    expect(countActive([make('1', true), make('2'), make('3')])).toBe(2)
    expect(countActive([])).toBe(0)
  })

  it('меняет текст только нужной задачи', () => {
    const next = updateTodoText([make('1'), make('2')], '2', 'новый')
    expect(next.map((t) => t.text)).toEqual(['task 1', 'новый'])
  })

  it('переносит задачу на место другой', () => {
    const list = [make('1'), make('2'), make('3')]
    expect(moveTodo(list, '1', '3').map((t) => t.id)).toEqual(['2', '3', '1'])
    expect(moveTodo(list, '3', '1').map((t) => t.id)).toEqual(['3', '1', '2'])
  })

  it('сохраняет порядок скрытых задач при переносе среди видимых', () => {
    const list = [make('1'), make('2'), make('3')]
    const moved = moveTodo(list, '1', '3')
    expect(moved.map((t) => t.id)).toEqual(['2', '3', '1'])
    expect(moved.filter((t) => t.id !== '2').map((t) => t.id)).toEqual(['3', '1'])
  })

  it('не меняет порядок, если id не найден', () => {
    const list = [make('1'), make('2')]
    expect(moveTodo(list, '1', 'x').map((t) => t.id)).toEqual(['1', '2'])
  })
})
