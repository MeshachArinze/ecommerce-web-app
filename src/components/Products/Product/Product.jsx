import {useState, useEffect, useCallback} from "react";
import { useParams, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../../context";

const Product = () => {
 const { increase } = useGlobalContext();
  const {id} = useParams();
  const [ product, setProduct ] = useState([]);
  const [loading, setLoading] = useState(false);
  //fakestoreapi.com/products/${id}

  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch(
        new URL(`https://fakestoreapi.com/products/${id}`),
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "omit",
          },
        }
      );
      setProduct(await response.json());
      setLoading(false);
    })();

  }, []);

  const Loading = useCallback(() => {
    return <div className="text-4xl">
      Loading
    </div>

  }, []);

  const ShowProduct = () => {
    
    return (
      <>
        <div className="translate-y-24 flex px-8 flex-col md:flex-row justify-around bg-lightCream py-4">
          <img
            className="object-cover px-8 object-center translate-y-12 h-[200px] "
            src={product.image}
            alt={product.title}
          />
          <div className="flex flex-col gap-y-10 items-center  overflow-hidden max-w-[500px]">
            <h6 className="text-4xl font-semibold text-lightOrange">
              {product.category}
            </h6>
            <h1>{product.title}</h1>
            <h2>{product.title}</h2>
            <h4 className="text-4xl">
              <span className="text-lightOrange">$</span>
              {product.price}
            </h4>
            <p className="text-2xl">{product.description}</p>
            <div className=" flex space-x-8">
              <button
                onClick={() => increase(id, "INCREASE")}
                className="bg-lightOrange rounded-3xl text-2xl text-lightCream px-6 py-2"
              >
                Add to cart
              </button>
              <NavLink
                to="/cart"
                className="bg-lightOrange rounded-3xl text-2l text-lightCream px-6 py-2"
              >
                Go to cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  return (
    <>
    <div className=" flex flex-col">
      {loading ? < Loading />  : < ShowProduct />}
    </div>
    </>
  );
};

export default Product;
