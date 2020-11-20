import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { deleteEmployee, fetchEmployees, fetchEmployeeById } from "../actions/employee-actions";
import MaterialTableComponent from "./materialTable";
import { useHistory } from "react-router-dom";

function MaterialTableDemo(props) {
  useEffect(() => {
    props.fetchEmployees();
  }, []);
  const history = useHistory();
  const data = props.employeesState.map((emp) => {
    return {
      id: emp._id,
      name: emp.name,
      email: emp.email,
      department: emp.department,
      designation: emp.designation,
      status: emp.status,
    };
  });
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Department", field: "department" },
    { title: "Designation", field: "designation" },
    { title: "Status", field: "status" },
  ];

  return (
    <MaterialTableComponent
      title="Manage Employees"
      columns={columns}
      data={data}
      actions={[
        {
          icon: "edit",
          tooltip: "Edit",
          onClick: async (event, rowData) => {
            await props.fetchEmployeeById(rowData.id);
            history.push("/home/EditEmployee");
          },
        },
      ]}
      list={props.employeesState}
      delete={props.deleteEmployee}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    employeesState: state.employeesReducer.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmployee: (id) => dispatch(deleteEmployee(id)),
    fetchEmployees: () => {
      dispatch(fetchEmployees());
    },
    fetchEmployeeById:(id)=>dispatch(fetchEmployeeById(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MaterialTableDemo);
