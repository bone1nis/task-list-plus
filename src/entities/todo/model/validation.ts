import { string, ValidationError } from 'yup'

export const MAX_TODO_LENGTH = 120

export type ValidationResult = { ok: true; value: string } | { ok: false; error: string }

const todoTextSchema = string()
  .trim()
  .required('Введите текст задачи')
  .max(MAX_TODO_LENGTH, `Не более ${MAX_TODO_LENGTH} символов`)

export const validateTodoText = (raw: string): ValidationResult => {
  try {
    return { ok: true, value: todoTextSchema.validateSync(raw) }
  } catch (error) {
    if (ValidationError.isError(error)) return { ok: false, error: error.message }
    throw error
  }
}
