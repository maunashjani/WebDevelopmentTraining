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
      const response = await fetch(process.env.API_URL + "/read");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const insertOP = async () => {
    try {
      const response = await fetch(process.env.API_URL, {
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
    } catch (error) {}
  };

  const updateOP = async () => {
    try {
    } catch (error) {}
  };

  const deleteOP = async () => {
    try {
    } catch (error) {}
  };
  return <div></div>;
}

export default App;
