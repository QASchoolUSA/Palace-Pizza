import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MainPage() {
  return (
    <div>
      {/* Hero Section with Swiper */}
      <Swiper spaceBetween={50} slidesPerView={1} loop autoplay={{ delay: 3000 }} className="h-[500px]">
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full bg-cover bg-center" style={{ backgroundImage: "url('/background-pizza.jpg')" }}>
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">Palace Pizza</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full bg-cover bg-center" style={{ backgroundImage: "url('/slide2.jpg')" }}>
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">The Secret Ingredient is Love</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full bg-cover bg-center" style={{ backgroundImage: "url('/slide3.jpg')" }}>
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">Delicious Pizzas Await</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      
      {/* Menu Section */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Example Menu Items */}
          <div className="p-4 border rounded-lg shadow-md">
            <Image src="/pizza1.jpg" width={300} height={200} alt="Pizza 1" className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">Margherita Pizza</h3>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <Image src="/pizza2.jpg" width={300} height={200} alt="Pizza 2" className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">Pepperoni Pizza</h3>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <Image src="/pizza3.jpg" width={300} height={200} alt="Pizza 3" className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">BBQ Chicken Pizza</h3>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Find Us</h2>
        <div className="w-full h-96">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Bartow,FL"
          ></iframe>
        </div>
        <div className="mt-6">
          <Button asChild>
            <Link href="/order">Order Food Online</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
