
import Item from './Item'; 
function ItemList({ productos }) {
    return (
        <section className="griditems">
            {productos.map((producto, indice) => (
                <Item key={indice} producto={producto} />
            ))}
        </section>
    );
}

export default ItemList;
