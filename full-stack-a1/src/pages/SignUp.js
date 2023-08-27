import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

{/* Function to validate email formatting */ }
export function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
{/* Function to validate password formatting/strength */ }
export function validatePassword(password) {
  const minCharRegex = /^.{8,}$/;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const errors = [];
  if (!minCharRegex.test(password)) errors.push("Minimum 8 characters required.");
  if (!upperCaseRegex.test(password)) errors.push("At least one uppercase letter required.");
  if (!lowerCaseRegex.test(password)) errors.push("At least one lowercase letter required.");
  if (!digitRegex.test(password)) errors.push("At least one number required.");
  if (!specialCharRegex.test(password)) errors.push("At least one special character required.");

  return errors;
}
{/* component for signup form */ }
function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  {/* Function to handle input changes */ }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  {/* function to validate form */ }
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    else if (!isValidEmail(formData.email)) formErrors.email = "Invalid email format.";

    if (!formData.password) formErrors.password = "Password is required.";
    else {
      const passwordValidationErrors = validatePassword(formData.password);
      if (passwordValidationErrors.length > 0) {
        formErrors.password = passwordValidationErrors.join(' ');
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  {/* function to handle form submission */}
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      {/* Store user data in local storage */}
      localStorage.setItem('user', JSON.stringify(formData));
      {/* navigate to home page*/}
      navigate('/');
    }
  };
  {/* render signUp form */}
  return (
    <div className="container">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div className="form-field">
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-field">
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <div className="form-field">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

