import React from "react";
import { Link } from "react-router-dom";

import Chart from "../../components/Chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import "./Product.style.css";
const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTile">Product</h1>
        <Link to={"/newProduct"}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey={"Sales"}
            title={"Sales Performance"}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Airphone</span>
          </div>
          <div className="producrInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">id:</div>
              <div className="productInfoValue">123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">sales:</div>
              <div className="productInfoValue">y343es</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">active:</div>
              <div className="productInfoValue">yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">in stock:</div>
              <div className="productInfoValue">no</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Airphone Airpade" />
            <label htmlFor="">In Stock</label>
            <select name="instock" id="instock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="productUploadImg"
                alt=""
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
