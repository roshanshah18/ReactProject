
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-rating-stars-component";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import DCarousel from "./carousels";
import { useState,useEffect } from "react";
import { useCounter } from "../store/useccounter";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

const Card = () => {

const {count,increCount}=useCounter();
const [counter,setCounter]=useState(0);
  const [products, setProducts] = useState<Product[]>([]); //fetch
  const [isLoading, setIsLoading] = useState(true); //loader
  const [error, setError] = useState<string | null>(null); //error
  const [editingProduct, setEditingProduct] = useState<Product | null>(null); //upadteEdit
  const [formData, setFormData] = useState<Omit<Product, "id"> | null>(null); //editform

  useEffect(()=>{
    setCounter(count);
  },[count])  


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
    });
  };

  const handleUpdate = async () => {
    if (editingProduct && formData) {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${editingProduct.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
        const updatedProduct = await response.json();
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setEditingProduct(null);
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots color="#0071DC" height={80} width={80} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <>
      <DCarousel />
      <div className="mt-12 md:mt-0 grid grid-cols-1 lg:grid-cols-4 gap-6 mx-4 sm:mx-10 lg:mx-32">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white shadow-sm shadow-black border outline outline-0 hover:outline-1 rounded-lg p-4 flex flex-col"
          >
            <div className="flex justify-between gap-2 text-[#1A65C6] text-xl mb-4">
              <RiDeleteBin6Line
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer"
              />
              <FiEdit
                onClick={() => handleEdit(item)}
                className="cursor-pointer"
              />
            </div>
            <img
              className="h-60 sm:h-80 w-full object-contain"
              src={item.image}
              alt={item.title}
            />
            <p className="text-[#2A8754] pt-2 font-semibold">
              Now ${item.price}{" "}
              <span className="line-through text-[#74767C]">
                ${(item.price + 20).toFixed(2)}
              </span>
            </p>
            <h1 className="text-black-600 font-semibold pt-2">{item.title}</h1>
            <p className="text-sm">{item.description}</p>
            <ReactStars className="mt-2" />
            <div className="mt-auto flex justify-between">
              <button className="h-[33px] w-[65px] rounded-lg outline outline-1 font-normal hover:bg-gray-600 hover:text-white">
                Options
              </button>
              <button
              onClick={()=>increCount(1)}
              className="h-[33px] w-[120px] hover:bg-[#004f9a] bg-[#1A65C6] text-white rounded-lg">
                AddToCart 
                
              </button>
            </div>
          </div>
        ))}
      </div>
      editForm
      {editingProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl mb-4">Edit Product</h2>
            <label className="block mb-2">Title</label>
            <input
              type="text"
             
              onChange={(e) =>
                setFormData({ ...formData!, title: e.target.value })
              }
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Price</label>
            <input
              type="number"
            
              onChange={(e) =>
                setFormData({ ...formData!, price: parseFloat(e.target.value) })
              }
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Image URL</label>
            <input
              type="text"
             
              onChange={(e) =>
                setFormData({ ...formData!, image: e.target.value })
              }
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Description</label>
            <textarea
              onChange={(e) =>
                setFormData({ ...formData!, description: e.target.value })
              }
              className="border rounded-lg w-full p-2 mb-2"
            />
            <label className="block mb-2">Category</label>
            <input
              type="text"
            
              onChange={(e) =>
                setFormData({ ...formData!, category: e.target.value })
              }
              className="border rounded-lg w-full p-2 mb-4"
            />
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Update
            </button>
            <button
              onClick={() => setEditingProduct(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-6">
        <button className="h-8 w-28 rounded-lg outline outline-1 font-normal hover:bg-gray-600 hover:text-white">
          View More
        </button>
      </div>
    </>
  );
};

export default Card;
