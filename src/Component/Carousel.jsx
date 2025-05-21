import React, { useEffect, useState } from 'react';

function Carousel() {
  const [slide, setSlide] = useState(0);
  const maxSlide = 3;

  const handleNext = () => {
    setSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="mt-[12vh] h-[140vh] w-full overflow-hidden relative">
      <div
        className="h-[140vh] flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slide * 25}%)`, width: '400%' }}
      >
        <div className='h-[140vh] w-full bg-[url("./RoomPhotos/room.jpg")] bg-cover bg-center'></div>
        <div className='h-[140vh] w-full bg-[url("./RoomPhotos/room2.jpg")] bg-cover bg-center'></div>
        <div className='h-[140vh] w-full bg-[url("./RoomPhotos/room3.jpg")] bg-cover bg-center'></div>
        <div className='h-[140vh] w-full bg-[url("./RoomPhotos/room4.jpg")] bg-cover bg-center'></div>
      </div>
    </div>
  );
}

export default Carousel;
