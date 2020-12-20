import React, {useState} from "react"
import { useAuth } from '../components/Firebase'

import Layout from "../components/layout"

const SecondPage = () => {

    const [formState, setFormState] = useState({email: '', password: ''})
    const {firebase} = useAuth();

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
        <Layout>
            <form onSubmit={handleSubmit}>
                <input value={formState.email} name="email" onChange={handleInputChange} placeholder="email" type="email" />
                <input value={formState.password} name="password" onChange={handleInputChange} placeholder="password" type="password" />
                <button type="submit">
                    Login
                </button>
            </form>
        </Layout>
    );
}

export default SecondPage
