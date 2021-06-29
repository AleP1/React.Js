
import {useState, useEffect} from "react"
import {ItemList} from "../ItemList/ItemLIst"


export const ItemListContainer =()=>{

    const [catalogo, setCatalogo] = useState([])

  const prod= [{
    id: '1',
    title: 'Plegable',
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8luI9u6DBmTrtKJcJyiKMDLkrQQPRbkd6zlmRMRafyI3eoLvcw4SSWz-Wo0s4KTpE8M&usqp=CAU",
    description: 'Bicicleta liviana y facil de plegar',
    price: '$45000'
},
{
    id: '2',
    title: 'Casco Depredador',
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_836647-MLA41971928650_052020-W.jpg",
    description: 'Casco Depredador De Fibra De Carbono',
    price: '$31000'
},
{
    id: '3',
    title: 'parches',
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_655285-MLA43736688640_102020-O.jpg",
    description: 'KIT DE REPARACION PARA CUBIERTAS DE BICICLETA / MOTO',
    price: '$150'
}]

    useEffect(()=>{

        const nuevaPromesa = new Promise((res, rej)=>{

            setTimeout(()=>{
                res(prod)
            },2000)
        })
        nuevaPromesa.then((res)=>{
            console.log(res)
            setCatalogo(res)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <>
            <ItemList items={catalogo}/>
        </>

    )


}