import React, { useEffect } from "react";
import MaterialTableComponent from "../materialTable";
import { connect } from "react-redux";
import { deleteLeave, fetchLeave } from "../../actions/user-leave-actions";

const ManageLeave = (props) => {
  useEffect(() => {
    props.fetchLeave();
  }, []);
  const convertDate = (date) => {
    let convertedDate = new Date(date);
    const dd = String(convertedDate.getDate()).padStart(2, "0");
    const mm = String(convertedDate.getMonth() + 1).padStart(2, "0");
    const yyyy = convertedDate.getFullYear();
    return (convertedDate = mm + "/" + dd + "/" + yyyy);
  };

  let data = props.leaveState.map((leave) => {
    if (leave.employeeId === props.loggedInUser._id) {
      return {
        employeeName: props.loggedInUser.name,
        type: leave.type,
        duration: convertDate(leave.from) + " To " + convertDate(leave.to),
        comment: leave.comment,
        status: leave.status,
      };
    }
  });
  data = data.filter((data) => {
    return data != null;
  });

  const columns = [
    { title: "Employee Name", field: "employeeName" },
    { title: "Leave Type", field: "type" },
    { title: "Duration", field: "duration" },
    { title: "Comment", field: "comment" },
    { title: "Status", field: "status" },
  ];
  return (
    <MaterialTableComponent
      title="Check Leave Status"
      columns={columns}
      data={data}
      deleteRow="delete"
      list={props.leaveState}
      delete={props.deleteLeave}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLeave: (id) => dispatch(deleteLeave(id)),
    fetchLeave: () => dispatch(fetchLeave()),
  };
};
const mapStateToProps = (state) => {
  return {
    employeeState: state.employeesReducer.employees,
    leaveState: state.leaveReducer.leaveList,
    loggedInUser: state.authReducer.loggedInUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageLeave);
