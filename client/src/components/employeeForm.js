import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import FormCard from "./formCard";
import { connect } from "react-redux";
import { insertEmployee, fetchEmployees,updateEmployee } from "../actions/employee-actions";
import { getDepartment } from "../actions/dptActions";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

function EmployeeForm(props) {
  useEffect(() => {
    props.getDepartment();
  }, []);
  const [photo, setPhoto] = useState("");
  const classes = useStyles();
  let initialValues = undefined;
  const position= ['PS to Managing Director','Managing Director','Director General','Director','Deputy Director','HR','Receptionist','Web Designer','Web Analyst','Assistant','Stenographer','Stenotypist','Cashier','Hardware Technician','UDC','Data Entry Operator','LDC','Driver','Dispatch Rider','Generator Operator','Qasid','Naib Qasid','Sweeper'];
  
  let operation = 'Add'
  if (props.location.pathname === "/home/EditEmployee") {
    operation= 'Update'
    initialValues = {
      name: props.employeeState.name,
      email: props.employeeState.email,
      fatherName:props.employeeState.fatherName,
      dob:props.employeeState.dob,
      gender:props.employeeState.gender,
      maritalStatus:props.employeeState.maritialStatus,
      phone:props.employeeState.phoneNumber,
      address:props.employeeState.address,
      nationality:props.employeeState.nationality,
      password:"Enter password, if you want to change password",
      department:props.employeeState.department,
      designation:props.employeeState.designation,
      status:props.employeeState.status,
      doj:props.employeeState.joiningDate,
      id:props.employeeState._id
    };
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (props.location.pathname === "/home/EditEmployee") {
      const employee = new FormData();
      employee.append("name", e.target.name.value);
      employee.append("fatherName", e.target.fatherName.value);
      employee.append("email", e.target.email.value);
      if(e.target.password.value.length > 0 )employee.append("password", e.target.password.value);
      employee.append("dob", e.target.dob.value);
      employee.append("gender", e.target.gender.value);
      employee.append("maritialStatus", e.target.maritalStatus.value);
      employee.append("phoneNumber", e.target.phone.value);
      employee.append("address", e.target.address.value);
      employee.append("nationality", e.target.nationality.value);
      employee.append("department", e.target.department.value);
      employee.append("designation", e.target.designation.value);
      employee.append("status", e.target.status.value);
      employee.append("joiningDate", e.target.doj.value);
      employee.append("leavingDate", "");
      employee.append("resume", "empty");
      employee.append("offerLetter", "empty");
      employee.append("contract", "empty");
      employee.append("salary", "empty");
      employee.append("accountNumber", "empty");
      employee.append("accountHolderName", "empty");
      employee.append("bankName", "empty");
      employee.append("branchCode", "empty");
      if(photo!== "") employee.append("photo", photo);
      e.target.name.value = "";
      e.target.fatherName.value = "";
      e.target.email.value = "";
      e.target.password.value = "";
      e.target.dob.value = "";
      e.target.gender.value = "";
      e.target.maritalStatus.value = "";
      e.target.phone.value = "";
      e.target.address.value = "";
      e.target.nationality.value = "";
      e.target.department.value = "";
      e.target.designation.value = "";
      e.target.status.value = "";
      e.target.doj.value = "";
      // e.target.salary.value = "";
      // e.target.accountNumber.value = "";
      // e.target.accountHolder.value = "";
      // e.target.bankName.value = "";
      // e.target.branchCode.value = "";
      props.updateEmployee(initialValues.id,employee).then((error) => {
        if (error) {
          alert("Sorry, error occur try again");
        } else {
          alert("Employee Updated Successfully");
          setPhoto("");
        }
      });
    }
    else{
      const employee = new FormData();
      employee.append("name", e.target.name.value);
      employee.append("fatherName", e.target.fatherName.value);
      employee.append("email", e.target.email.value);
      employee.append("password", e.target.password.value);
      employee.append("dob", e.target.dob.value);
      employee.append("gender", e.target.gender.value);
      employee.append("maritialStatus", e.target.maritalStatus.value);
      employee.append("phoneNumber", e.target.phone.value);
      employee.append("address", e.target.address.value);
      employee.append("nationality", e.target.nationality.value);
      employee.append("department", e.target.department.value);
      employee.append("designation", e.target.designation.value);
      employee.append("status", e.target.status.value);
      employee.append("joiningDate", e.target.doj.value);
      employee.append("leavingDate", "");
      employee.append("resume", "empty");
      employee.append("offerLetter", "empty");
      employee.append("contract", "empty");
      employee.append("salary", "empty");
      employee.append("accountNumber", "empty");
      employee.append("accountHolderName", "empty");
      employee.append("bankName", "empty");
      employee.append("branchCode", "empty");
      employee.append("photo", photo);
      e.target.name.value = "";
      e.target.fatherName.value = "";
      e.target.email.value = "";
      e.target.password.value = "";
      e.target.dob.value = "";
      e.target.gender.value = "";
      e.target.maritalStatus.value = "";
      e.target.phone.value = "";
      e.target.address.value = "";
      e.target.nationality.value = "";
      e.target.department.value = "";
      e.target.designation.value = "";
      e.target.status.value = "";
      e.target.doj.value = "";
      // e.target.salary.value = "";
      // e.target.accountNumber.value = "";
      // e.target.accountHolder.value = "";
      // e.target.bankName.value = "";
      // e.target.branchCode.value = "";
      console.log('emp in',employee)
      props.insertEmployee(employee).then((error) => {
        if (error) {
          alert("Sorry, error occur try again");
        } else {
          alert("Employee Added Successfully");
          setPhoto("");
        }
      });
    }
  
  }
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} container justify="center">
            <Typography variant="h5" gutterBottom>
              {operation} Employee
            </Typography>
          </Grid>
          {/* Personal Details */}
          <Grid item xs={12} md={6}>
            <FormCard title="Personal Details">
              <TextField
                name="name"
                label="Name"
                type="string"
                fullWidth={true}
                required={true}
                size="small"
                defaultValue={initialValues ? initialValues.name : ""}
                margin="normal"
                variant="outlined"
              />
              <TextField
                name="fatherName"
                label="Father Name"
                type="string"
                margin="normal"
                size="small"
                defaultValue={initialValues ? initialValues.fatherName : ""}
                required={true}
                fullWidth={true}
                variant="outlined"
              />

              <TextField
                name="dob"
                type="date"
                size="small"
                margin="normal"
                required={initialValues ?false:true}
                defaultValue={initialValues ? initialValues.dob : ""}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">Date of birth *</FormLabel>
              <Grid item container style={{ marginTop: "20px" }}>
                <Grid item xs={6}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" name="gender"  defaultValue={initialValues ? initialValues.gender : ""}>
                    <FormControlLabel
                      value="Female"
                      control={<Radio required={true} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio required={true} />}
                      label="Male"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel component="legend">Marital Status</FormLabel>
                  <RadioGroup aria-label="maritalStatus" name="maritalStatus"  defaultValue={initialValues ? initialValues.maritalStatus : ""}>
                    <FormControlLabel
                      value="Married"
                      control={<Radio required={true} />}
                      label="Married"
                    />
                    <FormControlLabel
                      value="Unmarried"
                      control={<Radio required={true} />}
                      label="Unmarried"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <TextField
                name="phone"
                label="Phone Number"
                type="number"
                defaultValue={initialValues ? initialValues.phone : ""}
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                name="address"
                label="Address"
                type="string"
                defaultValue={initialValues ? initialValues.address : ""}
                margin="normal"
                size="small"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                name="nationality"
                label="Nationality"
                defaultValue={initialValues ? initialValues.nationality : ""}
                type="string"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                name="photo"
                type="file"
                size="small"
                margin="normal"
                required={initialValues?false:true}
                fullWidth={true}
                variant="outlined"
                
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <FormLabel component="legend">Select photo *</FormLabel>
            </FormCard>
          </Grid>
          <Grid item xs={12} md={6} container>
            {/* Account Login */}
            <Grid item xs={12}>
              <FormCard title="Account Login">
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  defaultValue={initialValues ? initialValues.email : ""}
                  size="small"
                  required={true}
                  margin="normal"
                  fullWidth={true}
                  variant="outlined"
                />
                <TextField
                  name="password"
                  label={initialValues ? initialValues.password : "Password"}
                  type="password"
                  margin="normal"
                  size="small"
                  required={initialValues?false:true}
                  fullWidth={true}
                  variant="outlined"
                />
              </FormCard>
            </Grid>
            <Grid item xs={12}>
              {/* Company Details */}
              <FormCard title="Organization Details">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Select Department
                  </InputLabel>
                  <Select
                    native
                    required
                    defaultValue={initialValues ? initialValues.department : ""}
                    label="Select Department"
                    name="department"
                  >
                    <option aria-label="None" value="" />
                    {props.departments.map((dept) => {
                      return <option value={dept.type}>{dept.type}</option>;
                    })}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Select Designation
                  </InputLabel>
                  <Select
                    native
                    required
                    defaultValue={initialValues ? initialValues.designation : ""}
                    label="Select Designation"
                    name="designation"
                  >
                    <option aria-label="None" value="" />
                    {position.map((pos) => {
                      return <option value={pos}>{pos}</option>;
                    })}
                    {/* <option value="Software Developer">
                      Software Developer
                    </option>
                    <option value="Receptionist">Receptionist</option>
                    <option value="HR">HR</option>
                    <option value="Deputy Director">Deputy Director</option>
                    <option value="Director">Director</option>
                    <option value="Director General">Director General</option>
                    <option value="Managing Director">Managing Director</option> */}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Status
                  </InputLabel>
                  <Select native required label="Select Status" name="status"  defaultValue={initialValues ? initialValues.status : ""}>
                    <option aria-label="None" value="" />
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Select>
                </FormControl>
                <TextField
                  name="doj"
                  type="date"
                  size="small"
                  margin="normal"
                  required={initialValues ?false:true}
                  defaultValue={initialValues ? initialValues.doj : ""}
                  fullWidth={true}
                  variant="outlined"
                />
                <FormLabel component="legend">Date of joining *</FormLabel>
                <TextField
                  name="dol"
                  type="date"
                  size="small"
                  disabled
                  // defaultValue={initialValues ? initialValues.dol : ""}
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  variant="outlined"
                />
                <FormLabel component="legend">Date of Leaving</FormLabel>
              </FormCard>
            </Grid>
          </Grid>
          {/* Documents Grid */}
          {/* <Grid item xs={12} md={6}>
            <FormCard title="Documents">
              <TextField
                name="resume"
                type="file"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">Select Resume *</FormLabel>
              <TextField
                name="offerLetter"
                type="file"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">Select Offer Letter *</FormLabel>
              <TextField
                name="aggrement"
                type="file"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">
                Select Aggrement/Contract *
              </FormLabel>
            </FormCard>
          </Grid>
          salary Details */}
          {/* <Grid item xs={12} md={6}>
            <FormCard title="Salary & Bank Details">
              <TextField
                name="salary"
                type="number"
                size="small"
                label="Basic Salary in Rupee"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                name="accountHolder"
                type="text"
                size="small"
                label="Account Holder Name"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                name="accountNumber"
                type="text"
                size="small"
                label="Account Number"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                name="bankName"
                type="text"
                size="small"
                label="Bank Name"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                name="branchCode"
                type="number"
                size="small"
                label="Branch Code"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
            </FormCard>
          </Grid> */}
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "30px" }}
            size="large"
            type="submit"
            // onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    insertEmployee: (employee) => dispatch(insertEmployee(employee)),
    getDepartment: () => dispatch(getDepartment()),
    updateEmployee: (id,employee)=> dispatch(updateEmployee(id,employee)),
  };
};
const mapStateToProps = (state) => {
  return {
    departments: state.dptReducer.departments,
    employeeState: state.employeesReducer.oneEmployee,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
