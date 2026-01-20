import React, { useEffect, useState } from 'react'
import Cards from '../../Cmponents/MUI/Cards/Cards__'
import axios from 'axios'

const Cards_screen = () => {

    let [apidata, setApidatta] = useState([]);

    useEffect(() => {
        try {
            axios
                .get("https://fakestoreapi.com/products")
                .then((response) => setApidatta(response.data))
        } catch (error) {
            console.log(error)
        }


    }, [])



    return (
        <>
            <div>
                <Cards apidatas={apidata} />
            </div>
        </>
    )
}

export default Cards_screen
