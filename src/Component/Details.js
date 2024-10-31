import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
function Details() {
  
  let [product, setProduct] = useState({});
  console.log("details of produicts");
  
  console.log(product)
  let params = useParams();
   console.log(params);

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then((result) => result.json())
        .then((data) => setProduct(data));
    }, []);

  return (
    <div className="details">
      <h1>Details: {params.productId}</h1>
      <h1>{product.title}</h1>
       {product && <Product  product={product} isShown={false} />}
    </div>
  );
}
export default Details;
