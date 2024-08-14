import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DCarousel = () => (
    <div className="relative max-w-full mt-12 mx-4 md:mx-32 md:my-4 md:h-[600px] "> 
        <Carousel
            showArrows={true}
            showThumbs={false}  
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            className="shadow-lg rounded-lg overflow-hidden h-full" 
        >
            <div className="relative h-full">
                <img src="toa-heftiba-KQ1n6HzSahY-unsplash.jpg" alt="Slide 1" className="w-full h-full object-fill" />
                <p className="absolute top-14 font-semibold text-black md:text-3xl md:top-20 md:right-52 md:font-semibold bg-opacity-50 md:text-white py-2">

                   Grab Quick Deal ASAP!
                </p>
            </div>
            <div className="relative h-full">
                <img src="clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg" alt="Slide 2" className="w-full h-full object-cover" />
             
            </div>
            
        </Carousel>
    </div>
);

export default DCarousel;
