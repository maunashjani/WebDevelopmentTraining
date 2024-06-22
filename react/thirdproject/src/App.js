import React, { useState, useEffect } from "react";
import CRUDButtons from "./CRUDButtons";
import CRUDTable from "./CRUDTable";
import CRUDForm from "./CRUDForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({ rollno: "", name: "", marks: "" });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    //gets the id and value of the textbox where
    //onchange event is triggered
    const { id, value } = e.target;

    //...formData represet the use of spread operator
    //the below code gets the data from each text box and stores the
    //value in the formData, using spread operator
    //a new instance of the formData is appended each time the
    //textbox data is fetched
    setFormData({ ...formData, [id]: value });
  };

  const fetchData = async () => {
    try {
      console.log(process.env.REACT_APP_API_URL);
      const response = await fetch(process.env.REACT_APP_API_URL + "/read");
      const result = await response.json();

      console.log(result);

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const insertOP = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.id.length > 0) {
        alert(result.message);
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateOP = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.count > 0) {
        alert(result.message);
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOP = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rollno: formData.rollno,
        }),
      });

      const result = await response.json();

      if (result.count > 0) {
        alert(result.message);
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">CRUD UI</h1>
      <div className="row">
        <CRUDForm formData={formData} handleChange={handleChange} />
        <CRUDTable data={data} />
      </div>
      <CRUDButtons
        insertOP={insertOP}
        updateOP={updateOP}
        deleteOP={deleteOP}
        readOP={fetchData}
      />
    </div>
  );
}

export default App;
