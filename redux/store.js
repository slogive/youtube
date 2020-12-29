import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
  navBarVisibility: true,
  searchValue: '',
  searchStatus: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        navBarVisibility: !state.navBarVisibility,
      };
    case 'SEARCH':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'SEARCH_STATUS':
      return {
        ...state,
        searchStatus: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, devToolsEnhancer());

export default store;
