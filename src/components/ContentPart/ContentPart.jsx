import React from 'react';
import classes from './ContentPart.module.css';
import PathListContainer from './../PathList/PathListContainer';
import FullInfoPath from './../FullInfoPath/FullInfoPath';
import EmptyField from './../EmptyField/EmptyField';
import FullInfoPathContaiter from './../FullInfoPath/FullInfoPathContaiter';



const ContentPart = (props) => {
  
    return (
            <div className={classes.appWrapperContent}>
                <div className={classes.leftSide}>
                    <PathListContainer  />
                </div>
                <div className={classes.rightSide}>
                    <FullInfoPathContaiter />
                    {/* <EmptyField /> */}
                </div>
            </div>
    )

}
export default ContentPart