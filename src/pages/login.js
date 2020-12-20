import React, { useState, useContext } from "react"
import { FirebaseContext } from '../components/Firebase'

const Login = () => {

    const [formState, setFormState] = useState({email: '', password: ''})
    const {firebase} = useContext(FirebaseContext);

    function handleSubmit(e) {
        e.preventDefault();

        firebase.login({email: formState.email, password: formState.password})
    }

    function handleInputChange(e) {
        e.persist();
        setFormState(currentValue => ({
            ...currentValue,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input value={formState.email} name="email" onChange={handleInputChange} placeholder="email" type="email" />
                <input value={formState.password} name="password" onChange={handleInputChange} placeholder="password" type="password" />
                <button type="submit">
                    Login
                </button>
            </form>
        </section>
    );
}

export default Login
