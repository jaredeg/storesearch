import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//logger
let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

//Initital state either supplied or default an object with todos property of an empty array
export default function configureStore(initialState = { todos: [], user: {} }) {
  return finalCreateStore(rootReducer, initialState)
}