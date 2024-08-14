import  { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { ImCross } from 'react-icons/im';
import Navbar from '../components/navbar';
import AddProductForm from '../forms/addproduct';
import Footer from '../components/footer';


const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div>
      <Navbar />
    
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
      <div className='relative'>
        <button
          onClick={() => setOpenModal(true)}
          className="w-40  md:w-24 bg-[#1A65C6]  hover:bg-[#004f9a] rounded-md p-1 mt-4 text-white
         absolute right-3"
        >
        <p>Add New Products</p>
           <span className='hidden'>Products</span>
        </button>
      </div>
      
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
