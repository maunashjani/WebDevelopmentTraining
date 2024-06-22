import React from "react";

function CRUDForm({formData, handleChange}) {
  return (
    <div className="col-4">
      <label>RollNo</label>
      <input
        type="text"
        id="rollno"
        value={formData.rollno}
        onChange={handleChange}
        className="form-control"
      />
      <br />
      <label>Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
      />
      <br />
      <label>Marks</label>
      <input
        type="text"
        id="marks"
        value={formData.marks}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}

export default CRUDForm;
