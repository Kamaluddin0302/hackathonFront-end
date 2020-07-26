import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import Reducre from './Reducer/index.js';
let Store = createStore(Reducre, applyMiddleware(thunk));
export default Store;
