import React from 'react';
import classes from './PathList.module.css';
import PathItem from './PathItem/PathItem';
import search from './../../img/search.png';


const PathList = (props) => {
  
//    let  onPathChanged = (pathId) => {
//        // props.setCurrentPath(pathId);
//         console.log(pathId)
//     }


    let state = props.addPath;

    let shortDescrElements = state.shortDescriptions.map(s => <PathItem onClick={(e) => {
        debugger
        console.log('aaa')
       // props.onPathChanged(s.id)
    }}
         title={s.title} key={s.id} shortDescr={s.shortDescr} />);



    return (
        <div className={classes.pathList}>
            <div className={classes.searchInput}>
                <input placeholder="Search..." />
                <img src={search} alt="search" />
            </div>
            {shortDescrElements}
        </div>
    )
}
export default PathList