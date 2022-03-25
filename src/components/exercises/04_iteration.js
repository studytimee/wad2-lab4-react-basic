import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  const tableData = props.modules.map((t, number) => (
    <tr key={number}>
      <td> {t.name} </td>
      <td> {t.noLectures} </td>
      <td> {t.noPracticals} </td>
    </tr>
  )
  );
  return (
    <>
      <h2>{props.course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </>
  );
};

export default Demo;
