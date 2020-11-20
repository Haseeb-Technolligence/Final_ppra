import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormCard from "./formCard";
import Typography from "@material-ui/core/Typography";
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

const Login = (props) => {
  const classes = useStyles();
  function handleSubmit(e) {
    e.preventDefault();
    const loginCredentials = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
  }
  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={3}
            justify="center"
            style={{ marginTop: "5%" }}
          >
            <Grid item xs={12} md={4}>
              <div className={classes.card}>
                <h1 style={{ color: "#644CE3" }}>EMPLOYEE LOGIN</h1>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth={true}
                  required={true}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth={true}
                  required={true}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
                <Grid container item xs={12} justify="flex-end">
                  <a href="#">Forget Password?</a>
                </Grid>
                <Grid container item xs={12} justify="center">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "30px" }}
                    size="large"
                    type="submit"
                  >
                    LOGIN
                  </Button>
                </Grid>
                <a href="#">Login in as Admin?</a>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default Login;
