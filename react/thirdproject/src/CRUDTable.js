import React, { memo } from "react";

const CRUDTable = memo(({ data }) => {
  return (
    <div className="col-8">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.rollno}</td>
              <td>{item.name}</td>
              <td>{item.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default CRUDTable;
