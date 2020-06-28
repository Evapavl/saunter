import React from 'react';
import classes from './FullInfoPath.module.css';
import Map from '../Map/Map';

const FullInfoPathElement = ({fullDiscr, title}) => {

//     let state = props.addPath;

//     let fullDescrElements = state.shortDescriptions.map(f => <div className={classes.fullInfo}>
//         <div className={classes.title}>
//             <div className={classes.pathTitle}>{f.title}</div>
//             <div className={classes.distance}>300m</div>
//         </div>
//         <div className={classes.fullDiscription}>{f.fullDiscr}
// </div>
//         <div>
//             <Map />
//         </div>

//         <div className={classes.favorites}>Add to favorites</div>
//         <div className={classes.remove}>Remove</div>
//     </div>

//       );

    return (
        <div className={classes.fullInfo}>
            <div className={classes.title}>
                <div className={classes.pathTitle}> {title}</div>
                <div className={classes.distance}>300m</div>
            </div>
            <div className={classes.fullDiscription}>{fullDiscr}
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