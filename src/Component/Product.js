import { Link } from 'react-router-dom';
import './product.css';

function Product(props){
    let {product} = props;
    // let {isShown} = props;
    // console.log(" product")
    // console.log( product.rating.rate);
    
    return(
        <div className="col-md-6 col-lg-3 mb-3">
            <div className="card text-center h-100">
                <div className="image">
                    <img src={product.image} className="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h5 className="card-title w-75 m-auto mb-2">{product.title}</h5>
                    <p className="card-text fs-4"> price : {product.price}</p>
                    <p className="card-text fw-semibold"> Rate :  {product.rating.rate}</p>
                    {/* {props.isShown && <Link  className="btn btn-primary"  to={`/details/${props.product.id}`}>Details</Link>} */}
                </div>
            </div>
        </div>   
    )
}
export default Product;