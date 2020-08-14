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
    <Modal
      isOpen={show}
      toggle={toggle}
      centered
      style={style}
      keyboard={false}
      backdrop={'static'}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: '#1EAEDF',
          width: '100%',
          padding: '0.5em',
          paddingLeft: '1em'
        }}
      >
        <span style={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }}>
          {title}
        </span>
        <span style={styleForButtonAction('#1EAEDF')} onClick={toggle}>
          <i className="fa fa-close" style={{fontSize: '18px'}}/>
        </span>
      </div>
      <ModalBody>{children}</ModalBody>
    </Modal>
  ) /* ,
    document.getElementById('modal')
  ) */
}

export default ModalExample

const styleForButtonAction = (color, propiedad, valor) => {
  let style = {
    borderRadius: '50%',
    color: '#FFFFFF',
    backgroundColor: color,
    border: `1px solid ${color}`,
    fontWeight: '100',
    cursor: 'pointer',
    width: '1.8em',
    height: '1.8em',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center ',
  }
  style[propiedad] = valor
  return style
}
