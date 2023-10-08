import React, { useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, database } from '../../config/FirebaseConfig'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function Registration() {
    const [login, setLogin] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e, type) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (type == 'signup') {
            createUserWithEmailAndPassword(auth, email, password).then(data => {
                setLogin(true);
            }).catch(err => alert(err.code));
        }
        else {
            signInWithEmailAndPassword(auth, email, password).then(data => {
                // console.log(data.user.uid)

                localStorage.setItem('email', email);
                setLogin(true);
                navigate('/');
            }).catch(err => alert(err.code));
        }
    }
    const LoginBtn = () => {
        setLogin(true)
    }
    const SignUpBtn = () => {
        setLogin(false);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
        })
    });

    return (
        <div className='container text-center'>
            <h1 className='mt-3'>Registration</h1>
            <button onClick={LoginBtn} className='btn btn-success'>Login</button><button onClick={SignUpBtn} className='btn btn-info mx-1'>Sign Up</button>
            <h4 className='my-4'>{login ? 'Login' : 'Sign Up'}</h4>
            <form action="" onSubmit={(e) => handleSubmit(e, login ? 'login' : 'signup')}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" /><br /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" /><br /><br />
                <button typeof='submit' className='btn btn-primary'>{login ? 'Login' : 'Sign Up'}</button>
            </form>
        </div>
    )
}
