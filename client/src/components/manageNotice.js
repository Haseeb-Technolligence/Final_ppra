import React, { useEffect } from "react";
import MaterialTableComponent from "./materialTable";
import { connect } from "react-redux";
import { deleteNotice, fetchNotice } from "../actions/notice-actions";
import { ConvertDate } from "../convertDateTime";

const ManageNotice = (props) => {
  useEffect(() => {
    props.fetchNotice();
  }, []);
  const data = props.state.map((notice, index) => {
    return {
      id: notice._id,
      date: ConvertDate(notice.date),
      comment: notice.comment,
      title: notice.title,
    };
  });
  const columns = [
    { title: "Title", field: "title" },
    { title: "Date", field: "date" },
    { title: "Comment", field: "comment" },
  ];
  return (
    <MaterialTableComponent
      title="Manage Notice"
      columns={columns}
      data={data}
      list={props.state}
      delete={props.deleteNotice}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNotice: (id) => dispatch(deleteNotice(id)),
    fetchNotice: () => dispatch(fetchNotice()),
  };
};
const mapStateToProps = (state) => {
  return {
    state: state.NoticeReducer.notice,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageNotice);
