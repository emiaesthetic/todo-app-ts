import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ConfirmationProps {
  onExecute: () => void;
  onCancel: () => void;
}

export const Confirmation = ({ onExecute, onCancel }: ConfirmationProps) => {
  return (
    <Modal show centered>
      <Modal.Header>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>

      <Modal.Body>Are you sure you want to delete this task?</Modal.Body>

      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onExecute}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
