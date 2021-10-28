import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Toggole = () => {
    const [s, setS] = useState(true);
    const handleClick = (s) => {
        console.log(s)
        setS(s)
    }
    return (
        <div>
            <button onClick={() => handleClick(!s)}> set </button>
            {
                s ? <p>  log in </p> : <p>Register </p>
            }


            <Link to="/" onClick={() => handleClick(!s)}>{s ? "login" : "Register"}</Link>

        </div>
    );
};

export default Toggole;