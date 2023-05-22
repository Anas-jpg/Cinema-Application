import React from 'react'
import  Categories from './Categories';
import  Header from './Header';

export default function CategoryFull({onNextStep}) {

    const handleNextStep = () => {
           onNextStep();
      };

    
  return (
    <div>
        <Header/>
      <Categories/>

    </div>
  )
}
