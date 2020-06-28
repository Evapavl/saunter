import React from 'react';
import {sendNewShortDescription} from "../../redux/addPath-reducer";
import {connect} from "react-redux";
import Header from './Header';



let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        fullDescriptions: state.addPath.fullDescriptions,
        shortDescriptions: state.addPath.shortDescriptions
    }
}
let mapDispatchToProps = (dispatch) => {
   
    return {
        sendNewShortDescription: (id, title, shortDescr, fullDescr) => {
            dispatch(sendNewShortDescription(id, title, shortDescr, fullDescr));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)