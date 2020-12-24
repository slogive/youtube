import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
  navBar: {
    status: false,
  },
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer, devToolsEnhancer());

export default store;
