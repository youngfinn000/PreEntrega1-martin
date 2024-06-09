import "./ItemListContainer.scss"
const ItemListContainer = ({ saludo }) => {
return(
    <div className="text-3xl font-bold underline">  
        <h2>{saludo}</h2>
    </div>
)
}
export default ItemListContainer