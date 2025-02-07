import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Modal } from 'react-bootstrap';
import './UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState({
        id: '',
        email: '',
        name: '',
        dob: '',
        age: '',
        pan: '',
        phoneNumber: '',
        imageUrl: ''
    });

    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        // Fetch user data from the backend
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/user/${localStorage.getItem('userId')}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/user/${localStorage.getItem('userId')}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Account deleted successfully');
                localStorage.removeItem('userId');
                setUser({
                    id: '',
                    email: '',
                    name: '',
                    dob: '',
                    age: '',
                    pan: '',
                    phoneNumber: '',
                    imageUrl: ''
                });
                // Redirect to home page or login page
                window.location.href = '/';
            } else {
                console.error('Failed to delete account');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    const toggleEdit = () => {
        const formFields = document.querySelectorAll('#profileForm input, #profileForm textarea, #profileForm select');
        const editButton = document.getElementById('editButton');
        const saveButton = document.getElementById('saveButton');

        formFields.forEach(field => field.disabled = false);
        editButton.classList.add('d-none');
        saveButton.classList.remove('d-none');

        setMaxDOB(); // Set the max date for the date picker
    };

    const setMaxDOB = () => {
        const dobField = document.getElementById('dob');
        const today = new Date().toISOString().split('T')[0];
        dobField.setAttribute('max', today);
    };

    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const age = document.getElementById('age').value.trim();
        const pan = document.getElementById('pan').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        let errorMessage = "";

        if (!name) errorMessage += "Name is required.\n";
        if (!dob) errorMessage += "Date of Birth is required.\n";
        if (!age) errorMessage += "Age is required.\n";
        if (!pan) errorMessage += "PAN is required.\n";
        if (!phoneNumber) errorMessage += "Phone Number is required.\n";
        if (phoneNumber.length < 10) errorMessage += "Phone Number must be at least 10 digits.\n";

        if (errorMessage) {
            alert(errorMessage);
            return false;
        }

        document.getElementById('welcomeMessage').textContent = `Welcome, ${name}!`;
        alert("Profile updated successfully.");
        return true;
    };

    const handleShowConfirm = () => setShowConfirm(true);
    const handleCloseConfirm = () => setShowConfirm(false);

    return (
        <Container className="profile-container">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={user.imageUrl || 'https://via.placeholder.com/120'} alt="User Image" />
                        <Card.Body>
                            <Card.Title id="welcomeMessage">Welcome, {user.name}!</Card.Title>
                            <Card.Text>Member since <span id="memberSince">February 2025</span></Card.Text>
                            <Form id="profileForm" onSubmit={validateForm}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your ID</Form.Label>
                                    <Form.Control type="text" id="id" value={user.id} disabled />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" id="email" value={user.email} disabled />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" id="name" value={user.name} required disabled />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" id="dob" value={user.dob} required disabled />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" id="age" value={user.age} required disabled />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>PAN</Form.Label>
                                    <Form.Control type="text" id="pan" value={user.pan} required disabled />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" id="phoneNumber" value={user.phoneNumber} required disabled />
                                </Form.Group>
                                <div className="text-center button-group">
                                    <Button type="button" className="btn btn-primary" id="editButton" onClick={toggleEdit}>Edit Profile</Button>
                                    <Button type="submit" className="btn btn-success d-none" id="saveButton">Save Changes</Button>
                                    <Button type="button" className="btn btn-danger" onClick={handleShowConfirm}>Delete Account</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Confirmation Modal */}
            <Modal show={showConfirm} onHide={handleCloseConfirm}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Account Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete your account? This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirm}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteAccount}>
                        Delete Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default UserProfile;