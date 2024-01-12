import React, { useState } from 'react'
import styled from 'styled-components';
import { calculateRedshiftFromDistance, mapRedshiftToColor } from '../helpers/dopplerEquation';
import { calculateSchwarzschildRadius, isBlackHoleCandidate } from '../helpers/schwarzschildEquation';

const EquationsComponent = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const hubbleConstant = 70;
    const speedOflight = 3e5;

    const handleSliderChange = (e) => {
        const newDistance = parseInt(e.target.value, 10);
        setSliderValue(newDistance);
    }

   const redshift = calculateRedshiftFromDistance(sliderValue, hubbleConstant, speedOflight);
   const starColor = mapRedshiftToColor(redshift);


   // Black Hole Radius
   const [blackValue, setBlackValue] = useState(0);
   const [radius, setRadius] = useState(1);

   const handleBlackHole = (e) => {
        setBlackValue(e.target.value)
   }

   const schNum = calculateSchwarzschildRadius(blackValue);
   const isBlackHole = isBlackHoleCandidate(radius, schNum);

   const handleRadius = (e) => {
    setRadius(e.target.value)
}


   

  return (
    <Equations>
        <div className="equations-container">
            <div className="redshift">
                <label htmlFor="slider">Choose distance: </label>
                <input
                    type='range'
                    id='slider'
                    name='slider'
                    min='0'
                    max='100'
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
                <div id="star" style={{ width: '100px', height: '100px', backgroundColor: starColor, borderRadius: '50%'}}></div>
            </div>
            <div className="blackhole">
                <label htmlFor="slider-blackhole">Choose mass (in Solar Masses): </label>
                <input 
                    type='range'
                    id="slider-blackhole"
                    name='slider-blackhole'
                    min='1'
                    max='50'
                    value={blackValue}
                    onChange={handleBlackHole}
                />
                <br></br>
                <br></br>
                <br></br>
                <p>Radius: {schNum}</p>
                <p>Slider value: {blackValue}</p>
                <label htmlFor="radius">Choose the radius of the object: </label>
                <input
                    type='number'
                    id="radius"
                    name='radius'
                    min='0'
                    max='1000000'
                    step='10'
                    value={radius}
                />
            </div>
        </div>
    </Equations>
  )
}

const Equations = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .equations-container {
        width: 90%;
        min-height: 100vh;
        background: rgba(255, 255, 255, .075);
        backdrop-filter: blur(10px);
        border-radius: 12px;
    }
    #star {
        transition: background .5s ease;
    }
`

export default EquationsComponent;