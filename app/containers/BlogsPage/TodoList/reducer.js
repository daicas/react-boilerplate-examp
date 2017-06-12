import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  todos: [],
});


const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products.map(product => product.id)
    default:
      return state
  }
}


const todoReducer = combineReducers({
  todos,
  visibleIds,
  visibilityFilter
})

export const getTodos = (state, id) =>
  state.byId[id];

export const getVisibleTodos = state =>
  state.visibleIds.map(id => getTodos(state, id));

export default todoReducer