import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';




const Product = (product) => {
    const {thumbnail, price, title, brand, rating} = product
  return (
    <div className="col-md-4">
        <figure className="card card-product-grid">
            <div className="img-wrap"> 
                <img src={thumbnail} className="img-fluid w-100 img--resp" />
            </div>
            <figcaption className="p-1">
                <div className='border border-default text-xx-small' >
                    <FontAwesomeIcon className='text-danger px-1' icon={faDotCircle} /> 
                    <FontAwesomeIcon className='text-info px-1' icon={faDotCircle} /> 
                    <FontAwesomeIcon className='text-warning px-1' icon={faDotCircle} />
                </div>
                <b className='text-xx-small'>{title}</b>
                <div className="text-muted text-xx-small">$ { price.toFixed(2) }</div>
            </figcaption>
        </figure>
    </div>
  )
}

export default Product