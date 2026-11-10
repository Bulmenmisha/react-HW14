// createStore в Redux 5 помечен как устаревший (рекомендуют Redux Toolkit),
// но работает так же. В задании требуется именно он.
import { legacy_createStore as createStore } from 'redux';
import userReducer from './reducers.js';

const store = createStore(userReducer);

export default store;
