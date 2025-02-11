import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-6 border-t shadow-md bg-black text-white">
      {/* Social Media Section */}
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-bold">Follow Us</h3>
        <div className="flex space-x-6">
          <Link href="https://www.instagram.com/palacepizzabartow/" target="_blank" rel="noopener noreferrer">
            <Instagram size={30} className="hover:text-gray-600 transition" />
          </Link>
          <Link href="https://www.facebook.com/palacebartow/" target="_blank" rel="noopener noreferrer">
            <Facebook size={30} className="hover:text-gray-600 transition" />
          </Link>
        </div>
        <div className="grid justify-center items-center font-medium pb-2">
          <p className="pb-2 font-medium">Bringing Italy to your doorstep</p>
          <Link href="https://www.doordash.com/store/palace-pizza-of-bartow-bartow-600802" target="_blank" rel="noopener noreferrer">
            <Image
              src="/doordash.svg" // Replace with your actual image path
              alt="Order on DoorDash"
              width={200} // Adjust width
              height={60} // Adjust height
              className="cursor-pointer hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>

      {/* Contact & Address Section */}
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-lg font-bold">Visit Us</h3>
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=105+East+Main+Street,+Bartow,+FL&origin=My+Location"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          105 East Main Street, Bartow, FL 33830
        </Link>
        <p>
          <span>Phone: </span>
          <a className="underline" href="tel:863-533-9300">(863) 533-9300</a>
        </p>
        <p>
          <span>Email: </span>
          <a className="underline" href="mailto:palacepizzabartow@gmail.com">
            palacepizzabartow@gmail.com
          </a>
        </p>
      </div>

      {/* Opening Hours Section */}
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-lg font-bold">Opening Hours</h3>
        <p>Monday - Saturday: 11:00 AM - 9:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </footer>
  );
}