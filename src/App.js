
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NewForm from './components/NewForm';
import SavedForm from './components/SavedForm';
import EditForm from './components/EditForm';

function App() {
  const formData={name:"", email:"", phone:" ",  comment :"", password:"", confirmPassword:""}
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewForm  isEdit= {false} userFormData={formData} index={null}/>} />
          <Route path="/saved" element={<SavedForm  />} />
          <Route path="/edit/:id"  element={<EditForm />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
