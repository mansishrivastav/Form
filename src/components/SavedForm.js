import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import React from "react";
import { useNavigate } from "react-router-dom";

const SavedForm = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const formData = localStorage.getItem("FORM_DATA");
    if (formData) {
      const dataItems = JSON.parse(formData);
      
    setData(dataItems);
    }
  }, []);
  const deleteElement = (id) => {
    const myData=data.filter((item) => item.id !== id )
    setData(myData)
    localStorage.setItem("FORM_DATA", JSON.stringify(myData))
  };
  
  return (
    <div className="saved">
      {data.map((item, index) => (
        <div 
          key={index}
          className="card"
          style={{ width: "18rem", marginBottom: "20px" }}
        >
          <div className="card-body">
            <h2 className="card-title">Form Data: {index + 1}</h2>
            <div className="buttons"></div>
            <button type="button" className="btn btn-outline-primary edit"  onClick={()=>{navigate(`/edit/${index}`,{state:{id: index}});
          }}>
                <LiaEdit size={15} />
              </button>
              <button type="button" className="btn btn-outline-danger" onClick={() => deleteElement(item.id)}>
                <RiDeleteBin5Fill size={15} />
              </button>
    
            <p>
              Name: {item.name}
              
            </p>
            <p>
              Email: {item.email}
             
            </p>
            <p>
              Phone: {item.phone}
              
            </p>
            <p>
              Password: {item.password}
              
            </p>
            <p>
             Confirm Password: {item.confirmPassword}
              
            </p>
           
            <p>
              Comment: {item.comment}
              
              
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedForm;

