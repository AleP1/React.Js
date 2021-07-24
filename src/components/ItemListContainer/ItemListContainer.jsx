/* eslint-disable no-undef */

import { useState, useEffect } from "react"
import { useParams } from 'react-router'
import { ItemList } from "../ItemList/ItemLIst"
import catalogoJson from "../../data/catalogo.json"

export const ItemListContainer = () => {

    const [catalogo, setCatalogo] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        const nuevaPromesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(catalogoJson)
            }, 2000)
        })
        nuevaPromesa.then((resolve) => {
            const catalogoId = categoryId ? catalogoJson.filter((item) => item.categoryId === categoryId) : catalogoJson
            setCatalogo(catalogoId)
        })

    }, [categoryId])

    return (
        <section>
            <ItemList items={catalogo} />
        </section>

    )
}