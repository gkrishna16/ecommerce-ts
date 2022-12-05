import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import prd from "./product.module.css";
import { ProductsState } from "../../../types";
import { publicRequest } from "../../../requestMethod";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  // product array
  const [product, setProduct] = useState<ProductsState[]>();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    async function getProductById() {
      try {
        const res = await publicRequest.get(`/products/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById();
  }, [id]);

  // button for cart
  const handleQuantity = (type: String): void => {
    if (type === "decs") {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
    console.log(quantity);
  };

  return (
    <div>
      <div className="">
        <div>
          {product?.map((item: ProductsState, index) => (
            <div className={`${prd.productContainer}`}>
              <div className={`${prd.imgBox}`} key={index}>
                <img src={item.imgUrl} alt="" />
                {/* <div className="">{item.name}</div> */}
                <div className={`${prd.leftButton}`}>
                  <div className="">
                    <button onClick={() => handleQuantity(`asc`)}>+</button>
                    <button onClick={() => handleQuantity(`desc`)}>-</button>
                  </div>
                  <button>Add to cart.</button>
                </div>
              </div>

              <div className={`${prd.infoBox}`}>
                <div className={`${prd.top}`}>
                  <div className={`${prd.title}`}>
                    {item.name.toUpperCase()}
                  </div>
                  <div className={`${prd.desc}`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
                <div className={`${prd.colSize}`}>
                  <div className="">
                    <div className="">Color</div>
                    <select name="color" id="">
                      <option value="red">Red</option>
                      <option value="yellow">Yellow</option>
                      <option value="green">Green</option>
                    </select>
                  </div>
                  <div className="">
                    <div className="">Size</div>
                    <select name="size" id="">
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
                    <div className="">Quantity</div>
                    <button>+</button>
                    <button>-</button>
                  </div>
                  <div className="">
                    <button>Add to Cart.</button>
                  </div>
                </div>
                <div className={`${prd.pri}`}>
                  <div className="">Price : </div>
                  <div className="">${item.price.toString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
