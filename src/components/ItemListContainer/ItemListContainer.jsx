
import {useState, useEffect} from "react"
import {ItemList} from "../ItemList/ItemLIst"
import catalogoJson from "../../data/catalogo.json"

export const ItemListContainer =()=>{

    const [catalogo, setCatalogo] = useState([])

  const prod = catalogoJson

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
        //nuevaPromesa.then((res)=>{
           // res.filter(categotyId)
           // console.log(`La categoria del producto es ${categotyId}`)
       // })
        //nuevaPromesa.reject((err)=>{
          //  alert("no se encontró el producto")
        //})

    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    return(
        <>
            <ItemList items={catalogo}/>
        </>

    )


}