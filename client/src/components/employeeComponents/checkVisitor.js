import React, { useEffect } from "react";
import MaterialTableComponent from "../materialTable";
import { connect } from "react-redux";
import { fetchVisitor } from "../../actions/visitors-actions";
import { ConvertDateTime } from "../../convertDateTime";
const CheckVisitor = (props) => {
  useEffect(() => {
    props.fetchVisitor();
  }, []);

  let data = props.visitorState.map((visitor) => {
    return {
      name: visitor.name,
      cnic: visitor.cnic,
      date: ConvertDateTime(visitor.dateTime),
      phone: visitor.number,
      purpose: visitor.purpose,
    };
  });
  const columns = [
    { title: "Name", field: "name" },
    { title: "CNIC", field: "cnic" },
    { title: "Date & Time", field: "date" },
    { title: "Phone Number", field: "phone" },
    { title: "Purpose", field: "purpose" },
  ];
  return (
    <MaterialTableComponent
      title="Visitor Details"
      columns={columns}
      data={data}
      list={props.leaveState}
      deleteRow="delete"
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVisitor: () => dispatch(fetchVisitor()),
  };
};
const mapStateToProps = (state) => {
  return {
    visitorState: state.visitorReducer.visitorList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckVisitor);
