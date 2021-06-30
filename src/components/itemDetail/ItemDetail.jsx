import "./ItemDetail.css"

export const ItemDetail = ({item})=>{
    console.log(item)
    return (
        <div className="card">
            <img className="card__img"src={item.pictureUrl} alt="fotito"/>
            <p className="card__title">{item.title}</p>
            <p className="card__price">{item.price}</p>
            <p className="card__des">{item.description}</p>
        </div>
    )

}