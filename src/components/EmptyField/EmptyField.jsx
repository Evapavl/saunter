import React from 'react';
import classes from './EmptyField.module.css';

const EmptyField = (props) => {
    return (
        <div className={classes.emptyField}>
            <div className={classes.icon} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzHBv-EULCXwXdtvVcXV8HLwkWxXOMYUN5KQ&usqp=CAU" alt="iconImg" />
            </div>
            <div className={classes.text}>Select any path</div>
        </div>
    )
}
export default EmptyField