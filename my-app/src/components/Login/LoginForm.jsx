import React, { useState, useContext } from 'react'
import './LoginForm.css';
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { FaRegEye } from "react-icons/fa";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';




const LoginForm = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showPassword, setShowPassword] = useState(false);





    const navigate = useNavigate();




    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const submitForm = async (e) => {
        e.preventDefault();

        setError(null);
        const sendData = {
            email: user.email,
            password: user.password
        }
        axios.post('login-api/login.php', sendData).then((result) => {



            if (result.data.status === 200) {
                setSuccess("Login successful!");

                setTimeout(() => {
                    navigate("/");
                }, 1000);
            }
            else {
                alert('Invalid User');
            }
        })


    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    return (

        <div className='container-login'>
            <Navbar />
            <div className='wrapper-lg'>
                <form onSubmit={submitForm}>
                    <h1>Login</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                    <div className='input-box-login'>
                        <input type="text" placeholder='Email'
                            name='email' onChange={handleChange} value={user.email} required />
                        <FaUser className='icon' />

                    </div>
                    <div className='input-box-login'>
                        <input type={showPassword ? "text" : "password"} placeholder='Password' name='password' onChange={handleChange} value={user.password} required />
                        <FaLock className='icon' />
                    </div>
                    <div className='show_pass'>
                        <div className={'{ showPassword? "-slash": "" }'}
                            onClick={togglePasswordVisibility}>
                            <FaRegEye className='eye' />


                        </div>
                    </div>

                    <div className='remember-forgot-lg'>
                        <label ><input type='checkbox' />Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div>


                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <Link to="/register">Register</Link> </p>

                    </div>
                </form>
            </div >
        </div >
    )
}

export default LoginForm;