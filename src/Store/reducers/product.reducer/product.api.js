import { userRequest } from "../../../services/axios/axios.config";
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    userRequest
      .get("/products")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    userRequest
      .delete(`/products/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export const addProduct = (product) => {
  return new Promise((resolve, reject) => {
    userRequest
      .post(`/products`, product)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export const updateProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    userRequest
      .put(`/products/${id}`, product)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
