import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail"
import catalogo from "../../data/catalogo.json"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve (catalogo)
            }, 2000)
            })
                getItems.then((res) => {
                console.log(res)
                setItem(res)
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <section>
            <ItemDetail item={item} />
        </section>

    )


}