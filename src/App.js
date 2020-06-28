import React from 'react';
import Header from './components/Header/Header'
import classes from './App.module.css';
import ContentPartContainer from './components/ContentPart/ContentPartContainer';

export default function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
     <ContentPartContainer />
    </div>
    

    
  )

}
