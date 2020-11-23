import React,  { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { attendance } from "../actions/employee-actions";

const Attendance = (props) => {
    useEffect(() => {
        props.attendance();
      }, []);
       if(props.data.dateArray){
           
       console.log('props',props.data)
    var data = props.data.dateArray.map((date,index) => {
        return {
          name: props.data.nameArray[index],
          date: date,
          dept: props.data.deptArray[index],
          onduty:  props.data.onArray[index],
          offduty: props.data.offArray[index]
        };
      });
    }
         

    const columns = [
        { title: "Name", field: "name" },
        { title: "Department", field: "dept" },
        { title: "Date", field: "date" },
        { title: "On duty", field: "onduty" },
        { title: "Off duty", field: "offduty" },
      ];
  return (
    <MaterialTable
      title="Attendance Report"
      columns={columns}
      data={data}
      options={{ exportButton: true }}
    />
  );
};

const mapStateToProps = (state) => {
    console.log('att',state.attendance)
    return {
      data: state.attendance,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        attendance: () => dispatch(attendance()),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps) (Attendance);
