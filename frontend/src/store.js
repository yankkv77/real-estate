import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Combine reducers (currently empty)
const reducer = combineReducers({});

// Set initial state (currently empty )
const initialState = {};

// Define middleware (currently only using thunk)
const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware and use Redux DevTools extensions
);

export default store;
