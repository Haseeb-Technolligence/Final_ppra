import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { loginUser } from "../actions/authAction";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 0 10px 0px grey",
    padding: "5%",
    textAlign: "center",
  },
}));

const BasicTextFields = ({ loginUser, isLoggedIn, loggedInUser, state }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  let [data, setData] = useState({
    email: "",
    password: "",
    login: false,
  });

  const [isLogin, setIsLogin] = useState(isLoggedIn);

  let { email, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  if (isLoggedIn && loggedInUser.designation === "HR") {
    return <Redirect to="/home" />;
  } else if (isLoggedIn && loggedInUser.designation !== "HR") {
    console.log("desb", loggedInUser.designation);
    return <Redirect to="/employeehome" />;
  } else {
  }

  

  const submitData = async (e) => {
    e.preventDefault();
    await loginUser(email, password);
    // .then((result) => {
    //   if (isLoggedIn && loggedInUser.designation === "HR") {
    //     console.log("loginuser", isLoggedIn);
    //     console.log("desa", loggedInUser.designation);
    //     // window.location.href = "/home";
    //   } else if (isLoggedIn && loggedInUser.designation !== "HR") {
    //     console.log("desb", loggedInUser.designation);
    //     // window.location.href = "/employeehome";
    //   }
    // })
    // .catch(() => {});
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={submitData}>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          justify="center"
          style={{ marginTop: "5%" }}
        >
          <Grid item xs={10} md={4}>
            <div className={classes.card}>
              <h2 style={{ color: "#644CE3" }}>WELCOME TO PPRA</h2>
              <TextField
                name="email"
                label="Email"
                type="email"
                onChange={(e) => onChange(e)}
                fullWidth={true}
                required={true}
                size="small"
                margin="normal"
                value={email}
                variant="outlined"
              />
              <TextField
                onChange={(e) => onChange(e)}
                name="password"
                value={password}
                label="Password"
                type="password"
                fullWidth={true}
                required={true}
                size="small"
                margin="normal"
                variant="outlined"
              />
              <Grid container item xs={10} sm={10} md={12} justify="flex-end">
                <a href="#" onClick={()=>alert('Contact HR for password')}>Forget Password?</a>
              </Grid>
              <Grid container item xs={10} sm={10} md={12} justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "30px" }}
                  size="large"
                  type="submit"
                  disableElevation
                >
                  LOGIN
                </Button>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    loggedInUser: state.authReducer.loggedInUser,
    state: state,
  };
};

export default connect(mapStateToProps, { loginUser })(BasicTextFields);
