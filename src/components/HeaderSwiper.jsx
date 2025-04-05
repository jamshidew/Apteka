import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function SwiperSlideList() {
  const images = [
    "https://api2.gopharm.uz/storage/sales/sale/image/01J97EPE0AKK7BYGEQMQHND5PE.jpg",
    "https://api2.gopharm.uz/storage/sales/sale/image/01J97FDNKTABJ57PV6HQ39XPG0.jpg",
    "https://api2.gopharm.uz/storage/sales/sale/image/01J97FA88VKS0DD7WB5XW3J5AD.jpg",
    "https://api2.gopharm.uz/storage/sales/sale/image/01J97F3NC7EYGSNFF1CJQE0F4H.jpg",
    "https://api2.gopharm.uz/storage/sales/sale/image/01JQ4Y52EBRZ3YAX4J98Y5GZJ0.webp",
  ];

  return (
    <div className="container w-full max-w-4xl mx-auto mt-10">
      <Swiper
        modules={[Autoplay]}
        loop
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SwiperSlideList;
