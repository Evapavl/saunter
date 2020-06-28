import React from 'react';
import { sendNewShortDescription } from '../../redux/addPath-reducer'
import { connect } from "react-redux";
import FullInfoPath from './FullInfoPath';

let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        shortDescription: state.addPath.shortDescription
    }
}

let mapDispatchToProps = (dispatch) => {
   
    return {
        sendNewShortDescriptionPath: (id, title, shortDescr, fullDescr) => {
            dispatch(sendNewShortDescription(id, title, shortDescr, fullDescr));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullInfoPath)


