import React from 'react';
import Modal from 'react-modal';
import classes from './Modal.module.css';
import maps from './../../img/maps.png';
import close from './../../img/close.png';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "./../Validate/Validate";
import Map from './../Map/Map';





const maxLength160 = maxLengthCreator(160);

const ModalForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.inputTitle}>
                <label>Title</label>
                <Field component="input"
                    name="title"
                    placeholder="title" />

            </div>
            <div className={classes.shortDescr}>

                <label>Short description</label>
                <Field component="textarea"
                    name="shortDescr"
                     validate={[maxLength160]}
                />
                <div className={classes.limitWord}>Limit 9 of 160</div>
            </div>
            <div className={classes.fullDescr}>
                <label>Full description</label>
                <Field component="textarea"
                    name="fullDescr" />
            </div>
            <div className={classes.length}>
                <img src={maps} alt="maps" />
                            Length 300m
                            </div>
            <div className={classes.buttonAddPath}>
                <button>Add path</button>
            </div>
        </form>
    )
}

const ModalReduxForm = reduxForm({ form: 'addPath' })(ModalForm)



const ModalWindow = ({ sendNewShortDescription, closeModal, modalIsOpen,  ...props}) => {

    const addNewDescription = (values) => {
        
         sendNewShortDescription(values.id, values.title, values.shortDescr, values.fullDescr)
    }
   
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                <div className={classes.modal}>
                    <div className={classes.headModal}>
                        <div>Add new path</div>
                        <div onClick={closeModal} ><img src={close} alt="close" /> </div>
                    </div>
                    <div className={classes.bothSide}>
                        <div className={classes.leftSide}>
                            <ModalReduxForm onSubmit={addNewDescription} />
                        </div>
                        <div className={classes.rightSide}>
                            <Map />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
export default ModalWindow