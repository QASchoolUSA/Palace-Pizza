"use client";

import Head from "next/head";

export default function CateringPage() {
  return (
    <>
      <Head>
        <title>Catering Menu - Palace Pizza Bartow</title>
        <meta name="description" content="Explore our Catering Menu at Palace Pizza Bartow." />
      </Head>

      <div className="p-6 max-w-5xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold text-center my-6 text-black border-b pb-2">
          Catering Menu
        </h1>

        {/* Catering Entrees */}
        <section className="bg-gray-100 shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-center mb-2">Catering Entrees</h2>
          <p className="text-sm text-gray-500 text-center mb-4">(Full Pan serves 20, Half Pan serves 10)</p>

          <div className="grid grid-cols-3 font-semibold border-b pb-2 text-center">
            <span className="text-left">Item</span>
            <span>Full</span>
            <span>Half</span>
          </div>
          <ul className="divide-y divide-gray-200">
            {[
              { name: "Baked Ziti", full: "$90", half: "$60" },
              { name: "Lasagna", full: "$110", half: "$75" },
              { name: "Chicken Parmigiana", full: "$130", half: "$85" },
              { name: "Eggplant Parmigiana", full: "$120", half: "$75" },
              { name: "Penne Alfredo", full: "$110", half: "$75" },
              { name: "Chicken Marsala", full: "$130", half: "$85" },
              { name: "Chicken Francese", full: "$130", half: "$85" },
            ].map((item, index) => (
              <li key={index} className="py-3 grid grid-cols-3 text-center">
                <span className="text-left">{item.name}</span>
                <span className="font-bold">{item.full}</span>
                <span className="font-bold">{item.half}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Catering Salads */}
        <section className="bg-gray-100 shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-center mb-2">Catering Salads</h2>

          <div className="grid grid-cols-3 font-semibold border-b pb-2 text-center">
            <span className="text-left">Item</span>
            <span>Full</span>
            <span>Half</span>
          </div>
          <ul className="divide-y divide-gray-200">
            {[
              { name: "Antipasto Salad", full: "$70", half: "$50" },
              { name: "Garden Salad", full: "$60", half: "$45" },
              { name: "Caesar Salad", full: "$60", half: "$45" },
              { name: "Chicken Caesar", full: "$80", half: "$60" },
              { name: "Greek Salad", full: "$60", half: "$50" },
              { name: "Chicken Bacon Ranch", full: "$80", half: "$60" },
            ].map((item, index) => (
              <li key={index} className="py-3 grid grid-cols-3 text-center">
                <span className="text-left">{item.name}</span>
                <span className="font-bold">{item.full}</span>
                <span className="font-bold">{item.half}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Catering Desserts */}
        <section className="bg-gray-100 shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-center mb-2">Catering Desserts</h2>

          <div className="grid grid-cols-2 font-semibold border-b pb-2 text-center">
            <span className="text-left">Item</span>
            <span>Price</span>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 grid grid-cols-2 text-center">
              <span className="text-left">Tiramisu</span>
              <span className="font-bold">Full $70 / Half $45</span>
            </li>
            <li className="py-3 grid grid-cols-2 text-center">
              <span className="text-left">Assortment of Whole Cakes (14 Slices)</span>
              <span className="font-bold">$70</span>
            </li>
            <ul className="list-disc pl-6 text-gray-700 text-sm mt-2">
              <li>Carrot Cake</li>
              <li>Italian Rum Cake</li>
              <li>Cheesecake</li>
              <li>Raspberry Cheesecake</li>
              <li>Toasted Almond Cream Cake</li>
              <li>Torta Della Nonna</li>
              <li>Chocolate Mousse Cake</li>
            </ul>
          </ul>
        </section>
      </div>
    </>
  );
}