import React from 'react';
import {showFullDescription, setCurrentPath} from '../../redux/content-reducer';
import { connect } from 'react-redux';
import ContentPart from './ContentPart';

let mapStateToProps = (state) => {
    return {
        contentPart: state.contentPart,
        show: state.contentPart.show
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showFullDescription: (show) => {
            dispatch(showFullDescription(show));
        }
    }
}


export default connect (mapStateToProps, {setCurrentPath, showFullDescription})(ContentPart)

