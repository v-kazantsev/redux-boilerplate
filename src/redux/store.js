import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from 'redux/reducers/rootReducer'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

const configureStore = () => {
  const router = routerMiddleware(history)
	const middlewares = [logger, router]
	const middlewareEnhancer = applyMiddleware(...middlewares)
	const storeEnhancers = [middlewareEnhancer]
	const composedEnhancer = composeWithDevTools(...storeEnhancers)
	const store = createStore(rootReducer, composedEnhancer)
	return store
}

export default configureStore