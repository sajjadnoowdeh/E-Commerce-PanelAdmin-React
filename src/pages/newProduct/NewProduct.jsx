import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import {useDispatch} from 'react-redux'
import "./NewProduct.style.css";
import { handleAddProductThunk } from "../../Store/reducers/product.reducer/product.reducer";

import { useNavigate } from "react-router-dom";
const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const [fileImg, setFileImg] = useState(null);
  const [category, setCategory] = useState([]);

  const handleOnChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleChangeCate = (e) => {
    setCategory(e.target.value.split(","));
  };
  const handleChangeFile = (e) => {
    setFileImg(e.target.files[0]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const filename = new Date().getTime() + fileImg?.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(StorageRef, fileImg);
    
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
          // console.log("File available at", downloadURL);
          const product  = {...newProduct,img:downloadURL,category:category}
          dispatch(handleAddProductThunk(product))
        });
      }
    );
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="">Image</label>
          <input type="file" id="file" onChange={handleChangeFile} />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Airphone"
            name={"title"}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Discription</label>
          <input
            type="text"
            placeholder="discrioption"
            name={"desc"}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Price</label>
          <input
            type="text"
            placeholder="1000"
            name="price"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Category</label>
          <input
            type="text"
            placeholder="jeans,skirts"
            onChange={handleChangeCate}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Stock</label>
          <select name="inStock" onChange={(e) => handleOnChange(e)}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>

        <button className="addProductButton" onClick={(e) => handleClick(e)}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
