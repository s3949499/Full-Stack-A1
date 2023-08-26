import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, validatePassword } from './SignUp'; // Import the validation functions

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    password: user.password
  });
  const [errors, setErrors] = useState({}); // Add state for form errors

  // DELETE PROFILE
  const handleProfileDelete = () => {
    if (window.confirm('Are you sure you want to delete your profile? This will also delete your reviews.')) {
      // Delete user profile
      localStorage.removeItem('user');
      // Delete user's reviews
      const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      const updatedReviews = reviews.filter(review => review.user !== user.name);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
      // Navigate back to homepage upon deletion
      navigate('/');
    }
  };

  // EDIT PROFILE
  const handleProfileEdit = () => {
    setIsFormVisible(!isFormVisible);
  };

  // HANDLE FORM INPUT CHANGES
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevEditedUser => ({ ...prevEditedUser, [name]: value }));

    // Clear error for the field when it's being edited
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };
// SAVE EDITED PROFILE
const handleProfileSave = () => {
  const formIsValid = validateForm(); // Validate the form before saving

  if (formIsValid) {
    // Update local storage with edited user data
    localStorage.setItem('user', JSON.stringify(editedUser));
    // Hide the form
    setIsFormVisible(false);
  } else {
    // Form is not valid, do not save
    // You can optionally display an error message or handle it in another way
  }
};

  // Validate the form data
  const validateForm = () => {
    let formErrors = {};

    if (!editedUser.name) formErrors.name = "Name is required.";
    if (!editedUser.email) formErrors.email = "Email is required.";
    else if (!isValidEmail(editedUser.email)) formErrors.email = "Invalid email format.";

    if (!editedUser.password) formErrors.password = "Password is required.";
    else {
      const passwordValidationErrors = validatePassword(editedUser.password);
      if (passwordValidationErrors.length > 0) {
        formErrors.password = passwordValidationErrors.join(' ');
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return (
    <div className='profile-Container'>
      <div className='profile-details'>
        <h2 className='profile-Header'>--Your Profile--</h2>
        <img className="profile-Icon" src="profileIcon.png" alt="displayed next to username"></img>
        <p className='userName'> {user.name}</p>
        <p className='userEmail'> {user.email}</p>
        <button className='delete-Button' onClick={handleProfileDelete}>
          Delete Profile
        </button>
        {isFormVisible ? (
          <div className="edit-Overlay">
            <h2 className='profile-Header'>--Edit Profile--</h2>
            <form className='edit-Form'>
              <div className='edit-Name'>
                <p>User Name:</p>
                <input type="text" name="name" value={editedUser.name} onChange={handleInputChange} />
                {errors.name && <span>{errors.name}</span>}
              </div>
              <div className='edit-Email'>
                <p>Email:</p>
                <input type="email" name="email" value={editedUser.email} onChange={handleInputChange} />
                {errors.email && <span className='edit-Error'>{errors.email}</span>}
              </div>
              <div className='edit-Password'>
                <p>Password:</p>
                <input type="password" name="password" value={editedUser.password} onChange={handleInputChange} />
                {errors.password && <span className='edit-Error'>{errors.password}</span>}
              </div>
              <div className='edit-Save'>
                <button type="button" onClick={handleProfileSave}> Save </button>
              </div>
            </form>
          </div>
        ) : (
          <button className='edit-Button' onClick={handleProfileEdit}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
