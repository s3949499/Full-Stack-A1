import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email || !isValidEmail(formData.email)) formErrors.email = "Invalid email.";
    if (!formData.password) formErrors.password = "Password is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        alert("Login Successful!");

        // Redirect the user to the home page
        navigate('/');
      } else {
        setErrors({
          ...errors,
          general: "Invalid email or password."
        });
      }
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
        
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
        {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
        
        {errors.general && <span style={{color: 'red', display: 'block'}}>{errors.general}</span>}
        
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
