import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./reduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
