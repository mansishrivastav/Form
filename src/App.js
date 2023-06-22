import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NewForm from './components/NewForm';
import SavedForm from './components/SavedForm';

function App() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewForm onSubmit={handleFormSubmit} />} />
          <Route path="/saved" element={<SavedForm formData={formData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
