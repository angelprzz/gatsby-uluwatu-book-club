import React, { useState } from 'react'
import {Form, Input, Button} from '../components/common'

const AddAuthor = () => {

    const [authorName, setAuthorName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input onChange={(e) => {
                e.persist();
                setAuthorName(e.target.value)
            }} value={authorName} placeolder="author name" />
            <Button type="submit" block>
                Add new author
            </Button>
        </Form>
    )
}

export default AddAuthor