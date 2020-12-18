import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import logger from './middleware/logger'
import generateId from './middleware/generateId';

const enhancer = applyMiddleware(generateId, logger);

export default createStore(rootReducer, composeWithDevTools(enhancer));
