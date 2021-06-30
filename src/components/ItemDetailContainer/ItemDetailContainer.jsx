import "./ItemDetailContainer.css"
import {useState, useEffect} from "react"
import { ItemDetail } from "../itemDetail/ItemDetail"

export const ItemDetailContainer =()=>{

    const [item, setItem] = useState([])


    useEffect(()=>{
        setTimeout(() => {
        const getItems = () => {
                return {
                    id: 1,
                    title: "Bicicleta",
                    price: "$50000",
                    description: "Es una mountain bike",
                    pictureUrl: "data:image/jpeg;base64,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"
                }
            }
                const items = getItems()
                setItem(items)
            }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function asyncCall() {
        console.log('calling');
        const result = await item;
        console.log(result);
      }
      asyncCall()
        
      

    return(
       <section>
        <ItemDetail item={item}/>
       </section>

    )


}