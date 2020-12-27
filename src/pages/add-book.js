import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from '../components/Firebase'

const AddBook = () => {
    const { firebase } = useContext(FirebaseContext)
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        if(firebase) {
            firebase.getAuthors().then(snapshot => {
                console.log(snapshot)
                const availableAuthors = [];
                snapshot.forEach(doc => {
                    availableAuthors.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })

                setAuthors(availableAuthors)
            })
        }
    }, [firebase])

    console.log(authors)
    return(<div />)
}

export default AddBook