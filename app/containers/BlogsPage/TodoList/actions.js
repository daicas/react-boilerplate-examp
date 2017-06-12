import gettodos from './api/gettodos'

let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const receiveTodos = todos => ({
  type: 'RECEIVE_TODO',
  todos: todos
})

export const getAllTodos = () => dispatch => {
  gettodos.getTodos(todos => {
    dispatch(receiveTodos(todos))
  })
}