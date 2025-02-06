import { useState } from "react";
import { TextField, Button, Box, Typography, Modal, Grid, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = formData.email ? "" : "Email is required.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? "" : "Email is not valid.";
    tempErrors.password = formData.password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      setErrors({
        ...errors,
        password: value ? "" : "Password is required."
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);

      try {
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);
        setModalMessage(result.message);
        setModalOpen(true);

        if (result.status === "success") {
          setTimeout(() => {
            navigate("/products");
          }, 2000);
        }
      } catch (error) {
        console.error('Error:', error);
        setModalMessage(`Error: ${error.message}`);
        setModalOpen(true);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3, mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Login</Button>
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

export default LoginComponent;
