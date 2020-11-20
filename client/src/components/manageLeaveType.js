import React, { useEffect } from "react";
import MaterialTableComponent from "./materialTable";
import { connect } from "react-redux";
import { deleteLeaveType, fetchLeaveType } from "../actions/leave-type-actions";

const ManageLeaveType = (props) => {
  useEffect(() => {
    props.fetchLeaveType();
  }, []);
  const data = props.state.map((leave, index) => {
    return {
      id: leave._id,
      number: index + 1,
      type: leave.type,
    };
  });
  const columns = [
    { title: "Sr. No", field: "number" },
    { title: "Leave Type", field: "type" },
  ];
  return (
    <MaterialTableComponent
      title="Manage Leave Type"
      columns={columns}
      data={data}
      list={props.state}
      delete={props.deleteLeaveType}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLeaveType: (id) => dispatch(deleteLeaveType(id)),
    fetchLeaveType: () => dispatch(fetchLeaveType()),
  };
};
const mapStateToProps = (state) => {
  return {
    state: state.leaveTypeReducer.leaveTypeList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageLeaveType);
