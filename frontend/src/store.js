import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { propertyListReducer } from "./reducers/propertyReducer";

// Added a value to the state
const reducer = combineReducers({
    propertyList: propertyListReducer,
});

// Triggered reducer we set properties to the initial state
const initialState = {};

// Define middleware (currently only using thunk)
const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware and use Redux DevTools extensions
);

export default store;
