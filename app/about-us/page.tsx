import Head from "next/head";

export default function AboutUsPage() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>About Palace Pizza Bartow</title>
        <meta name="description" content="About Palace Pizza Bartow." />
        <meta name="keywords" content="Palace Pizza Bartow" />
        <meta property="og:title" content="About Palace Pizza Bartow" />
        <meta property="og:description" content="About Palace Pizza Bartow." />
        <meta property="og:url" content="https://palacepizzabartow.com/about-us" />
      </Head>

      <div className="p-6 max-w-5xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 border-b pb-2 mb-6 text-center">
          About Us
        </h1>

        {/* Video Section */}
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-black">
            <video
              src="/palace-pizza-bartow-video.mp4"
              controls
              playsInline
              className="w-full h-auto max-h-[80vh] object-cover rounded-lg"
            />
          </div>
        </div>

        <p className="text-lg text-gray-700 mt-6">
          We create each dish with pride, from our fresh side salads to our mouthwatering entrees, and we use only the freshest ingredients available to create that authentic Italian flavor.
        </p>

        <p className="text-lg text-gray-700 mt-6">
          Fresh dough, quality tomatoes, and 100% whole milk mozzarella cheese make our pizza just one of the unforgettable taste adventures.
        </p>

        <p className="text-lg text-gray-700 mt-6">
          With 25 years of experience, our family strictly follows traditional recipes, using only fresh, high-quality ingredients, and preparing each meal not only to taste, but also with stunning visual presentation in mind.
        </p>

        <p className="text-lg text-gray-700 mt-6">
          We invite you to enjoy dining with us at 6 different locations. Our staff will welcome you with a friendly spin on your casual dining experience.
        </p>

        <p className="text-lg text-gray-700 font-semibold mt-6">
          We are proud to have the opportunity to serve you at Palace!
        </p>
      </div>
    </>
  );
} 