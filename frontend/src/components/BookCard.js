import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
// import './.css';
import './BookCard.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from "react-icons/fa6";

// import required modules
import { Pagination } from 'swiper/modules';

const BookCard = ({ headline, books }) => {

  console.log(books);

  const handleCart = () => {
        
  }

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      {/* cards */}
      <div className='card mt-14'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map(book =>
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative'>
                  <img src={book.imageUrl} alt="" />
                  <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping onClick={handleCart} className='w-4 h-4 text-white'/>
                  </div>
                </div>
                <div>
                  <div className='text-black font-light text-left'>
                  <h3 >{book.title}</h3>
                  <p >{book.authorName}</p>
                  <div>
                    <p >$10.00</p>
                  </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
