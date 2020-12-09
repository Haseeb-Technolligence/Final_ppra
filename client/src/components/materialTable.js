import React from "react";
import MaterialTable from "material-table";

const MaterialTableComponent = (props) => {
  let deleteRow = {};
  if (props.deleteRow !== "delete") {
    deleteRow = {
      onRowDelete: (oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            // console.log("list", oldData.id);
            props.delete(oldData.id);
          }, 600);
        }),
    };
  }
  return (
    <MaterialTable
      actions={props.actions}
      title={props.title}
      columns={props.columns}
      data={props.data}
      options={{
        exportButton: true,
        exportAllData: true,
      }}
      editable={deleteRow}
    />
  );
};

export default MaterialTableComponent;
