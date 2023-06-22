import React from 'react'
import "../App.css"
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

import { useNavigate } from 'react-router-dom';


const NewForm= ({onSubmit}) => {
  const navigate=useNavigate()
    const validationSchema= Yup.object({
        name:Yup.string().min(2).max(25).required("Please enter your name"),
        email:Yup.string().email().required("Please enter your email-address"),
        phone:Yup.number().min(1000000000, "Not a valid phone-no.").max(9999999999, "Not a valid phone-no.").required("Please enter your phone-no."),
        gender: Yup.string().required("Please select your gender"),
        comment:Yup.string(),
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character"
      ).min(6).max(20).required("Please enter your password"),
        confirmPassword:Yup.string().oneOf([Yup.ref("password"),null], "Password must match").required("Please confirm your password"),
      })
    
  
  
  const handleSubmit=(values)=>{
  onSubmit(values)
  navigate('/saved');}
  return (
    <div className="App">
      <Formik initialValues={{name:"", email:"", phone:" ", gender:"", comment :"", password:"", confirmPassword:""} }  validationSchema={validationSchema}
        onSubmit={handleSubmit}>
      <Form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <Field
        name="name"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
        <ErrorMessage name="name" component="div" className="error" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <Field
        name="email" 
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <ErrorMessage name="email" component="div" className="error" />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <Field
        name="phone"
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="01234"
        />
        <ErrorMessage name="phone" component="div" className="error" />
      </div>
      <label className="form-label">Gender</label>
      <div className="mb-3">
      <div className="form-check form-check-inline">         
        <Field
        name="gender"
          className="form-check-input"
          type="radio"
        
          id="inlineRadio1"
          value="Male"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <Field
        name="gender"
          className="form-check-input"
          type="radio"
          
          id="inlineRadio2"
          value="Female"
        />
        <label className="form-check-label" htmlFor="inlineRadios2">
        Female
        </label></div>
        <div className="form-check form-check-inline">         
        <Field
        name="gender"
          className="form-check-input"
          type="radio"
        
          id="inlineRadio1"
          value="Prefer not to say"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Prefer not to say
        </label>
      </div>
      <ErrorMessage name="gender" component="div" className="error" />
      </div>
      
      <div className="form-group">
  <label htmlFor="floatingPassword">Password</label>
  <Field
    name="password"
    type="password"
    className="form-control"
    id="floatingPassword"
    placeholder="Password"
  />
  <ErrorMessage name="password" component="div" className="error" />
</div>
<div className="form-group">
  <label htmlFor="floatingPassword">Confirm Password</label>
  <Field
    name="confirmPassword"
    type="password"
    className="form-control"
    id="floatingPassword"
    placeholder="Confirm Password"
  />
   <ErrorMessage name="confirmPassword" component="div" className="error" />
</div>

      <div> 
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
  <Field name="comment" as="textarea" className="form-control" id="exampleFormControlTextarea1" rows="5"></Field>
  <ErrorMessage name="comment" component="div" className="error" />
</div>
      <button type="submit" className="btn btn-primary" >Submit</button>
      </div>      
      </Form>
      </Formik>
      
    </div>

  )
}

export default NewForm
