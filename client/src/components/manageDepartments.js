import React, { useEffect } from "react";
import MaterialTableComponent from "./materialTable";
import { connect } from "react-redux";
import { getDepartment, deleteDepartment } from "../actions/dptActions";

const ManageDepartments = (props) => {
  useEffect(() => {
    props.getDepartment();
  }, []);

  const data = props.departments.map((dpt, index) => {
    return {
      id: dpt._id,
      number: index + 1,
      department: dpt.type,
    };
  });
  const columns = [
    { title: "Sr. No", field: "number" },
    { title: "Departments", field: "department" },
  ];
  return (
    <MaterialTableComponent
      title="Manage Departments"
      columns={columns}
      data={data}
      list={props.departments}
      delete={props.deleteDepartment}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDepartment: (id) => dispatch(deleteDepartment(id)),
    getDepartment: () => dispatch(getDepartment()),
  };
};
const mapStateToProps = (state) => {
  return {
    departments: state.dptReducer.departments,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageDepartments);
