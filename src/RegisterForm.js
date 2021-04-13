import React, {useState} from 'react';
import {useEasybase} from "easybase-react";

const RegisterForm = () => {

    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const {
        isUserSignedIn,
        signIn,
        signUp,
        getUserAttributes
    } = useEasybase();

    if (isUserSignedIn()) {
        return (
            <div>
                <h2>You're signed in!</h2>
                <button className="btn" onClick={_ => getUserAttributes().then(console.log)}>
                    Click me only works if your authenticated!
                </button>
                {/*<FrameRenderer />*/}
            </div>
        )
    } else {
        return (
            <div style={ { display: "flex", flexDirection: "column" } }>
                <h4>Username</h4>
                <input value={usernameValue} onChange={e => setUsernameValue(e.target.value)} />
                <h4>Password</h4>
                <input type="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
                <button className="btn" onClick={_ => signIn(usernameValue, passwordValue)}>
                    Sign In
                </button>
                <button className="btn" onClick={_ => signUp(usernameValue, passwordValue)}>
                    Sign Up
                </button>
            </div>
        )
    }

//
//     return (
//         <div>
//
//         </div>
//     );
};
//
export default RegisterForm;