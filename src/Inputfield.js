import React, {useState} from 'react';

export default function Inputfield() {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();

    const changeHandlerWeight = (eventObject) =>{
        setWeight(eventObject.target.value);
    }
    const changeHandlerHeight = (eventObject) =>{
        setHeight(eventObject.target.value);
    }
    const calculateBMI = () =>
    {
        if(weight && height)
        {
            setBmi(weight/height);

        }
    }
  return (
    <>
        <div className="Input weight">
            Input Weight in kg
            <input type= "text" onChange={(e) => changeHandlerWeight(e)} />
        </div>
        <div className="Input Height">
            Input Weight in cm
            <input type= "text" onChange={(e) => changeHandlerHeight(e)} />
        </div>
        <button onClick={calculateBMI}>calculateBMI</button>
        <p>The Bmi is, {bmi}</p>
    </>
  )
}
