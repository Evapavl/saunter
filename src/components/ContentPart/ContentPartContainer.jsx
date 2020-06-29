import React from 'react';
import { showFullDescription, setCurrentPath } from '../../redux/addPath-reducer';
import { connect } from 'react-redux';
import ContentPart from './ContentPart';

let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        show: state.addPath.show, 
        idCurrentPath: state.addPath.idCurrentPath
    }
}

export default connect(mapStateToProps, { setCurrentPath, showFullDescription })(ContentPart)

