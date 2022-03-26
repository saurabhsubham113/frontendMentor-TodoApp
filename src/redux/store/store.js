import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "../reducer/todoReducer";

//whatever name we pust as reducers that will be the state name
//i.e todoreducers can be accessed as state.todos
const rootReducer = combineReducers({ todos: todoReducer })
const store = createStore(rootReducer, composeWithDevTools())

export default store