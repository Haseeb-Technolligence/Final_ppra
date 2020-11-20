import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormCard from "./formCard";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { insertNotice, fetchNotice } from "../actions/notice-actions";
import { fetchLeaveType } from "../actions/leave-type-actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

const AddNotice = (props) => {
  useEffect(() => {
    dispatch(fetchNotice());
  }, []);
  const classes = useStyles();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const notice = {
      title: e.target.title.value,
      date: e.target.date.value,
      comment: e.target.comment.value,
    };
    e.target.title.value = "";
    e.target.date.value = "";
    e.target.comment.value = "";
    dispatch(insertNotice(notice));
  }
  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} container justify="center">
              <Typography variant="h5" gutterBottom>
                Add Notice
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormCard title="Notice Details">
                <FormControl variant="outlined" className={classes.formControl}>
                  <TextField
                    name="title"
                    label="Enter Title"
                    type="string"
                    fullWidth={true}
                    required={true}
                    size="small"
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
                <TextField
                  name="date"
                  type="date"
                  size="small"
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  variant="outlined"
                />
                <FormLabel component="legend">Date *</FormLabel>
                <TextareaAutosize
                  className={classes.formControl}
                  aria-label="minimum height"
                  name="comment"
                  required={true}
                  color="white"
                  rowsMin={3}
                  placeholder="Write comment here"
                />
              </FormCard>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "30px" }}
              size="large"
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default AddNotice;
