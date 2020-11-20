import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { logOut } from "../actions/authAction";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

export const aaa = () => {
  // const dispatch = useDispatch();
  return (
    <div>
      <h1>YOU ARE LOGGED IN</h1>
      <Button onClick={() => localStorage.clear()}>LOGOUT</Button>
    </div>
  );
};
