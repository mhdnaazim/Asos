import React from 'react';
import '../Men/MenNew.css';
import wn1 from '../../assets/wn1.jpg';
import wn2 from '../../assets/wn2.jpg';
import wn3 from '../../assets/wn3.jpg';
import wn4 from '../../assets/wn4.jpg';
import wn5 from '../../assets/wn5.jpg';
import wn6 from '../../assets/wn6.jpg';

const WomenNew = () => {

    const womenNew = [
        {name: "The latest drops", image: wn1 },
        {name: "The sourced collection", image: wn2 },
        {name: "ARRANGE", image: wn3 },
        {name: "adidas", image: wn4 },
        {name: "New in trainers", image: wn5 },
        {name: "Huda Beauty", image: wn6 }
    ]

  return (
    <>
      <div className="menNew-container">
        <div className="menNew-head"></div>
        <div className="menNew-cards">
          {womenNew.map((item) => {
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

export default WomenNew
