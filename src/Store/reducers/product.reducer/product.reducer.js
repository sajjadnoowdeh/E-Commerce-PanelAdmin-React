import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "./product.api";

const init = {
  products: [],
  loading: false,
  error: false,
};
// get products handle with thunk
export const getProductsThunk = createAsyncThunk(
  "productReducer/produts",
  async () => {
    try {
      const data = await getProducts();
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// delete product
export const handleRemoveProductTunck = createAsyncThunk(
  "productReducer/removeProduct",
  async (id) => {
    try {
      const data = await deleteProduct(id);
      console.log(data);
    } catch (error) {
      throw error.response.data;
    }
  }
);

// add product
export const handleAddProductThunk = createAsyncThunk(
  "productReducer/addProduct",
  async (product) => {
    try {
      const data = await addProduct(product);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const handleUpdateProductThunk = createAsyncThunk(
  "productReducer/updateProduct",
  async (payload) => {

    try {
      const newProduct = await updateProduct(payload.id, payload.product);
      return {
        product:  newProduct,
        id: payload.id}
    } catch (error) {
      throw error.response.data;
    }
  }
);

const productReducer = createSlice({
  name: "productReducer",
  initialState: init,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // delete
    builder.addCase(handleRemoveProductTunck.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleRemoveProductTunck.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(handleRemoveProductTunck.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Add
    builder.addCase(handleAddProductThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleAddProductThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(handleAddProductThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

     // update
     builder.addCase(handleUpdateProductThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleUpdateProductThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products.map((item)=>item._id === action.payload.id ? action.payload : item)
      console.log(action);
    });
    builder.addCase(handleUpdateProductThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { startLogin, successLogin, faillLogin, handleRemoveProduct } =
  productReducer.actions;
export default productReducer.reducer;
