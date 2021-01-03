import React, {useState, useContext} from "react"
import {FirebaseContext} from '../components/Firebase'
import {Form, Input, Button, ErrorMessage} from '../components/common'
import {navigate} from "gatsby";

const Login = () => {

    const [formState, setFormState] = useState({email: '', password: ''})
    const {firebase} = useContext(FirebaseContext)
    const [errorMessage, setErrorMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        firebase.login({email: formState.email, password: formState.password})
            .then(() => {
                navigate(`/`)
            })
            .catch(e => {
                console.log(e)
                setErrorMessage(e.message)
            })
    }

    function handleInputChange(e) {
        e.persist();
        setErrorMessage('')
        setFormState(currentValue => ({
            ...currentValue,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Input required value={formState.email} name="email" onChange={handleInputChange} placeholder="email" type="email" />
                <Input required value={formState.password} name="password" onChange={handleInputChange} placeholder="password" type="password" />
                {!!errorMessage &&
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                }
                <Button type="submit" block>
                    Login
                </Button>
            </Form>
        </section>
    );
}

export default Login
