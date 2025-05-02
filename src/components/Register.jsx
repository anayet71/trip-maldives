import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';

const Register = () => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });







    const handleSubmit = (e) => {
        e.preventDefault()
        //  get form data
        const form = new FormData(e.target)
        // const name = form.get('name')
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        console.log(name, email, password)
    }
    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>

            </div>
        </div>
    );
};

export default Register;