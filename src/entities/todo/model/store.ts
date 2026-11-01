import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { sanitizeTodos } from './sanitize'
import {
  addTodo,
  clearCompleted,
  createTodo,
  moveTodo,
  removeTodo,
  toggleTodo,
  updateTodoText,
} from './todos'
import type { Todo } from './types'

export const STORAGE_KEY = 'zaloghub.todos.v1'

interface TodoState {
  todos: Todo[]
  add: (text: string) => void
  toggle: (id: string) => void
  remove: (id: string) => void
  edit: (id: string, text: string) => void
  reorder: (activeId: string, overId: string) => void
  clearDone: () => void
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      add: (text) => set((s) => ({ todos: addTodo(s.todos, createTodo(text)) })),
      toggle: (id) => set((s) => ({ todos: toggleTodo(s.todos, id) })),
      remove: (id) => set((s) => ({ todos: removeTodo(s.todos, id) })),
      edit: (id, text) => set((s) => ({ todos: updateTodoText(s.todos, id, text) })),
      reorder: (activeId, overId) => set((s) => ({ todos: moveTodo(s.todos, activeId, overId) })),
      clearDone: () => set((s) => ({ todos: clearCompleted(s.todos) })),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ todos: s.todos }),
      merge: (persisted, current) => ({
        ...current,
        todos: sanitizeTodos((persisted as { todos?: unknown } | null)?.todos),
      }),
    },
  ),
)
