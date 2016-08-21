import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

//let is for scope of course
let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo'
	}],
	user: {
		username: 'jared',
		id: 13
	}
}

let store = configureStore(initialState)

//configure and create our store
//createStore (reducers, initital state)

render(
  <Provider store={store}>
  	<App/>
  </Provider>,
  document.getElementById('app')
)