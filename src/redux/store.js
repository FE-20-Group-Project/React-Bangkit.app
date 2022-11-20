import { createStore } from "redux";
import reducer from "./reducer/rootReducer";

const store = createStore(reducer);


export default store;