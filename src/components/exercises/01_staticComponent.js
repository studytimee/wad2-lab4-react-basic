import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h1>MSC Enterprise Software Systems - Module tables</h1>
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
            <td>Cloud Architecture</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Enterprise Web Dev</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody >
      </table>
    </div>
  );
};

export default Demo;
