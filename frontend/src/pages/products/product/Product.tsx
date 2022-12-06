import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import prd from "./product.module.css";
import { ProductsState } from "../../../types";
import { publicRequest } from "../../../requestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../components/redux/cartRedux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  // product array
  const [product, setProduct] = useState<ProductsState>();
  const [quantity, setQuantity] = useState<Number>(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();
  console.log(color, size);

  useEffect(() => {
    async function getProductById() {
      try {
        const res = await publicRequest.get(`/products/${id}`);
        console.log(res.data[0]);
        setProduct(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById();
  }, [id]);

  // button for cart
  const handleQuantity = (type: String): void => {
    if (type === "desc" && quantity > 0) {
      setQuantity(Number(quantity) - 1);
    } else {
      setQuantity(Number(quantity) + 1);
    }
    console.log(quantity);
  };

  function handleClick() {
    // update cart
    if (quantity > 0) {
      // @ts-ignore
      dispatch(
        // @ts-ignore
        addProduct({
          ...product,
          quantity,
          color,
          size,
        })
      );
    } else {
      alert("The product quantity is 0.");
    }
  }

  return (
    <div>
      <div className="">
        <div className={`${prd.productContainer}`}>
          <div className={`${prd.imgBox}`}>
            <img src={product?.img} alt="" />
          </div>

          <div className={`${prd.infoBox}`}>
            <div className={`${prd.top}`}>
              <div className={`${prd.title}`}>
                {product?.title.toUpperCase()}
              </div>
              <div className={`${prd.desc}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div className={`${prd.colSize}`}>
              <div className="">
                <div className="">Color</div>
                <select
                  name="color"
                  id=""
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                </select>
              </div>
              <div className="">
                <div className="">Size</div>
                <select
                  name="size"
                  id=""
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="X">X</option>
                  <option value="XL">XL</option>
                  <option value="M">M</option>
                  <option value="S">S</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>
            <div className={`${prd.quan}`}>
              <div className="">
                <div className="">{Number(quantity)}</div>
                <button onClick={(e) => handleQuantity(`asc`)}>+</button>
                <button onClick={(e) => handleQuantity(`desc`)}>-</button>
              </div>
              <div className="">
                <button onClick={handleClick}>Add to Cart.</button>
              </div>
            </div>
            <div className={`${prd.pri}`}>
              <div className="">Price : </div>
              {/* @ts-ignore */}
              <div className="">${Number(product?.price)}</div>
            </div>
          </div>
        </div>
        ));
      </div>
    </div>
  );
};

export default Product;
