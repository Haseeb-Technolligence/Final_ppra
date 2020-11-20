import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormCard from "./formCard";
import ManageLeaveType from "./manageLeaveType";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { insertLeaveType } from "../actions/leave-type-actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const AddLeaveType = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const leaveType = {
      type: e.target.type.value,
    };
    e.target.type.value = "";
    dispatch(insertLeaveType(leaveType));
  }
  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} container justify="center">
              <Typography variant="h5" gutterBottom>
                Add Leave Type
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormCard title="Leave Type">
                <TextField
                  name="type"
                  label="Leave Type"
                  type="string"
                  fullWidth={true}
                  required={true}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
              </FormCard>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "30px" }}
              size="large"
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </form>

        <ManageLeaveType />
      </div>
    </>
  );
};

export default AddLeaveType;
