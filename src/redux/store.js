import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducer/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middlewares/cartCounter";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);

export default store;
