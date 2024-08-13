const Footer = () => {
    return (
      <>
        <div className="mt-12">
          <div className="h-[200px] bg-[#E6F1FC] flex flex-col gap-2 justify-center items-center px-4 text-center">
            <p className="text-lg sm:text-xl">We’d love to hear what you think!</p>
            <button className="h-8 w-28 rounded-lg outline outline-1 font-normal bg-white hover:bg-gray-600 hover:text-white">
              Give Feedback
            </button>
          </div>
          <div className="bg-[#004F9A] md:h-72 text-white text-sm sm:text-[15px] ">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 justify-center items-center py-8" >
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <p className="font-bold text-lg sm:text-[20px] hover:underline cursor-pointer">Customer Service</p>
              <p className="hover:underline cursor-pointer">Help Center</p>
              <p className="hover:underline cursor-pointer">Take Our Feedback Survey</p>
              <p className="hover:underline cursor-pointer">Returns Center</p>
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <p className="font-bold text-lg sm:text-[20px] hover:underline cursor-pointer">Shopping with Us</p>
              <p className="hover:underline cursor-pointer">Making Payments</p>
              <p className="hover:underline cursor-pointer">Delivery Options</p>
              <p className="hover:underline cursor-pointer">Buyers Protection</p>
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <p className="font-bold text-lg sm:text-[20px] hover:underline cursor-pointer">Stay Connected</p>
              <p className="hover:underline cursor-pointer">Facebook</p>
              <p className="hover:underline cursor-pointer">Twitter</p>
              <p className="hover:underline cursor-pointer">Instagram</p>
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <p className="font-bold text-lg sm:text-[20px] hover:underline cursor-pointer">Pay With</p>
              <div className="flex justify-center sm:justify-start">
                <img className="h-10 sm:h-12 mx-2" src="pngwing.com (1).png" alt="Payment Option 1" />
                <img className="h-10 sm:h-12 mx-2" src="pngwing.com (2).png" alt="Payment Option 2" />
              </div>
              <div className="h-5"></div>
            </div>
          </div>
          <hr  className="mx-60"/>
          <div className="text-center pt-4">
          <p> © 2024 Infi Shop. All Rights Reserved.</p>
        </div>
          </div>
          
         
         
          
        </div>
      </>
    );
  };
  
  export default Footer;
  