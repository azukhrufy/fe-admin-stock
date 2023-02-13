import Modal from "@mui/material/Modal";

interface PinaModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const PinaModal = ({ open, handleClose, children, icon }: PinaModalProps) => {

  return (
    <div className="pina-modal">
      <Modal open={open} onClose={handleClose} aria-labelledby="checkout-modal">
        <div className="pina-modal-container">
          <div className="pina-modal-top-icon" id="icon">
            {icon}
          </div>
          <div className="pina-modal-content">{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default PinaModal;
