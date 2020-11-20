import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MiniDrawer from "./components/drawer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { allReducers } from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { loginForm } from "./components/loginForm";
import BasicTextFields from "./components/dashboard";

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
