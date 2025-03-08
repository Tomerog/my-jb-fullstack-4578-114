import axios from "axios";
import Product from "../models/product/product";
import Draft from "../models/product/draft";

class Products {
  async getPerCategory(categoryId: string): Promise<Product[]> {
    const response = await axios<Product[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/products/${categoryId}`
    );
    const products = response.data;
    return products;
  }

  async add(draft: Draft): Promise<Product> {
    const response = await axios.post(
      `${import.meta.env.VITE_REST_SERVER_URL}/products`,
      draft
    );
    const newProduct = response.data;
    return newProduct;
  }

  async remove(id: string): Promise<boolean> {
    const response = await axios.delete(
      `${import.meta.env.VITE_REST_SERVER_URL}/products/${id}`
    );
    const isDeleted = response.data;
    return isDeleted;
  }
}

const productsServices = new Products();
export default productsServices;
