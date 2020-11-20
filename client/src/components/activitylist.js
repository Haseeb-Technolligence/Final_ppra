import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { fetchNotice } from "../actions/notice-actions";
import { ConvertDate } from "../convertDateTime";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const AlignItemsList = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.fetchNotice();
  }, []);

  let sortedDPT = props.state.sort((a, b) =>
    ConvertDate(a.date)
      .split("/")
      .reverse()
      .join()
      .localeCompare(ConvertDate(b.date).split("/").reverse().join())
  );

  let dsortedDPT = sortedDPT.sort().reverse();

  const listItems = sortedDPT.map((notice, index) => (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={notice.title} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={notice.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {ConvertDate(notice.date)}
              </Typography>
              <br />
              {notice.comment}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  ));

  return <List className={classes.root}>{listItems}</List>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotice: () => dispatch(fetchNotice()),
  };
};
const mapStateToProps = (state) => {
  return {
    state: state.NoticeReducer.notice,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlignItemsList);
