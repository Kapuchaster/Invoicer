import { useEffect } from "react";
import Modal from "react-modal";

import "./styles.css";

interface Props {
  content?: JSX.Element;
  onClose: () => void;
}

const ModalComponent = ({ content, onClose }: Props) => {
  useEffect(() => {
    Modal.setAppElement("#invoice");
  }, []);

  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={!!content}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div>
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            zIndex: "99999",
          }}
        >
          <button onClick={closeModal}>X</button>
        </div>
        {content}
      </div>
    </Modal>
  );
};

export default ModalComponent;
