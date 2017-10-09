import Thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';

const middleWare = [Thunk,logger];

const Store = createStore(reducers,applyMiddleware(...middleWare));

export default Store;