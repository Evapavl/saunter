import React from 'react';
import { sendNewShortDescription, sendNewFullDescription } from "../../redux/addPath-reducer";
import { connect } from "react-redux";
import Header from './Header';

let mapStateToProps = (state) => {
    return {
        addPath: state.addPath,
        shortDescriptions: state.addPath.shortDescriptions,
        fullDescriptions: state.addPath.fullDescriptions
    }
}




const HeaderContainer = connect(mapStateToProps, { sendNewShortDescription, sendNewFullDescription })(Header)
export default HeaderContainer;