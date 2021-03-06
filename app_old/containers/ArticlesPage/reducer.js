/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';


// The initial state of the App
const initialState = fromJS({
  articlesId: 0,
});

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ARTICLESID':

      return state
        .set('articlesId', action.articlesId);
    default:
      return state;
  }
}

export default articlesReducer;
