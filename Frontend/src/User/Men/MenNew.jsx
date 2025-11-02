import React from 'react';
import './MenNew.css';
import new1 from '../../assets/new1.jpg';
import new2 from '../../assets/new2.jpg';
import new3 from '../../assets/new3.jpg';
import new4 from '../../assets/new4.jpg';
import new5 from '../../assets/new5.jpg';
import new6 from '../../assets/new6.jpg';

const MenNew = () => {

  const newIn = [
    { name: "The latest drops", image: new1 },
    { name: "Carhartt WIP", image: new2 },
    { name: "Labels we love", image: new3 },
    { name: "", image: new4 },
    { name: "New in footwear", image: new5 },
    { name: "Accessories", image: new6 },
  ]

  return (
    <>
      <div className="menNew-container">
        <div className="menNew-head"></div>
        <div className="menNew-cards">
          {newIn.map((item) => {
            return (
              <div className="menNew-card">
                <img src={item.image} />
                <span>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MenNew;
