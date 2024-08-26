import { useState } from 'react';
import eyeImage from '../images/eye.png';
import "../style.css";

export default function Profile() {

    const [user, setUser] = useState({
        name: "",
        password: "",
        error: false
    });

    const [showPassword, setShowPassword] = useState(false);

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const revealPassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = () => {
        if (!user.name || !user.password) {
            setMessage("Both fields are required!");
            setUser({ ...user, error: true });
            return;
        }

        if (user.password.length < 8) {
            setMessage("Password must be at least 8 characters long.");
            setUser({ ...user, error: true });
            return;
        }

        setUser({ ...user, error: false });
        // Handle the update logic here (e.g., sending the data to a backend service)
    };

    return (
        <>
            <div className="flex items-center justify-center">
                {user.error && (
                    <div role="alert" className="alert alert-warning w-auto p-2 mt-3 inline-flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>{message}</span>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md p-4">
                    <h3>Name</h3>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        Name
                        <input type="text" className="grow" placeholder="" name='name' value={user.name} onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        Password
                        <input type={showPassword ? "text" : "password"} className="grow" placeholder="" name='password' value={user.password} onChange={handleChange} />
                        <button><img src={eyeImage} alt="Show Password" className="w-6 h-6 cursor-pointer transition duration-300 hover:brightness-210" onClick={revealPassword} /></button>
                    </label>
                    <button className="btn btn-outline w-full mb-4" onClick={handleSubmit}>Update Profile</button>
                </div>
            </div>
        </>
    );
}
