import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { DrawerActionOpen } from "../actions/drawerAllActions";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBarIcons: {
    marginLeft: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
}));
const Appbar = (props) => {
  const classes = useStyles();
  const open = props.drawerOpen;
  const dispatch = useDispatch();
  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => dispatch(DrawerActionOpen())}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Employees Management System
          </Typography>
          <div className={classes.appBarIcons}>
            <IconButton aria-label="delete">
              <NotificationsIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="profile">
              <AccountCircleIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
