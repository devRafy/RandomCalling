import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { TextField, Button, Box } from "@mui/material";
import axios from 'axios';


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [incompleteData, setIncompleteData] = useState("");

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      return setIncompleteData("Please Fill the Form Completely");
    }
    // const response = await axios.post('auth/register' , formData).
    // then((response ) => {
    //   console.log ("User Regiterd" , response);
    // }).catch((e)=>{console.log(e)});

    try{
      const response = await axios.post('auth/register', formData);
      console.log(response);

  }catch(e){
    console.log(e);

  }
    
}

  const handleCloseAlert = () => {
    setIncompleteData("");
  };



  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Register User</h2>
      {incompleteData && (
        <Alert severity="warning" variant="outlined" onClose={handleCloseAlert}>
          {incompleteData}
        </Alert>
      )}
      <TextField
        fullWidth
        label="Username"
        type="text"
        name="username"
        id="username"
        variant="outlined"
        margin="normal"
        value={formData.username}
        onChange={handleChange}
        className="mb-4"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        id="email"
        type="email"
        variant="outlined"
        margin="normal"
        value={formData.email}
        onChange={handleChange}
        className="mb-4"
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        id="password"
        type="password"
        variant="outlined"
        margin="normal"
        value={formData.password}
        onChange={handleChange}
        className="mb-4"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Register;
