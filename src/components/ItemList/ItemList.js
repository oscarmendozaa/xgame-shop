import Item from "../Item/Item"

const ItemList = ({data = []}) => {
  return (
    <>
    
    {data.map( (product)=>(
      <Item key={product.id} producto={product}/>
    ) )}

    </>
  )
}

export default ItemList