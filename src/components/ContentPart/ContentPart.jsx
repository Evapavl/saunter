import React from 'react';
import classes from './ContentPart.module.css';
import PathListContainer from './../PathList/PathListContainer';
import EmptyField from './../EmptyField/EmptyField';
import FullInfoPathContaiter from './../FullInfoPath/FullInfoPathContaiter';



const ContentPart = (props) => {
    return (
        <div className={classes.appWrapperContent}>
            <div className={classes.leftSide}>
                <PathListContainer
                    idCurrentPath={props.idCurrentPath}
                    show={props.show}
                    showFullDescription={props.showFullDescription}
                    setCurrentPath={props.setCurrentPath} />
            </div>
            <div className={classes.rightSide}>
                {props.show ? <FullInfoPathContaiter /> :
                    <EmptyField />
                }

            </div>
        </div>
    )
}
export default ContentPart