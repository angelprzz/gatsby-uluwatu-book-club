import React, {useState, useContext} from 'react'
import { Form, Input, Button } from '../components/common'
import {FirebaseContext} from '../components/Firebase'

const Register = () => {
    const {firebase} = useContext(FirebaseContext)

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleInputChange(e) {
        e.persist()
        setFormState(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(formState.password === formState.confirmPassword){
            firebase.register({
                email: formState.email,
                password: formState.password,
            })
        }

        console.log(formState)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input onChange={handleInputChange} value={formState.email} placeholder="email" type="email" required name="email"/>
            <Input onChange={handleInputChange} value={formState.password} placeholder="password" type="password" required minLength={6} name="password"/>
            <Input onChange={handleInputChange} value={formState.confirmPassword} placeholder="confirm password" type="password" required minLength={6} name="confirmPassword"/>
            <Button type="submit" block>
                Register
            </Button>
        </Form>
    )
}

export default Register;