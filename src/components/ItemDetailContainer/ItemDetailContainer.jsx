import "./ItemDetailContainer.css"
import { useState, useEffect, } from "react"
import { useParams } from "react-router";
import { ItemDetail } from "../itemDetail/ItemDetail"
import catalogo from "../../data/catalogo.json"

export const ItemDetailContainer = () => {

    const {id} = useParams()
    const [item, setItem] = useState([])

    console.log(id)

    useEffect(() => {
        setTimeout(() => {
            const getItems = new Promise((resolve, reject) => {
                return {catalogo}
            })
                getItems.then((res) => {
                console.log(res)
                setItem(res)
                return id ? item.filter((item) => item.categotyId === id) : item
            })

            }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (
        <section>
            <ItemDetail item={item} />
        </section>

    )


}