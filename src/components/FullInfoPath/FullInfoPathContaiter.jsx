import React from 'react';
import { sendNewFullDescription } from '../../redux/addPath-reducer'
import { connect } from "react-redux";
import FullInfoPath from './FullInfoPath';

let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        fullDescription: state.addPath.fullDescription
    }
}

export default connect(mapStateToProps, { sendNewFullDescription })(FullInfoPath)


