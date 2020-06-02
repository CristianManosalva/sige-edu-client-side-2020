import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import {
  /* Button, */ Modal,
  ModalHeader,
  ModalBody,
  //   ModalFooter,
} from 'reactstrap'

const ModalExample = ({ children, show, toggle, title, style }) => {
  /* if (!show) {
    return null
  } */
  return (
    /* ReactDOM.createPortal( */
    <Modal isOpen={show} toggle={toggle} centered style={{ border: '0px' }}>
      <ModalHeader style={{ backgroundColor: '#1EAEDF' }} toggle={toggle}>
        <div className="div" style={{ color: 'whitesmoke' }}>
          {title}
        </div>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  ) /* ,
    document.getElementById('modal')
  ) */
}

export default ModalExample
