import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AutoGrid from "./components/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { allReducers } from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ManageLeave from "./components/manageLeave";
import EmployeeForm from "./components/employeeForm";
import { loginForm } from "./components/loginForm";
import BasicTextFields from "./components/MainLogin";
import { loadUser } from "./actions/authAction";
import MaterialTableDemo from "./components/manageEmployees";
import AddLeaveType from "./components/addLeaveType";
import AddLeave from "./components/employeeComponents/addLeave";
import checkLeaveStatus from "./components/employeeComponents/checkLeaveStatus";

import { setToken } from "./actions/setToken";
import MiniDrawer from "./components/drawer";
import EmployeeMiniDrawer from "./components/employeeComponents/drawer";
import { aaa } from "./components/aaa";

const store = createStore(allReducers, applyMiddleware(thunk));

if (localStorage.getItem("token")) {
  setToken(localStorage.getItem("token"));
}

function App() {
  useEffect(() => {
    // store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={BasicTextFields} />
          <Route path="/home" component={MiniDrawer} />
          <Route path="/employeehome" component={EmployeeMiniDrawer} />
          <Route exact path="/aaa" component={aaa} />
          {/* <Route exact path="/home/dashboard" component={AutoGrid} /> */}
          {/* <Route path="/home/AddEmployee" component={EmployeeForm} /> */}
          {/* <Route path="/ManageEmployee" component={MaterialTableDemo} />
          <Route path="/ManageLeaveType" component={AddLeaveType} />
          <Route path="/ApplyForLeave" component={AddLeave} />
          <Route path="/CheckLeaveStatus" component={checkLeaveStatus} />
          <Route path="/ManageLeave" component={ManageLeave} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
