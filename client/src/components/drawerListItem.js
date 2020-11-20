import React from "react";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export default function DrawerListItem(props) {
  return (
    <>
      <ListItem button onClick={props.onClick}>
        <ListItemIcon>{props.children[0]}</ListItemIcon>
        <ListItemText primary={props.primary} />
        {props.openVariable ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={props.openVariable} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.children[1]}
          {props.children[2]}
          {props.children[3]}
          {props.children[4]}
        </List>
      </Collapse>
    </>
  );
}
