import React, {useState, useContext} from 'react'
import {Form, Input, Button, ErrorMessage} from '../components/common'
import {FirebaseContext} from '../components/Firebase'

const Register = () => {
    const {firebase} = useContext(FirebaseContext)
    const [errorMessage, setErrorMessage] = useState('')

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    })

    function handleInputChange(e) {
        e.persist()
        setErrorMessage('')
        setFormState(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(formState.password === formState.confirmPassword){
            firebase.register({
                username: formState.username,
                email: formState.email,
                password: formState.password,
            }).catch(e => {
                setErrorMessage(e.message);
            })
        } else {
            setErrorMessage('Password and confirm password fields must match')
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input onChange={handleInputChange} value={formState.username} placeholder="username" type="test" required name="username"/>
            <Input onChange={handleInputChange} value={formState.email} placeholder="email" type="email" required name="email"/>
            <Input onChange={handleInputChange} value={formState.password} placeholder="password" type="password" required minLength={6} name="password"/>
            <Input onChange={handleInputChange} value={formState.confirmPassword} placeholder="confirm password" type="password" required minLength={6} name="confirmPassword"/>
            {!!errorMessage &&
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            }
            <Button type="submit" block>
                Register
            </Button>
        </Form>
    )
}

export default Register;