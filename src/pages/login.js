import React, { useState, useContext } from "react"
import { FirebaseContext } from '../components/Firebase'
import { Form, Input, Button } from '../components/common'

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
            <Form onSubmit={handleSubmit}>
                <Input value={formState.email} name="email" onChange={handleInputChange} placeholder="email" type="email" />
                <Input value={formState.password} name="password" onChange={handleInputChange} placeholder="password" type="password" />
                <Button type="submit" block>
                    Login
                </Button>
            </Form>
        </section>
    );
}

export default Login
