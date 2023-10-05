import Product from "./Product"


const ProductsList = ({products}) => {
  return (
    <div className="row">
        {
            products.length ? products.map(p => {
                return <Product key={p.id} {...p} />
            }) : <div className="text-center text-muted">No Products found!</div>
        }
    </div> 
  )
}

export default ProductsList