import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const NewForm = ({ isEdit, userFormData, index }) => {
  const { name, email, phone, comment, password, confirmPassword } =
    userFormData;
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phone);
  const [editComment, setEditComment] = useState(comment);
  const [editPassword, setEditPassword] = useState(password);
  const [editConfirmPassword, setEditConfirmPassword] =
    useState(confirmPassword);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!editName) {
      errors.name = "Name is required";
    }

    if (!editEmail) {
      errors.email = "Email is required";
    } else if (!validateEmail(editEmail)) {
      errors.email = "Invalid email";
    }

    if (!editPhone) {
      errors.phone = "Phone number is required";
    }

    if (!editPassword) {
      errors.password = "Password is required";
    }

    if (editPassword !== editConfirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  const validateEmail = (email) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const formSubmittedData = {
      name: editName,
      email: editEmail,
      phone: editPhone,
      comment: editComment,
      password: editPassword,
      confirmPassword: editConfirmPassword,
    };

    if (isEdit) {
      const formData = JSON.parse(localStorage.getItem("FORM_DATA"));
      formData[index] = formSubmittedData;
      localStorage.setItem("FORM_DATA", JSON.stringify(formData));
    } else {
      // Handle creation of a new user
      const formData = localStorage.getItem("FORM_DATA");
      const ID = localStorage.getItem("uniqueId");
      if (!ID) {
        localStorage.setItem("uniqueId", "1");
        formSubmittedData.id = 1;
      } else {
        const id = +ID + 1;
        formSubmittedData.id = id;
        localStorage.setItem("uniqueId", id);
      }
      if (!formData) {
        const data = JSON.stringify([formSubmittedData]);
        localStorage.setItem("FORM_DATA", data);
      } else {
        const data = JSON.parse(formData);
        const newData = [formSubmittedData, ...data];
        localStorage.setItem("FORM_DATA", JSON.stringify(newData));
      }
    }

    navigate("/saved");
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => {
              setEditName(e.target.value);
            }}
            value={editName}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => {
              setEditEmail(e.target.value);
            }}
            value={editEmail}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <input
            name="phone"
            type="number"
            className="form-control"
            placeholder="01234"
            onChange={(e) => {
              setEditPhone(e.target.value);
            }}
            value={editPhone}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setEditPassword(e.target.value);
            }}
            value={editPassword}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="form-group">
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => {
              setEditConfirmPassword(e.target.value);
            }}
            value={editConfirmPassword}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>
        <div>
          <div className="mb-3">
            <textarea
              name="comment"
              className="form-control"
              rows="5"
              placeholder="Comments"
              onChange={(e) => {
                setEditComment(e.target.value);
              }}
              value={editComment}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewForm;
