import React, { useEffect } from "react";
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
import { insertLeave, fetchLeave } from "../../actions/user-leave-actions";
import { fetchLeaveType } from "../../actions/leave-type-actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

const AddLeave = (props) => {
  useEffect(() => {
    dispatch(fetchLeaveType());
  }, []);
  const classes = useStyles();
  const dispatch = useDispatch();
  const leaveTypeList = useSelector(
    (state) => state.leaveTypeReducer.leaveTypeList
  );
  const loggedInUser = useSelector((state) => state.authReducer.loggedInUser);
  const department = loggedInUser.department;
  const leaveTypeOptions = leaveTypeList.map((leave) => {
    return (
      <option key={leave.type} value={leave.type}>
        {leave.type}
      </option>
    );
  });
  console.log(leaveTypeOptions);
  function handleSubmit(e) {
    e.preventDefault();
    const leave = {
      type: e.target.leavetype.value,
      from: e.target.from.value,
      to: e.target.to.value,
      authority: e.target.authority.value,
      comment: e.target.comment.value,
      employeeId: loggedInUser._id,
      department: department,
      status: "Pending",
    };
    e.target.leavetype.value = "";
    e.target.from.value = "";
    e.target.to.value = "";
    e.target.authority.value = "";
    e.target.comment.value = "";
    dispatch(insertLeave(leave));
  }
  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} container justify="center">
              <Typography variant="h5" gutterBottom>
                Apply For Leave
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormCard title="Leave Details">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Select Leave Approving Authority
                  </InputLabel>
                  <Select
                    native
                    required
                    label="Select Leave Approving Authority"
                    name="authority"
                  >
                    <option aria-label="None" value="" />
                    <option value="Deputy Director">Deputy Director</option>
                    <option value="Director">Director</option>
                    <option value="Director General">Director General</option>
                    <option value="Managing Director">Managing Director</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Select Leave Type
                  </InputLabel>
                  <Select
                    native
                    required
                    label="Select Leave Type"
                    name="leavetype"
                  >
                    <option aria-label="None" value="" />
                    {leaveTypeOptions}
                  </Select>
                </FormControl>
                <TextField
                  name="from"
                  type="date"
                  size="small"
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  variant="outlined"
                />
                <FormLabel component="legend">From *</FormLabel>
                <TextField
                  name="to"
                  type="date"
                  size="small"
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  variant="outlined"
                />
                <FormLabel component="legend">To *</FormLabel>
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
              Apply
            </Button>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default AddLeave;
