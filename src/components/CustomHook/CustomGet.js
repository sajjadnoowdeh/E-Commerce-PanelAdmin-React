import { useEffect, useState } from "react";
import { userRequest } from "../../services/axios/axios.config";

const useGetProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErorr] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const { data } = await userRequest.get(url);
        setProducts(data);
      } catch (error) {
        setErorr(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [url]);

  return [products, setProducts, loading, error];
};

export default useGetProducts;
