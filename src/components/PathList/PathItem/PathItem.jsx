import React from 'react';
import classes from './../PathList.module.css';
import IconImage from '../../common/IconImage';
import StarIcon from '../../common/StarIcon';
import { setCurrentPath } from '../../../redux/content-reducer'

const PathItem = ({ id, title, shortDescr, ...props }) => {
    debugger
    let onPathChanged = (pathId) => {
        setCurrentPath(pathId);
       alert(pathId)
    }
    return (
        <div className={classes.pathItem}
         onClick={(e) => {
            //alert('aaa')
                onPathChanged(id)
           }}>
            <div className={classes.icon}>
                <IconImage />
            </div>
            <div className={classes.pathInfo}>
                <div className={classes.title}>
                    <span className={classes.active}>
                        <StarIcon />
                    </span>
                    <h3>{title}</h3>
                </div>
                <div className={classes.shortDescription}>{shortDescr}
                </div>
            </div>
            <div className={classes.distance}>300m</div>
            <div className={classes.openModal}>
                >
        </div>
        </div>
    )
}
export default PathItem