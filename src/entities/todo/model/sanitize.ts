import { boolean, number, object, string } from 'yup'
import type { Todo } from './types'

const todoSchema = object({
  id: string().required(),
  text: string().required(),
  completed: boolean().required(),
  createdAt: number().required(),
}).strict()

const isTodo = (value: unknown): value is Todo => todoSchema.isValidSync(value)

export const sanitizeTodos = (list: unknown): Todo[] =>
  Array.isArray(list) ? list.filter(isTodo) : []
