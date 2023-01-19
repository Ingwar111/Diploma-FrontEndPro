import { combineReducers } from "redux";

const initial = { a: 123, b: '123'};
const reduser = { state = initial} => state;

const rootReducer = combineReducers({ reducer });

export default rootReducer;

export type IState = ReturnType<typeof rootReducer>;