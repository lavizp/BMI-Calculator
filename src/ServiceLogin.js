import React,{useState} from 'react'

export default function ServiceLogin() {
    let usernameFromAPI = 'Lp';
    let passwordFromAPI = 'Lj';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLogin] = useState(false);
    const [textUI, setTextUI] = useState('Please Enter Your Credentials');



    const UsernameChangeHandler = (eventObject) =>{
        setUsername(eventObject.target.value)
    }

    const PasswordChangeHandler = (eventObject) =>{
        setPassword(eventObject.target.value)
    }

    const OnSubmit = () =>{
        if(username == usernameFromAPI && password == passwordFromAPI)
        {
            setLogin(true)
            setTextUI('LoggedIn')
            return
        }
        console.log(isLoggedIn);

        setLogin(false)

        setTextUI('Wrong Credentials,Please Try Again')
    }

  return (
    <div>
        <input type= 'text' onChange={(e)=> UsernameChangeHandler(e)}/>
        <input type= 'text' onChange={(e)=> PasswordChangeHandler(e)}/>
        <button onClick={OnSubmit}>Submit</button>
        {isLoggedIn? <p>LoggedIn</p> : <p>{textUI}</p>}

    </div>
  )
}
