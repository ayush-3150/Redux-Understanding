import { createStore } from "redux";
import CakeReducer from "./cakes/cakeReducer";

const store=createStore(CakeReducer)

export default store