/* eslint-disable eqeqeq */
import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../itemDetail/ItemDetail"
import catalogoJson from "../../data/catalogo.json"

export const ItemDetailContainer = () => {

    const {id} = useParams()
    const [item, setItem] = useState([])

    useEffect(() =>{

        const filterPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(catalogoJson)

            }, 2000)
        })
        filterPromise.then((response) =>{
            setItem(response.find(prod => prod.id == id))
        })
    }, [id])
    console.log(`el id es ${id}`)

    return (
        <div>
            <ItemDetail key={id} item={item}/>
        </div>

    )

}