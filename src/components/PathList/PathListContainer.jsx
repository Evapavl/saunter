import React from 'react';
import { sendNewShortDescription } from '../../redux/addPath-reducer'
import { setCurrentPath } from '../../redux/content-reducer'
import { connect } from "react-redux";
import PathList from './PathList';




let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        contentPart: state.contentPart,
        show: state.contentPart.show,
    }
}

export default connect(mapStateToProps, { sendNewShortDescription, setCurrentPath })(PathList)


