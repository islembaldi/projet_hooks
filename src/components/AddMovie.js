import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export const AddMovie = ({
  show,
  handleClose,
  newMovie,
  setnewMovie,
  handleSave,
}) => {
  const handleChange = (e) => {
    setnewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="put your Title Here..."
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>posterurl</Form.Label>
            <Form.Control
              type="text"
              name="posterurl"
              placeholder="put your poster url Here..."
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              placeholder="put your rating Here..."
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {" "}
          {/* Call handleSave here */}
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
