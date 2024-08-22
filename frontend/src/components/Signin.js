import { useState } from 'react';
import eyeImage from '../images/eye.png';
import "../style.css"
import {Link} from 'react-router-dom';

function Signin(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (event) => {
        const{name, value} = event.target
        setUser({ ...user, [name]: value})
    }

    const reveilPassword = (event) => {
        setShowPassword(prev => !prev)
    }

    const handleSubmit = () => {

    }

    return(
        <>
        </>

    )


}