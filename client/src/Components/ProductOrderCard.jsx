import "../index.css";

import { useCartContext } from "../hooks/useCartContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import FormatPriceToPhp from "../functions/FormatPriceToPhp.jsx";

function ProductOrderCard({ item }) {
  const { handleAddCart, handleCartDelete, retQty } =
    useCartContext(CartContext);

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mt-5 mb-3 rounded-full shadow-lg"
            src={item.product_image_url}
            alt={item.product_desc}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {item.product_name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {FormatPriceToPhp(item.unit_price)}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Quantity: {retQty(item.product_id)}
          </span>
          <div className="flex mt-4 md:mt-6">
            <button
              onClick={() => handleAddCart(item)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Qty
            </button>
            <button
              onClick={() => handleCartDelete(item)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
            >
              Remove Qty
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductOrderCard;
