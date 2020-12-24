import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// async function initialState(
//   API = 'https://api.youtube.slogive.xyz',
//   data = {}
// ) {
//   const response = await fetch(API, {
//     method: 'POST',
//     mode: 'no-cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//     body: JSON.stringify(data),
//   });
//   return response;
// }

// initialState();

function initialState() {
  return (dispatch) => {
    fetch('https://api.youtube.slogive.xyz/videos')
      .then((res) => res.json())
      .then(console.log(res))
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer, devToolsEnhancer());

export default store;
