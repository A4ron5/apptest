import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { articles } from '../features/articles'
import { info } from '../features/profile'
import { login } from '../features/login'

const rootReducer = combineReducers({ articles, info, login })

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))