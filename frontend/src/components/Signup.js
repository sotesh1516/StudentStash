import { useState } from 'react';
import eyeImage from '../images/eye.png';
import "../style.css"
import { Link } from 'react-router-dom';


export default function Signup() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    const reveilPassword = (event) => {
        setShowPassword(prev => !prev)
    }
    
    const handleSubmit = () => {
    
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-4">
                <label className="input input-bordered flex items-center gap-2 mb-4">
                    Name
                    <input type="text" className="grow" placeholder="" name='name' value={user.name} onChange={handleChange}/>
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-4">
                    Email
                    <input type="text" className="grow" placeholder="" name='email' value={user.email} onChange={handleChange}/>
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-4">
                    Password
                    <input type={showPassword ? "text" : "password"} className="grow" placeholder="" name='password' value={user.password} onChange={handleChange}/>
                    <button><img src={eyeImage} alt="Show Password" className="w-6 h-6 cursor-pointer transition duration-300 hover:brightness-210" onClick={reveilPassword} /></button>
                </label>
                <button className="btn btn-outline w-full mb-4">Sign Up</button>
                <p>Already have an account? <Link className="link link-primary" to="/signin">Sign in here</Link></p>
            </div>
        </div>
    );
}