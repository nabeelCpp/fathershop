import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const Product = (product) => {
    const {thumbnail, price, title, brand, rating} = product
  return (
    <div className="col-md-4">
        <figure className="card card-product-grid">
            <div className="img-wrap"> 
                <img src={thumbnail} className="img-fluid w-100 img--resp" />
                <span className="badge badge-success text-xx-small">{brand}</span>
            </div>
            <figcaption className="p-1">
                <b>{title}</b>
                <div className="row">
                    <div className="col-8">
                        <span className="text-muted">$ {price}</span>
                    </div>
                    <div className="col-4">
                        {rating.toFixed(1)} <FontAwesomeIcon icon={faStar} style={{color: '#2aca42', fontSize: '15px'}} />
                    </div>

                </div>
            </figcaption>
        </figure>
    </div>
  )
}

export default Product