import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../context/cartContext/cartContext";

export default function ListProducts({product}) {
  const {name, price, image, color, _id } = product
  const { addItemToCart } = useContext(CartContext);
 
  const addProduct = () => addItemToCart(product);

  return (
    <div>
        <Link to={`/product/${_id}`}>
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={image}
                alt="Guitar"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{name}</h3>
                <p className="mt-1 text-sm text-gray-500">{color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${price}
              </p>
            </div>
          </div>
        </Link>
        <button onClick={addProduct}>comprar</button>
      </div>
  );
}
