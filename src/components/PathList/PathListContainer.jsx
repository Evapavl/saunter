import React from 'react';
import { sendNewShortDescription, setCurrentPath } from '../../redux/addPath-reducer'
import { connect } from "react-redux";
import PathList from './PathList';

let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        show: state.addPath.show,
        id: state.addPath.id
    }
}

export default connect(mapStateToProps, { sendNewShortDescription, setCurrentPath })(PathList)


