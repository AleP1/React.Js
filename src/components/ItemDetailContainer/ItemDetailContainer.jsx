import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { projectFirestore as dataBase } from '../../firebase/firebase'

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const db = dataBase
        const itemCollection = db.collection("1")
        const collectionToShow = itemCollection.doc(id)

        collectionToShow.get().then(doc => {
            if (!doc.exists) {
                console.log('Item does not exist! :(')
                return
            }
            console.log('Item found!')
            setItem({ id: doc.id, ...doc.data() })
            console.log(`item ${item.id}`)
        }).catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => {
            setLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (

        loading
            ? <div>Loading...</div>
            : <div>
                <ItemDetail key={id} item={item} />
            </div>


    )

}