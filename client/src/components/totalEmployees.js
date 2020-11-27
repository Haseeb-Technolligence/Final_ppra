import React, {Component} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import {connect} from 'react-redux';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 30,
    width: 30
  }
}));

const TotalEmp = (props,{ className, ...rest}) => {
  const classes = useStyles();
// console.log(props);
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {props.title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {props.emp}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <GroupAddOutlinedIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalEmp.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state){ 
  return{
    users: state.xyz
  }
}

export default connect(mapStateToProps)(TotalEmp);
