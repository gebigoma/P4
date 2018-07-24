import React from 'react';

const ProfileForm = (props) => {
  let { name, email, website, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        onChange={handleChange} 
        value={name}/>
      <input 
        type="text"
        name="email"
        onChange={handleChange} 
        value={email}/>
      <input 
        type="text"
        name="website"
        onChange={handleChange} 
        value={website}/>
        <button>Submit</button>
    </form>
  )
};

export default ProfileForm;