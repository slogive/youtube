import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
  navBarVisibility: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        navBarVisibility: !state.navBarVisibility,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, devToolsEnhancer());

export default store;
