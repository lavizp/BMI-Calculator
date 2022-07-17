import React, {useState, useRef} from 'react';

export default function Inputfield() {
    const weightRef = useRef();
    const heightRef = useRef();

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();

    const changeHandlerWeight = (evenFrom, eventObject) =>{
        setWeight(eventObject.target.value);
    }
    const changeHandlerHeight = (evenFrom, eventObject) =>{
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
            <input type= "text" onChange={(e) => changeHandlerWeight("weight",e)} />
        </div>
        <div className="Input Height">
            Input Weight in cm
            <input type= "text" onChange={(e) => changeHandlerHeight("height",e)} />
        </div>
        <button onClick={calculateBMI}>calculateBMI</button>
        <p>The Bmi is, {bmi}</p>
    </>
  )
}
