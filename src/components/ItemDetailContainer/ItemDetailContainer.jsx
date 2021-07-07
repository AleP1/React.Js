import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../itemDetail/ItemDetail"
import catalogoJson from "../../data/catalogo.json"

export const ItemDetailContainer = () => {

    const {id} = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        const getItems = new Promise((resolve, rejected) => {
                setTimeout(() => {
                    resolve(catalogoJson)
            }, 2000)
            })
                getItems.then((resolve) => {
                console.log(resolve)
                const itemId = id ? catalogoJson.filter((item) => item.id === id) : catalogoJson
                setItem(itemId)
            })
    }, [id])


    return (
        <section>
            <ItemDetail item={item} />
        </section>

    )


}