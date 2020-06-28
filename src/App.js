import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer'
import classes from './App.module.css';
import ContentPartContainer from './components/ContentPart/ContentPartContainer';

export default function App() {
  return (
    <div className={classes.appWrapper}>
      <HeaderContainer />
      <ContentPartContainer />
    </div>



  )

}
