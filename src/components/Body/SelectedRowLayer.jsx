import React from "react";

const SelectedRowLayer = props => {
  let layer = "";

  if (props.selectedRow !== undefined && props.selectedRow.id !== undefined) {
    layer = (
      <div>
        <h4>{props.selectedRow["name"]}</h4>
        <div>
          <span>Cantidad: </span>
          <strong>{props.selectedRow["count"]}</strong>
        </div>
        <div>
          <span>Prioridad: </span>
          <strong>{props.selectedRow["priority"]}</strong>
        </div>
      </div>
    );
  }

  return <React.Fragment>{layer}</React.Fragment>;
};

export default SelectedRowLayer;
