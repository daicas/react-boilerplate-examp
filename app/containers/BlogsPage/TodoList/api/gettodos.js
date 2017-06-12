/**
 * Mocking client-server processing
 */
import _todos from './todos.json'

const TIMEOUT = 100

export default {
  getTodos: (cb, timeout) => setTimeout(() => cb(_todos), timeout || TIMEOUT)
}
