import React from "react";
import NewForm from "./NewForm";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const formData = localStorage.getItem("FORM_DATA");
  const formDataObject = JSON.parse(formData);

  const { id } = useParams();
  const editFormData = formDataObject[id];

  return (
    <div>
      <h1>Edit your Form</h1>
      <NewForm isEdit={true} userFormData={editFormData} index={id} />
    </div>
  );
};

export default EditForm;
