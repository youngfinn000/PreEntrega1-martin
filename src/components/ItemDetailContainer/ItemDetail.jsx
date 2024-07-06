import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
    return (
        <div className="item-detail">
            <img src={producto.imagen} alt="" />
            <div className="detail">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>precio: ${producto.precio}</p>
            </div>
        </div>
    );
};
export default ItemDetail;