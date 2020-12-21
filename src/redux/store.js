import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'
import rootReducer from './reducers/rootReducer'
import logger from './middleware/logger'
import generateId from './middleware/generateId';
import api from './middleware/api';
import history from '../history'

const enhancer = applyMiddleware(thunk, routerMiddleware(history), api, generateId, logger);

export default createStore(rootReducer, composeWithDevTools(enhancer));
