import React from 'react';
import classes from './FullInfoPath.module.css';
import Map from '../Map/Map';

const FullInfoPathElement = ({ fullDescr, title }) => {

    return (
        <div className={classes.fullInfo}>
            <div className={classes.title}>
                <div className={classes.pathTitle}> {title}</div>
                <div className={classes.distance}>300m</div>
            </div>
            <div className={classes.fullDiscription}>
                {fullDescr}
            </div>
            <div>
                <Map />
            </div>
            <div className={classes.favorites}>Add to favorites</div>
            <div className={classes.remove}>Remove</div>
        </div>
    )
}
export default FullInfoPathElement