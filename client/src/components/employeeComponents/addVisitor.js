import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormCard from "../formCard";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { insertVisitor, fetchVisitor } from "../../actions/visitors-actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

const AddVisitor = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const visitor = {
      name: e.target.name.value,
      cnic: e.target.cnic.value,
      number: e.target.number.value,
      purpose: e.target.purpose.value,
      dateTime: new Date(),
    };
    e.target.name.value = "";
    e.target.cnic.value = "";
    e.target.number.value = "";
    e.target.purpose.value = "";
    dispatch(insertVisitor(visitor));
    dispatch(fetchVisitor());
  }
  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} container justify="center">
              <Typography variant="h5" gutterBottom>
                Add Visitor
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormCard title="Visitor Details">
                <TextField
                  name="name"
                  label="Name"
                  type="string"
                  fullWidth={true}
                  required={true}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  name="cnic"
                  label="CNIC"
                  type="number"
                  fullWidth={true}
                  required={true}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  name="number"
                  label="Phone Number"
                  type="number"
                  fullWidth={true}
                  required={true}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
                <TextareaAutosize
                  className={classes.formControl}
                  aria-label="minimum height"
                  name="purpose"
                  required={true}
                  color="white"
                  rowsMin={3}
                  placeholder="Purpose of visiting"
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

export default AddVisitor;
