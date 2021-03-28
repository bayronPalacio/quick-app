import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Message = ({ message, showMessage, setShowMessage }) => {
  const closeMsg = () => {
    setShowMessage(false);
  };
  return (
    <Modal show={showMessage} onHide={closeMsg} size="sm">
      <Modal.Body>
        <div className="mainBackModalProduct">
          <p>{message}</p>
          <Button
            variant="primary"
            className="btn button-color marginBtn"
            onClick={closeMsg}
          >
            Ok
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Message;
