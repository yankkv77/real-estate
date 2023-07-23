import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { propertyListReducer } from "./reducers/propertyReducer";
import { agentListReducer } from "./reducers/agentReducer";
import { savedReducer } from "./reducers/savedReducer";

// Added a value to the state
const reducer = combineReducers({
    propertyList: propertyListReducer,
    agentList: agentListReducer,
    saved: savedReducer,
});

const savedPropertiesFromStorage = localStorage.getItem("savedProperties")
    ? JSON.parse(localStorage.getItem("savedProperties"))
    : [];

// Triggered reducer we set properties to the initial state
const initialState = {
    saved: {savedProperties: savedPropertiesFromStorage}
};

// Define middleware (currently only using thunk)
const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware and use Redux DevTools extensions
);

export default store;
