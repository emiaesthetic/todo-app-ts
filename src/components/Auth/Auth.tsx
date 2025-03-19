import { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createPortal } from 'react-dom';

import { useAuth } from '@/hooks/useAuth';

export const Auth = () => {
  const [show, setShow] = useState<boolean>(true);
  const { username, setUsername } = useAuth();
  const [usernameError, setUsernameError] = useState<boolean>(false);

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim() !== '') {
      setUsernameError(false);
      setShow(false);
    } else {
      setUsernameError(true);
      setUsername('');
    }
  };

  return createPortal(
    <Modal show={show} centered>
      <Modal.Header className="justify-content-center">
        <Modal.Title>Sign in</Modal.Title>
      </Modal.Header>

      <Modal.Body className="w-75 mx-auto py-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="position-relative mb-4" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={handleUsername}
              placeholder="Enter username"
            />
            {usernameError && (
              <Form.Text className="position-absolute text-danger top-0 end-0">
                Invalid username
              </Form.Text>
            )}
          </Form.Group>

          <Button className="btn btn-primary w-100" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>,
    document.body,
  );
};
