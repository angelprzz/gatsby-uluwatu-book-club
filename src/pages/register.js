import React from 'react'
import { Form, Input, Button } from '../components/common'

const Register = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input placeholder="email" type="email" required />
            <Input placeholder="password" type="password" required minLength={3}/>
            <Input placeholder="confirm password" type="password" required minLength={3} />
            <Button type="submit" block>
                Register
            </Button>
        </Form>
    )
}

export default Register;