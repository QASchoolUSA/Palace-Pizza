import Image from "next/image";
import Head from "next/head";
import Map from "./components/Map";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Palace Pizza Bartow</title>
        <meta name="description" content="The Secret Ingredient is Love." />
        <meta name="keywords" content="Palace Pizza Bartow" />
        <meta property="og:title" content="Palace Pizza Bartow" />
        <meta property="og:description" content="The Secret Ingredient is Love." />
        <meta property="og:url" content="https://palacepizzabartow.com/" />
      </Head>
      <div>

        {/* Hero Section */}
        <div
          className="relative h-[350px] md:h-[500px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center shadow-lg"
          style={{ backgroundImage: "url('/background-pizza.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="text-5xl font-bold drop-shadow-lg">Palace Pizza Bartow</h1>
          <p className="text-2xl mt-2 drop-shadow-md">The Secret Ingredient is Love</p>
        </div>

        {/* Explore Our Menu Section */}
        <section className="py-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            <div className="p-4 border rounded-lg shadow-md flex flex-col items-center">
              <Image
                src="/flatbread-caprese1.webp"
                width={500}
                height={200}
                alt="Flatbread Caprese"
                className="rounded-lg"
              />
              <h3 className="text-xl font-medium mt-2">Flatbread Caprese</h3>
            </div>
            <div className="p-4 border rounded-lg shadow-md flex flex-col items-center">
              <Image
                src="/caprese-salad-at-palace.webp"
                width={500}
                height={200}
                alt="Caprese Salad"
                className="rounded-lg"
              />
              <h3 className="text-xl font-medium mt-2">Caprese Salad</h3>
            </div>
            <div className="p-4 border rounded-lg shadow-md flex flex-col items-center">
              <Image
                src="/spaghetti-meatballs.webp"
                width={500}
                height={200}
                alt="Spaghetti Meatballs"
                className="rounded-lg"
              />
              <h3 className="text-xl font-medium mt-2">Spaghetti Meatballs</h3>
            </div>
          </div>
          <Map />
        </section>
      </div>
    </>
  );
}