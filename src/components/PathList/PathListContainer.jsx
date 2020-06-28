import React from 'react';
import { sendNewShortDescription } from '../../redux/addPath-reducer'
import { setCurrentPath } from '../../redux/content-reducer'
import { connect } from "react-redux";
import PathList from './PathList';


 let  onPathChanged = (pathId) => {
     debugger
           setCurrentPath(pathId);
            console.log(pathId)
        }
    

let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        contentPart: state.contentPart,
        show: state.contentPart.show, 
    }
}

// let mapDispatchToProps = (dispatch) => {
   
//     return {
//         sendNewShortDescriptionPath: (id, title, shortDescr) => {
//             dispatch(sendNewShortDescription(id, title, shortDescr));
//         }
//     }
// }


export default connect(mapStateToProps, {sendNewShortDescription, setCurrentPath, onPathChanged})(PathList)

