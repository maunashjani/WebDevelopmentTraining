import React from "react";

function CRUDButtons(insertOP, updateOP, deleteOP, readOP) {

    return(

        <div className="text-center mt-3">
            <button className="btn btn-primary mx-2" onClick={readOP}>Read</button>
            <button className="btn btn-success mx-2" onClick={insertOP}>Insert</button>
            <button className="btn btn-warning mx-2" onClick={updateOP}>Update</button>
            <button className="btn btn-danger mx-2" onClick={deleteOP}>Delete</button>
        </div>

    );
} 

export default CRUDButtons;