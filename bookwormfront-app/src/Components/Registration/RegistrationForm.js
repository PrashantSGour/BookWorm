import { useState } from "react";
import { TextField, Button, Box, Typography, Modal, Grid, Fade } from "@mui/material";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    customeremail: "",
    customername: "",
    customerpassword: "",
    confirmPassword: "",
    dob: "",
    pan: "",
    phonenumber: "",
  });

  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    tempErrors.customeremail = formData.customeremail ? "" : "Email is required.";
    tempErrors.customeremail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.customeremail) ? "" : "Email is not valid.";
    tempErrors.customername = formData.customername ? "" : "Name is required.";
    tempErrors.customerpassword = formData.customerpassword.length >= 6 ? "" : "Password must be at least 6 characters.";
    tempErrors.confirmPassword = formData.confirmPassword === formData.customerpassword ? "Password matched" : "Passwords do not match.";
    tempErrors.dob = formData.dob ? "" : "Date of Birth is required.";
    tempErrors.pan = formData.pan ? "" : "PAN is required.";
    tempErrors.phonenumber = formData.phonenumber && /^[0-9]{10}$/.test(formData.phonenumber) ? "" : "Valid phone number is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "" || x === "Password matched");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "confirmPassword" || name === "customerpassword") {
      setErrors({
        ...errors,
        confirmPassword: name === "confirmPassword" ? (value === formData.customerpassword ? "Password matched" : "Passwords do not match.") : (formData.confirmPassword === value ? "Password matched" : "Passwords do not match.")
      });
    }

    if (name === "customerpassword") {
      setErrors({
        ...errors,
        customerpassword: value.length >= 6 ? "" : "Password must be at least 6 characters."
      });
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);

      const age = calculateAge(formData.dob);
      const { confirmPassword, ...dataToSend } = formData;
      dataToSend.age = age;

      try {
        const response = await fetch('http://localhost:8080/api/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);
        setModalMessage("User registered successfully");
        setModalOpen(true);
      } catch (error) {
        console.error('Error:', error);
        setModalMessage(`Error: ${error.message}`);
        setModalOpen(true);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3, mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>Registration Form</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="customeremail"
              value={formData.customeremail}
              onChange={handleChange}
              error={!!errors.customeremail}
              helperText={errors.customeremail}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="customername"
              value={formData.customername}
              onChange={handleChange}
              error={!!errors.customername}
              helperText={errors.customername}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="customerpassword"
              value={formData.customerpassword}
              onChange={handleChange}
              error={!!errors.customerpassword}
              helperText={errors.customerpassword}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword && errors.confirmPassword !== "Password matched"}
              helperText={errors.confirmPassword}
              FormHelperTextProps={{ style: { color: errors.confirmPassword === "Password matched" ? 'green' : 'red' } }}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              error={!!errors.dob}
              helperText={errors.dob}
              required
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="PAN"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              error={!!errors.pan}
              helperText={errors.pan}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              error={!!errors.phonenumber}
              helperText={errors.phonenumber}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
      </form>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={modalOpen}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: 'none', boxShadow: 24, p: 4, borderRadius: 2 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalMessage}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default RegistrationForm;
