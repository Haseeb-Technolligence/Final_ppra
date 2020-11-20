import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TotalEmp from './totalEmployees';
import Graph from './graph';
import AlignItemsList from './activitylist';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h1>Dashboard</h1>
            <hr/>
          </Paper>
          <br />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <TotalEmp title="TOTAL EMPLOYEES" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <TotalEmp title="PRESENT EMPLOYEES" />
          </Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>
            <TotalEmp title="ABSENT EMPLOYEES" />
          </Paper>

        </Grid>
      </Grid>
      <br/>
      <Grid container spacing={12}>
        <br/>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Graph />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h1>Important Notices</h1>
            <hr/>
            <AlignItemsList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
