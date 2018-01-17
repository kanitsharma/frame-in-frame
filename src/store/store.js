import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from './logger'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

// Preparing middlewares
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(logger, sagaMiddleware)

// Creating store
const store = createStore(rootReducer, middleware)

// Running Sagas
sagaMiddleware.run(rootSaga)

// enabling HMR
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
}

export default store
