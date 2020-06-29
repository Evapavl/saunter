import React, { useState } from 'react';
import classes from './Header.module.css';
import IconImage from '../common/IconImage';
import ModalWindow from '../Modal/Modal';

const Header = (props) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        <IconImage onClick={()=>{alert('aaac')}}  />
        <span className={classes.logoText}>
          Saunter
          </span>
      </div>
      <div className={classes.rightSide}>
        <button onClick={openModal} className={classes.button}>
          Add path
          </button>
        <ModalWindow sendNewFullDescription={props.sendNewFullDescription}
          sendNewShortDescription={props.sendNewShortDescription}
          openModal={openModal} closeModal={closeModal} modalIsOpen={modalIsOpen} />
      </div>
    </div>
  )
}
export default Header;