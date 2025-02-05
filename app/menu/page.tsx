"use client";

import { useState } from "react";
import Head from "next/head";

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = [
    "all",
    "pizza",
    "flatbreads",
    "salads",
    "hot Hoagies",
    "gluten-free",
    "calzones",
    "desserts",
    "pasta",
  ];

  return (
    <>
      <Head>
        <title>Menu - Palace Pizza Bartow</title>
        <meta name="description" content="Explore Our Menu at Palace Pizza Bartow." />
        <meta name="keywords" content="Palace Pizza Bartow, Menu" />
        <meta property="og:title" content="Palace Pizza Bartow Menu" />
        <meta property="og:description" content="Explore Our Menu at Palace Pizza Bartow." />
        <meta property="og:url" content="https://palacepizzabartow.com/menu" />
      </Head>
      <div className="p-6 max-w-5xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold text-center my-6 text-black border-b pb-2">
          Menu
        </h1>

        {/* Scrollable Filter Bar (Only on Mobile) */}
        <div className="overflow-x-auto no-scrollbar mb-6">
          <div className="flex space-x-4 w-max px-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded transition-all shadow-md shadow-gray-400 
          ${activeFilter === filter
                    ? "bg-gold text-black shadow-lg shadow-gray-600 scale-105"
                    : "bg-black text-white hover:bg-slate-950 hover:shadow-lg hover:shadow-gray-500"
                  }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Sections visible only on "all" */}
        {activeFilter === "all" && (
          <>
            {/* Appetizers */}
            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">Appetizers</h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Bread Stick (1)</span>
                  <span className="font-bold">$1.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Garlic Knots (3)</span>
                  <span className="font-bold">$2.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Mozzarella Sticks (5)</span>
                  <span className="font-bold">$6.95</span>
                </li>
              </ul>
            </section>

            {/* Cold Subs */}
            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">Cold Subs</h2>
              <p className="text-sm text-gray-500 mb-4">
                All subs come with mayonnaise, lettuce, tomato, onions, cheese,
                and Italian seasonings. Hot peppers upon request. Add French fries
                $2.00.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Cold Palace Special Sub</span>
                  <span className="font-bold">$10.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Ham and Cheese Sub</span>
                  <span className="font-bold">$10.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Sliced Turkey Breast and Cheese Sub</span>
                  <span className="font-bold">$10.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Tuna Sub</span>
                  <span className="font-bold">$10.50</span>
                </li>
              </ul>
            </section>

            {/* Coupons */}
            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Coupons (only online purchase)
              </h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-2">
                  <span className="font-bold">XL Cheese and 10 Wings</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    (1) XL cheese pizza and 10 Wings
                  </span>
                  <span className="font-bold float-right">$26.95</span>
                </li>
                <li className="py-2">
                  <span className="font-bold">XL Pizza 6 Garlic Knots</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    (1) 18&quot; Cheese Pizza with an order of our famous Garlic
                    Knots
                  </span>
                  <span className="font-bold float-right">$18.95</span>
                </li>
                <li className="py-2">
                  <span className="font-bold">XL Pizza and Garden Salad</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    (1) 18&quot; Cheese Pizza and a fresh Garden Salad with your
                    choice of dressing. (add toppings to your pizza for an
                    additional charge)
                  </span>
                  <span className="font-bold float-right">$21.95</span>
                </li>
                <li className="py-2">
                  <span className="font-bold">XL Cheese and XL 2 Topping</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    (1) 18&quot; Cheese Pizza and (1) 18&quot; Pizza with your
                    choice of two toppings. (add more toppings for an additional
                    charge)
                  </span>
                  <span className="font-bold float-right">$32.95</span>
                </li>
              </ul>
            </section>

            {/* Stromboli */}
            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">Stromboli - OLO</h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Cheese Stromboli</span>
                  <span className="font-bold">$9.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Pepperoni Stromboli</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Ham Stromboli</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>
                    Make Your Own Stromboli (Choice of any 3 toppings)
                  </span>
                  <span className="font-bold">$11.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>
                    Meat Lovers Stromboli (Folded with pepperoni, ham, bacon and
                    sausage)
                  </span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Phily Stromboli</span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Chicken Bacon Ranch Boli</span>
                  <span className="font-bold">$11.50</span>
                </li>
              </ul>
            </section>
          </>
        )}

        {/* Flatbreads */}
        {(activeFilter === "all" || activeFilter === "flatbreads") && (
          <section className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-2 text-center">Flatbreads</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <span>Flatbread C.B.R</span>
                <span className="font-bold">$11.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Flatbread Chicken BBQ</span>
                <span className="font-bold">$11.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Flatbread Caprese</span>
                <span className="font-bold">$11.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Flatbread Capricciosa</span>
                <span className="font-bold">$11.50</span>
              </li>
            </ul>
          </section>
        )}

        {/* Salads */}
        {(activeFilter === "all" || activeFilter === "salads") && (
          <section className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-2 text-center">Salads</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <span>Fresh Garden Salad Half</span>
                <span className="font-bold">$5.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Fresh Garden Salad Full</span>
                <span className="font-bold">$8.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Caesar Salad Half</span>
                <span className="font-bold">$5.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Caesar Salad Full</span>
                <span className="font-bold">$8.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Italian Antipasto Half</span>
                <span className="font-bold">$8.25</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Italian Antipasto Full</span>
                <span className="font-bold">$10.50</span>
              </li>
            </ul>
          </section>
        )}

        {/* Hoagies */}
        {(activeFilter === "all" || activeFilter === "hot Hoagies") && (
          <section className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-2 text-center">Hot Hoagies</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <span>Hot Sliced Turkey and Cheese Sub</span>
                <span className="font-bold">$10.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Veggie Sub</span>
                <span className="font-bold">$10.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Philadelphia Steak Sandwich</span>
                <span className="font-bold">$10.50</span>
              </li>
            </ul>
          </section>
        )}

        {/* Desserts */}
        {(activeFilter === "all" || activeFilter === "desserts") && (
          <section className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-2 text-center">Desserts</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <span>Cannoli</span>
                <span className="font-bold">$4.00</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Tiramisu</span>
                <span className="font-bold">$5.00</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Cheesecake</span>
                <span className="font-bold">$4.00</span>
              </li>
            </ul>
          </section>
        )}

        {/* Classic Pizzas */}
        {(activeFilter === "all" || activeFilter === "pizza") && (
          <section className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Classic Pizzas</h2>
            {/* Neapolitan */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Neapolitan</h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Cheese Pizza</span>
                  <span className="font-bold">$8.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Cheese Pizza</span>
                  <span className="font-bold">$15.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>XLarge Cheese Pizza</span>
                  <span className="font-bold">$16.50</span>
                </li>
              </ul>
            </div>
            {/* Sicilian */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Sicilian</h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Large Sicilian Pizza</span>
                  <span className="font-bold">$18.00</span>
                </li>
              </ul>
            </div>
            {/* White Gourmet */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">White Gourmet</h3>
              <p className="text-sm text-gray-500 mb-2">
                White Garlic Pizza — Topped with olive oil, fresh garlic,
                Parmigiano and our special blend of mozzarella cheese.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small White Garlic</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large White Garlic</span>
                  <span className="font-bold">$17.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>XLarge White Garlic</span>
                  <span className="font-bold">$18.45</span>
                </li>
              </ul>
            </div>
            {/* Garlic Tomato Bacon Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                Garlic Tomato Bacon Pizza
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Our white garlic pizza topped with fresh tomato and delicious
                bacon.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Garlic Tomato Bacon</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Garlic Tomato Bacon</span>
                  <span className="font-bold">$20.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>XL Garlic Tomato Bacon</span>
                  <span className="font-bold">$21.45</span>
                </li>
              </ul>
            </div>
            {/* Chicken Wing Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Chicken Wing Pizza</h3>
              <p className="text-sm text-gray-500 mb-2">
                Topped with sliced chicken breast marinated in our zesty home-made
                medium chicken wing sauce, smothered in a special blend of
                Parmigiano and mozzarella cheese. (Served with blue cheese for
                dipping or spreading on the top upon your request)
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Chicken Wings Pizza</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Chicken Wings Pizza</span>
                  <span className="font-bold">$21.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Chicken Wings</span>
                  <span className="font-bold">$22.45</span>
                </li>
              </ul>
            </div>
            {/* Chicken and Broccoli Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                Chicken and Broccoli Pizza
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Topped with marinated chicken, broccoli, and mozzarella.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Chicken &amp; Broccoli</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Chicken &amp; Broccoli</span>
                  <span className="font-bold">$21.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Chicken &amp; Broccoli</span>
                  <span className="font-bold">$22.45</span>
                </li>
              </ul>
            </div>
            {/* Chicken Bacon Ranch Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                Chicken Bacon Ranch Pizza
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Topped with marinated chicken, bacon and ranch dressing in a white
                sauce.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Chicken Bacon Ranch</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Chicken Bacon Ranch</span>
                  <span className="font-bold">$21.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Chicken Bacon Ranch</span>
                  <span className="font-bold">$22.45</span>
                </li>
              </ul>
            </div>
            {/* Vegetarian White Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Vegetarian White Pizza</h3>
              <p className="text-sm text-gray-500 mb-2">
                Pizza topped with your choice of any five of our fresh vegetable
                toppings smothered.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Vegetarian White</span>
                  <span className="font-bold">$11.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Vegetarian White</span>
                  <span className="font-bold">$22.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Vegetarian White</span>
                  <span className="font-bold">$23.95</span>
                </li>
              </ul>
            </div>
            {/* Rustica */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Rustica</h3>
              <p className="text-sm text-gray-500 mb-2">
                Topped with pepperoni, ham, sausage and bacon melted with ricotta
                cheese.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Rustica</span>
                  <span className="font-bold">$12.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Rustica</span>
                  <span className="font-bold">$23.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Rustica</span>
                  <span className="font-bold">$24.95</span>
                </li>
              </ul>
            </div>
            {/* Stuffed Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Stuffed Pizza</h3>
              <p className="text-sm text-gray-500 mb-2">
                Double-crust pizza stuffed with pepperoni, sausage, ham and bacon
                with mozzarella and Parmesan cheese.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Stuffed Pizza</span>
                  <span className="font-bold">$13.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Stuffed Pizza</span>
                  <span className="font-bold">$24.95</span>
                </li>
              </ul>
            </div>
            {/* BBQ Chicken Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">BBQ Chicken Pizza</h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small BBQ Chicken Pizza</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large BBQ Chicken Pizza</span>
                  <span className="font-bold">$21.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>XLarge BBQ Chicken Pizza</span>
                  <span className="font-bold">$22.45</span>
                </li>
              </ul>
            </div>
            {/* Fiorentina Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Fiorentina Pizza</h3>
              <p className="text-sm text-gray-500 mb-2">
                Topped with chicken, tomatoes, ricotta, spinach and balsamic glaze.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Fiorentina Pizza</span>
                  <span className="font-bold">$12.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>16 Fiorentina Pizza</span>
                  <span className="font-bold">$23.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>18 Fiorentina Pizza</span>
                  <span className="font-bold">$24.95</span>
                </li>
              </ul>
            </div>
            {/* Red Gourmet */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Red Gourmet</h3>
              <p className="text-sm text-gray-500 mb-2">
                Tomato Basil Garlic – Authentic pizza topped with fresh tomato,
                garlic, basil, and sprinkled with Parmesan cheese.
              </p>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small TBG</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large TBG</span>
                  <span className="font-bold">$20.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large TBG</span>
                  <span className="font-bold">$21.45</span>
                </li>
              </ul>
            </div>
            {/* Hawaiian Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Hawaiian Pizza</h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Hawaiian</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Hawaiian Pizza</span>
                  <span className="font-bold">$20.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Hawaiian Pizza</span>
                  <span className="font-bold">$21.45</span>
                </li>
              </ul>
            </div>
            {/* Eggplant & Ricotta Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">
                Eggplant and Ricotta Pizza
              </h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Eggplant &amp; Ricotta</span>
                  <span className="font-bold">$10.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Eggplant &amp; Ricotta</span>
                  <span className="font-bold">$20.45</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Eggplant &amp; Ricotta</span>
                  <span className="font-bold">$21.45</span>
                </li>
              </ul>
            </div>
            {/* Palace Supreme Pizza */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Palace Supreme Pizza</h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Palace Supreme</span>
                  <span className="font-bold">$12.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Palace Supreme</span>
                  <span className="font-bold">$22.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Palace Supreme</span>
                  <span className="font-bold">$23.95</span>
                </li>
              </ul>
            </div>
            {/* Meatlovers Pizza */}
            <div>
              <h3 className="text-xl font-bold mb-2">Meatlovers Pizza</h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Small Meat Lovers</span>
                  <span className="font-bold">$12.00</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Large Meat Lovers</span>
                  <span className="font-bold">$22.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>X Large Meat Lovers</span>
                  <span className="font-bold">$23.95</span>
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* Gluten-Free */}
        {(activeFilter === "all" || activeFilter === "gluten-free") && (
          <section className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-2 text-center">GF Pizza - OLO</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <span>Gluten Free Cheese 10&quot;</span>
                <span className="font-bold">$9.95</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Gluten Free Cheese 12&quot;</span>
                <span className="font-bold">$11.95</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Gluten Free Gourmet Pizza 10&quot;</span>
                <span className="font-bold">$11.95</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Gluten Free Gourmet Pizza 12&quot;</span>
                <span className="font-bold">$13.95</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Gluten Free Supreme 10&quot;</span>
                <span className="font-bold">$12.95</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Gluten Free Supreme 12&quot;</span>
                <span className="font-bold">$14.95</span>
              </li>
            </ul>
          </section>
        )}

        {/* Calzones */}
        {(activeFilter === "all" || activeFilter === "calzones") && (
          <section className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2 text-center">Calzones - OLO</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <span>Cheese Calzone</span>
                <span className="font-bold">$9.00</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Pepperoni Calzone</span>
                <span className="font-bold">$10.00</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Ham Calzone</span>
                <span className="font-bold">$10.00</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Make Your Own Calzone</span>
                <span className="font-bold">$11.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Meat Lovers Calzone</span>
                <span className="font-bold">$12.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Philly Calzone</span>
                <span className="font-bold">$12.50</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Chicken Bacon Ranch Calzone</span>
                <span className="font-bold">$11.50</span>
              </li>
            </ul>
          </section>
        )}

        {/* New Pasta Sections */}
        {(activeFilter === "all" || activeFilter === "pasta") && (
          <>
            {/* KIDS */}
            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">Kids</h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Kids Pasta</span>
                  <span className="font-bold">$4.95</span>
                </li>
              </ul>
            </section>

            {/* GF PASTA DINNER */}
            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">GF Pasta Dinner</h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Gluten Free Ravioli Dinner</span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Gluten Free Ziti Dinner</span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Gluten Free Penne Alfredo Dinner</span>
                  <span className="font-bold">$13.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Gluten Free Penne Palace Dinner</span>
                  <span className="font-bold">$13.50</span>
                </li>
              </ul>
            </section>

            {/* CLASSIC PASTA - DINNER - OLO */}
            <section className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2 text-center">Classic Pasta - Dinner - OLO</h2>
              {/* Spaghetti Dinner */}
              <div className="mb-4">
                <h3 className="text-xl font-bold">Spaghetti Dinner</h3>
                <p className="text-sm text-gray-500">
                  With tomato sauce and parmesan cheese
                </p>
                <div className="py-2 flex justify-between">
                  <span>Spaghetti Dinner</span>
                  <span className="font-bold">$10.50</span>
                </div>
              </div>
              {/* Ziti Dinner */}
              <div className="mb-4">
                <h3 className="text-xl font-bold">Ziti Dinner</h3>
                <p className="text-sm text-gray-500">
                  With tomato sauce and parmesan cheese
                </p>
                <div className="py-2 flex justify-between">
                  <span>Ziti Dinner</span>
                  <span className="font-bold">$10.50</span>
                </div>
              </div>
              {/* Other Pasta Dinner Items */}
              <ul className="divide-y divide-gray-200">
                <li className="py-2 flex justify-between">
                  <span>Spaghetti with Meatballs Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Spaghetti with Sausage Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Spaghetti with Meat Sauce Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Ziti with Meatballs Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Ziti with Sausage Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Ziti with Meat Sauce Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Baked Ricotta Ziti Dinner</span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Stuffed Shells Dinner</span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Ravioli alla Vodka Dinner</span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Manicotti Dinner</span>
                  <span className="font-bold">$12.50</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Lasagna Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Eggplant Parmigiana Dinner</span>
                  <span className="font-bold">$12.95</span>
                </li>
                <li className="py-2 flex justify-between">
                  <span>Chicken Parmigiana Dinner</span>
                  <span className="font-bold">$13.95</span>
                </li>
              </ul>
            </section>
          </>
        )}
      </div>
    </>
  );
}