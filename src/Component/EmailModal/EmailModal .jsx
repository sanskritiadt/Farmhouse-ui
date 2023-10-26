import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EmailModal = ({ show, onHide, onBookNow }) => {
  const [email, setEmail] = useState("");

  const handleBookNow = () => {
    onBookNow(email);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Book Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleBookNow}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailModal;
