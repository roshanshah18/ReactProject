import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { PiDiamondsFourFill, PiDiamondsFourDuotone } from "react-icons/pi";
import { useCounter } from "../store/useccounter";
import  { useState } from 'react';
import AddProductForm from '../forms/addproduct';
import { ImCross } from 'react-icons/im';
import Modal from '../components/Modal';

const Navbar = () => {
  const { count } = useCounter();  
  const [openModal, setOpenModal] = useState<boolean>(false);

  
  return (
    <>
      <div className="bg-[#0071DC] flex md:flex md:justify-around items-center md:h-24">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-white"
          }
        >
          <div className="p-1 flex gap-4 justify-center items-center w-[120px]">
            <FaShoppingBasket className="text-3xl" />
            <div>
              <p className="text-2xl font-bold"> Infi </p>
              <p className="font-bold text-sm"> Shop </p>
            </div>
          </div>
        </NavLink>
        <div className="text-lg flex justify-center items-center md:flex-row md:gap-10 md:text-lg">
          <div className="relative text-sm">
            <input
              className="text-[#064059] h-8 w-72 rounded-full pl-2 md:h-[40px] md:w-[900px] md:rounded-full md:pl-4 border-none outline-none placeholder:text-[#064059] md:placeholder:pt-10"
              placeholder="Enter Keywords to Search in Store"
              type="text"
            />
            <button>
              <CiSearch className="text-2xl absolute right-3 md:top-2 top-[6px]" />
            </button>
          </div>

          <NavLink
            to="/reorderitems"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002d58] rounded-full w-[120px]"
                : "text-white hover:bg-[#002d58] hover:rounded-full hover:w-[120px]"
            }
          >
            <div className="hidden md:p-1 md:flex gap-2 text-sm justify-center items-center w-[120px]">
              <CiHeart className="text-2xl" />
              <div>
                <p> Reorder </p>
                <p className="font-bold"> Items </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002d58] rounded-full w-[120px]"
                : "text-white hover:bg-[#002d58] hover:rounded-full hover:w-[120px]"
            }
          >
            <div className="hidden md:p-1 md:flex gap-2 text-sm justify-center items-center w-[120px]">
              <MdOutlineAccountCircle className="text-2xl" />
              <div>
                <p> SignIn</p>
                <p className="font-bold"> Accounts </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/carts"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002d58] rounded-full w-[80px]"
                : "text-white hover:bg-[#002d58] hover:rounded-full hover:w-[80px]"
            }
          >
            <div className="pl-2 flex justify-center text-sm w-[80px]">
              <div>
                <IoCartOutline className="text-3xl" />
                <p className="text-center">{count} items</p> 
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="bg-[#F2F8FD] h-[44px] flex justify-start gap-10 items-center pl-10 hover:cursor-pointer">
        <div className="flex gap-10 font-bold">
          <div className="flex items-center gap-1 bg-white">
            <PiDiamondsFourFill />
            <p className="hover:underline"> Departments</p>
          </div>
          <div className="flex items-center gap-1 hover:underline">
            <PiDiamondsFourDuotone />
            <p> Services</p>
          </div>
        </div>
        <div>
          <p className="md:hidden hover:underline font-semibold border-l-2 border-black pl-10 text-gray-500">More</p>
        </div>
        <div className="hidden md:flex font-semibold text-[14px] gap-5 items-center md:border-l-2 border-black pl-10">
          <p className="hover:underline">Grocery & Essentials</p>
          <p className="hover:underline">Summer Savings</p>
          <p className="hover:underline">Home & Appliances</p>
          <p className="hover:underline">Fashion</p>
          <p className="hover:underline">Electronics</p>
          <p className="hover:underline">Books</p>
          <p className="hover:underline">Mobile & Phones</p>
          <p className="hover:underline">Laptops</p>
          <p className="hover:underline text-gray-500">More</p>
          <button
          onClick={() => setOpenModal(true)}
          className="w-40   bg-[#1A65C6]  hover:bg-[#004f9a] rounded-md p-1  text-white
         absolute right-3"
        >
        <p>Add New Products</p>
           <span className='hidden'>Products</span>
        </button>
        </div>
        
      {openModal && (
        <Modal>
          <div className="bg-gray-100 w-96 md:w-2/6 rounded-md relative p-4">
            <button
              type="button"
              className="absolute top-2 right-2"
              onClick={() => setOpenModal(false)}
            >
              <ImCross />
            </button>
            <AddProductForm />
          </div>
        </Modal>
      )}
     
      </div>
    </>
  );
};

export default Navbar;
