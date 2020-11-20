import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Redirect } from "react-router-dom";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ApartmentIcon from "@material-ui/icons/Apartment";
import Collapse from "@material-ui/core/Collapse";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";
import DrawerListItem from "./drawerListItem";
import { connect } from "react-redux";
import {
  LeaveAction,
  EmployeeAction,
  DepartmentAction,
  AttendanceAction,
  HolidayAction,
  PayRollAction,
  DailyAction,
  SettingAction,
  DrawerActionOpen,
} from "../actions/drawerAllActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  dplarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  navlink: {
    textDecoration: "none",
    color: "#433E3E",
  },
}));

const DrawerList = (props) => {
  const classes = useStyles();
  return (
    <>
      <List>
        {/* dashboard */}
        <NavLink to="/home/dashboard" className={classes.navlink}>
          <ListItem button type="Dashboard">
            <ListItemIcon>
              <DashboardIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>

        {/* employees options */}

        <DrawerListItem
          onClick={() => {
            props.employeeAction();
            props.drawerActionOpen();
          }}
          primary="Employee"
          openVariable={props.employeeOpen}
        >
          <PersonIcon color="primary" />
          <NavLink to="/home/AddEmployee" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Add Employee" />
            </ListItem>
          </NavLink>
          <NavLink to="/home/ManageEmployee" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Employee" />
            </ListItem>
          </NavLink>
        </DrawerListItem>
        {/* department options */}
        <DrawerListItem
          onClick={() => {
            props.departmentAction();
            props.drawerActionOpen();
          }}
          primary="Department"
          openVariable={props.departmentOpen}
        >
          <ApartmentIcon color="primary" />
          <NavLink to="/home/addDepartment" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Departments" />
            </ListItem>
          </NavLink>
        </DrawerListItem>
        {/* attendance options */}
        <ListItem
          button
          onClick={() => {
            props.attendanceAction();
            props.drawerActionOpen();
          }}
        >
          <ListItemIcon>
            <MenuBookIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Attendance" />
          {props.attendanceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={props.attendanceOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Daily Attendacne" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Attendance Report" />
            </ListItem>
          </List>
        </Collapse>
        {/* leave options */}

        <DrawerListItem
          onClick={() => {
            props.leaveAction();
            props.drawerActionOpen();
          }}
          primary="Leave"
          openVariable={props.leaveOpen}
        >
          <AirlineSeatFlatIcon color="primary" />
          <NavLink to="/home/ApplyForLeave" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Apply For Leave" />
            </ListItem>
          </NavLink>
          <NavLink to="/home/CheckLeaveStatus" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Check Leave Status" />
            </ListItem>
          </NavLink>
          <NavLink to="/home/ManageLeave" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Leave" />
            </ListItem>
          </NavLink>
          <NavLink to="/home/ManageLeaveType" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Leave Type" />
            </ListItem>
          </NavLink>
        </DrawerListItem>
        {/* payroll options
        <DrawerListItem
          onClick={() => {
            props.payRollAction();
            props.drawerActionOpen();
          }}
          primary="Payroll"
          openVariable={props.payRollOpen}
        >
          <LocalAtmIcon color="primary" />
          <ListItem button className={classes.nested}>
            <ListItemText primary="Create Payslip" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Payslip List" />
          </ListItem>
        </DrawerListItem> */}
        {/* daily options */}
        <DrawerListItem
          onClick={() => {
            props.dailyAction();
            props.drawerActionOpen();
          }}
          primary="Daily"
          openVariable={props.dailyOpen}
        >
          <ListAltIcon color="primary" />
          <NavLink to="/home/AddNotice" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Add Notice" />
            </ListItem>
          </NavLink>
          <NavLink to="/home/ManageNotice" className={classes.navlink}>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Notice" />
            </ListItem>
          </NavLink>
        </DrawerListItem>
        {/* holiday options */}
        {/* <DrawerListItem
          onClick={() => {
            props.holidayAction();
            props.drawerActionOpen();
          }}
          primary="Holiday"
          openVariable={props.holidayOpen}
        >
          <AirplanemodeActiveIcon color="primary" />
          <ListItem button className={classes.nested}>
            <ListItemText primary="Add Holiday" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Manage Holiday" />
          </ListItem>
        </DrawerListItem> */}
        {/* setting options */}
        <DrawerListItem
          onClick={() => {
            props.settingAction();
            props.drawerActionOpen();
          }}
          primary="Settings"
          openVariable={props.settingOpen}
        >
          <SettingsIcon color="primary" />
          <ListItem button className={classes.nested}>
            <ListItemText primary="Change Password" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Configuration" />
          </ListItem>
        </DrawerListItem>
        {/* logout  */}

        <ListItem
          button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    leaveOpen: state.LeaveReducer,
    employeeOpen: state.EmployeeReducer,
    departmentOpen: state.DepartmentReducer,
    attendanceOpen: state.AttendanceReducer,
    settingOpen: state.SettingReducer,
    payRollOpen: state.PayRollReducer,
    dailyOpen: state.DailyReducer,
    holidayOpen: state.HolidayReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    leaveAction: () => dispatch(LeaveAction()),
    employeeAction: () => dispatch(EmployeeAction()),
    departmentAction: () => dispatch(DepartmentAction()),
    attendanceAction: () => dispatch(AttendanceAction()),
    payRollAction: () => dispatch(PayRollAction()),
    settingAction: () => dispatch(SettingAction()),
    dailyAction: () => dispatch(DailyAction()),
    holidayAction: () => dispatch(HolidayAction()),
    drawerActionOpen: () => dispatch(DrawerActionOpen()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerList);
