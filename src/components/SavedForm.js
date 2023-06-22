import { useEffect } from "react";
import React from 'react';

const SavedForm = ({ formData}) => {
  const formDataArray = Object.entries(formData);
  
  useEffect(() => {
    formData.forEach((data, index) => {
      const formDataString = JSON.stringify(data);
      localStorage.setItem(`formData_${index}`, formDataString);
    });
  }, [formData]);
  return (
    <div>
      {formDataArray.map(([key, data], index) => (
        <div key={index} className="card" style={{ width: '18rem', marginBottom: '20px' }}>
          <div className="card-body">
            <h5 className="card-title">Card {index + 1}</h5>
            <h2>Saved Form Data:</h2>
            <p>
              Name: {formData.name} 
            </p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <p>Gender: {formData.gender}</p>
            <p>Comment: {formData.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedForm;


  // const updateUser = (name) => {
  //   const updatedData = { ...formData, name: name }; // Create a copy of the formData object and update the name value
  //   onUpdate(updatedData); // Pass the updated data to the onUpdate function
  //   <button onClick={() => updateUser(data.name)}>Update</button>
  // };