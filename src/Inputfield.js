import React, {useState, useRef} from 'react';

export default function Inputfield() {
    const weightRef = useRef();
    const heightRef = useRef();

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();

    function calculateBMI(e)
    {
        const wght = weightRef.current.value;
        const hght = heightRef.current.value;
        if(wght === '' || hght === '') return;
        setWeight(Number(wght));
        setHeight(Number(hght));
        let bmi_value = (weight/((height/100)*(height/100)));
        setBmi(Math.floor(bmi_value) );

      
    }
  return (
    <>
        <div className="Input weight">
            Input Weight in kg
            <input type= "text" ref={weightRef}></input>
        </div>
        <div className="Input Height">
            Input Weight in cm
            <input type= "text" ref={heightRef}></input>
        </div>
        <button onClick={calculateBMI}>calculateBMI</button>
        <p>{bmi}</p>
    </>
  )
}
