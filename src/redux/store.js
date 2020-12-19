import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import logger from './middleware/logger'
import generateId from './middleware/generateId';
import api from './middleware/api';

const enhancer = applyMiddleware(thunk, api, generateId, logger);

export default createStore(rootReducer, composeWithDevTools(enhancer));
