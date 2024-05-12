// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducers from "../reducer/rootReducer";
// //includes: reducers, middleware
// const store = createStore(reducers, composeWithDevTools());

// export default store;

import { createStore } from "redux";
import reducers from "../reducer/rootReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
