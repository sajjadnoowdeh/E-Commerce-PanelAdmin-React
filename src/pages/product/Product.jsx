import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import {handleUpdateProductThunk} from '../../Store/reducers/product.reducer/product.reducer'
import Chart from "../../components/Chart/Chart";
import { Publish } from "@material-ui/icons";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./Product.style.css";
import { userRequest } from "../../services/axios/axios.config";
const Product = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.reducer.products);
  const [product, setProduct] = useState({});
  const [newProduct, setNewProcut] = useState({});
  const [category, setCategroy] = useState([]);
  const [file, setFile] = useState("");
  const [productStates, setProductStates] = useState([]);
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getUserStates = async () => {
      const { data } = await userRequest.get(`/users/states?pid=${productId}`);
      data.map((product) => {
        setProductStates((prev) => [
          ...prev,
          { name: MONTH[product._id - 1], Sales: product.total },
        ]);
      });
    };
    getUserStates();
  }, [MONTH]);

  useEffect(() => {
    setProduct(products.find((item) => item._id === productId));
  }, [productId]);

  const handleUpdate = (e) => {
    setNewProcut({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleCategory = (e) => {
    setCategroy(e.target.value.split(","));
  };

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };



  const handleClick = (e) => {
    e.preventDefault()
    const filename = new Date().getTime() + file?.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(StorageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            const product  = {...newProduct,img:downloadURL,category:category}
            dispatch(handleUpdateProductThunk({id:productId,product}))
            // navigate('/products')
          });
        }
      );
  };
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
            data={productStates}
            dataKey={"Sales"}
            title={"Sales Performance"}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="producrInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">id:</div>
              <div className="productInfoValue">{product._id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">sales:</div>
              <div className="productInfoValue">y343es</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">in stock:</div>
              <div className="productInfoValue">{product.inStock}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              placeholder={product.title}
              name="title"
              onChange={(e) => handleUpdate(e)}
            />
            <label htmlFor="">Product Description</label>
            <input
              type="text"
              placeholder={product.desc}
              name="desc"
              onChange={(e) => handleUpdate(e)}
            />
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder={product.price}
              name="price"
              onChange={(e) => handleUpdate(e)}
            />
            <label htmlFor="">Category</label>
            <input
              type="text"
              placeholder={product.category}
              name="category"
              onChange={(e) => handleCategory(e)}
            />
            <label htmlFor="">In Stock</label>
            <select
              name="inStock"
              id="instock"
              name="inStock"
              onChange={(e) => handleUpdate(e)}
            >
              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} className="productUploadImg" alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => handleChangeFile(e)}
              />
            </div>
            <button className="productButton" onClick={handleClick}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
