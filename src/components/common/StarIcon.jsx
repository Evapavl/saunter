import React from 'react';
import classes from './../PathList/PathList.module.css';
import starImage from "./../../img/star.png";

const StarIcon = () => {
    return (
        <span className={classes.star}>
                    <img src={starImage} alt="starIcon" />
                </span>
    )
}
export default StarIcon