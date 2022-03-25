import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  return (
    <div>
    <h1>{`${course} - Module tables`}</h1>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>{module[0]}</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>{module[1]}</td>
          <td>2</td>
          <td>2</td>
        </tr>
      </tbody >
    </table>
  </div>

  );
};

export default Demo;
