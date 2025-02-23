"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import { menuCategories, menuItems } from "@/data/menuData";
import { pizzaToppings } from "@/data/pizzaToppings";
import { kidsModifiers } from "@/data/kidsModifiers";
import { sandwichAdditions } from "@/data/sandwichAdditions";
import { saladDressings } from "@/data/saladDressings";
import { saladAdditions } from "@/data/saladAdditions";
import { breadChoices } from "@/data/breadChoises";
import { pastaAdditions } from "@/data/pastaAdditions";
import { gourmetPizzaOptions } from "@/data/gourmetPizzaOptions";

// Define a type for menu items
type MenuItem = {
  category: string;
  mealCategory?: string;
  pizzaType?: string;
  mealType?: string;
  name: string;
  description?: string;
  price?: string;
};

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeMealType, setActiveMealType] = useState("lunch");
  const [activePizzaType, setActivePizzaType] = useState<string | null>(null);
  const [selectedGlutenFreeCategory, setSelectedGlutenFreeCategory] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Drag Scrolling Logic
  const startDrag = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Speed up scroll effect
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  // Filter menu items based on the selected category, meal type, and pizza type
  const filteredMenu = menuItems.filter((item) => {
    const categoryMatch = activeFilter === "all" || item.category === activeFilter;
    const mealTypeMatch = item.mealType === activeMealType || item.mealType === "both";
    const pizzaTypeMatch = !activePizzaType || item.pizzaType === activePizzaType;
    return categoryMatch && mealTypeMatch && pizzaTypeMatch;
  });

  // Group menu items by category or pizzaType
  const groupMenuItems = (items: MenuItem[]) => {
    if (activeFilter === "pizza") {
      return items.reduce((acc: Record<string, MenuItem[]>, item) => {
        const key = item.pizzaType || "Other";
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
      }, {});
    }
    return items.reduce((acc: Record<string, MenuItem[]>, item) => {
      const key = item.category;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  };

  const groupedMenu = groupMenuItems(filteredMenu);

  return (
    <>
      <Head>
        <title>Menu - Palace Pizza Bartow</title>
        <meta name="description" content="Explore Our Menu at Palace Pizza Bartow." />
      </Head>

      <div className="p-4 max-w-5xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold text-center my-6 text-black border-b pb-2">
          Menu
        </h1>

        {/* Meal Type Filter Bar */}
        <div className="flex justify-center mb-4 space-x-4">
          {["lunch", "dinner"].map((mealType) => (
            <button
              key={mealType}
              onClick={() => setActiveMealType(mealType)}
              className={`px-4 py-2 rounded transition-all shadow-md font-bold
                ${activeMealType === mealType
                  ? "bg-gold text-black shadow-lg scale-105"
                  : "bg-newblack text-white hover:bg-slate-950 hover:shadow-lg"
                }`}
            >
              {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
            </button>
          ))}
        </div>

        {/* Scrollable Filter Bar */}
        <div className="relative mb-2">
          <div
            ref={scrollRef}
            className="w-full overflow-hidden overflow-x-auto no-scrollbar flex snap-x scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-x", whiteSpace: "nowrap" }}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            <div className="flex space-x-4 w-max px-4 pb-2">
              {menuCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setActivePizzaType(null); // Reset pizza type when changing category
                    console.log(activeFilter);
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded transition-all shadow-md shadow-gray-400 font-bold
                  ${activeFilter === category
                      ? "bg-gold text-black shadow-lg shadow-gray-600 scale-105"
                      : "bg-newblack text-white hover:bg-slate-950 hover:shadow-lg hover:shadow-gray-500"
                    }`}
                >
                  {category
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Pizza Type Buttons */}
        {activeFilter === "pizza" && (
          <div className="flex justify-center space-x-4">
            {["classic", "red gourmet", "white gourmet"].map((type) => (
              <button
                key={type}
                onClick={() => setActivePizzaType(type)}
                className={`px-4 py-2 rounded transition-all shadow-md shadow-gray-400 font-bold
                  ${activePizzaType === type
                    ? "bg-gold text-black shadow-lg shadow-gray-600 scale-105"
                    : "bg-newblack text-white hover:bg-slate-950 hover:shadow-lg hover:shadow-gray-500"
                  }`}
              >
                {type.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
          </div>
        )}

        {/* Menu Items */}
        <div className="space-y-8">
          {/* Gluten-Free Selection Buttons */}
          {activeFilter === "gluten free" && (
            <div className="flex justify-center space-x-4 mb-6">
              {["pasta", "pizza"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedGlutenFreeCategory(category)}
                  className={`px-6 py-2 rounded font-bold transition-all shadow-md shadow-gray-400
            ${selectedGlutenFreeCategory === category
                      ? "bg-gold text-black shadow-lg shadow-gray-600 scale-105"
                      : "bg-newblack text-white hover:bg-slate-950 hover:shadow-lg hover:shadow-gray-500"
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}

          {Object.entries(groupedMenu).map(([group, items]) => {
            // **Filter items based on selected gluten-free category**
            const filteredItems =
              activeFilter === "gluten free"
                ? items.filter((item) => item.mealCategory === selectedGlutenFreeCategory)
                : items;

            // Skip rendering if no items match the filter
            if (filteredItems.length === 0) return null;

            return (
              <div key={group}>
                {/* Menu Section Title */}
                <h2 className="flex justify-center text-2xl font-bold mt-4">
                  {group
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h2>

                {/* Red Gourmet & White Gourmet Descriptions */}
                <div className="pb-4">
                  {activePizzaType === "red gourmet" && (
                    <p className="text-center text-black p-4 rounded-lg shadow-md max-w-2xl mx-auto">
                      🍕 A rich and savory pizza made with a signature red sauce, premium cheese, and gourmet toppings.
                    </p>
                  )}

                  {activePizzaType === "white gourmet" && (
                    <p className="text-center text-black p-4 rounded-lg shadow-md max-w-2xl mx-auto">
                      🍕 Topped with olive oil, fresh garlic, Parmigiano, and our special blend of mozzarella​ cheese.
                    </p>
                  )}
                </div>

                {/* Filtered Menu Items */}
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center mb-4"
                  >
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                    </div>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {activeFilter === "kids" && (
          <div className="p-4 max-w-5xl mx-auto">
            <h1 className="text-xl font-bold text-center my-6">Kids Pasta Modifiers</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {kidsModifiers.map((modifier, index) => (
                <div
                  key={index}
                  className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{modifier.name}</span>
                  {modifier.price && <span className="font-bold">{modifier.price}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pizza Toppings Section */}
        {activePizzaType === "classic" && (
          <div className="mt-8">
            <h3 className="text-center text-xl font-bold">Available Toppings</h3>
            <p className="text-center text-sm text-gray-500 mb-4">Toppings can be added to the whole pizza, or the left and right sides.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pizzaToppings.filter(topping => topping.location === "whole").map((topping, index) => (
                <div key={index} className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center">
                  <span>{topping.name}</span>
                  <span className="font-bold">{topping.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {['calzones', 'flat bread', 'strombolis'].includes(activeFilter) && (
          <div className="mt-8">
            <h3 className="text-center text-xl font-bold mb-4">Available Toppings</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pizzaToppings.filter(topping => topping.location === "whole").map((topping, index) => (
                <div key={index} className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center">
                  <span>{topping.name}</span>
                  <span className="font-bold">{topping.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {['classic pasta', 'specialty pasta'].includes(activeFilter) && (
          <div className="mt-8">
            <h3 className="text-center text-xl font-bold">Available Bread Choices</h3>
            <p className="text-center text-sm text-gray-500 mb-4">You can order bread or have no bread option.</p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {breadChoices.map((addition, index) => (
                <div
                  key={index}
                  className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{addition.name}</span>
                </div>
              ))}
            </div>
            <h3 className="text-center text-xl font-bold mt-4 mb-2">Available Pasta Additons</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pastaAdditions.map((addition, index) => (
                <div
                  key={index}
                  className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{addition.name}</span>
                  {addition.price && <span className="font-bold">{addition.price}</span>}
                </div>
              ))}
            </div>
          </div>

        )}

        {['cold sub', 'hot hoagie', 'wraps'].includes(activeFilter) && (
          <div className="mt-8">
            <h3 className="text-center text-xl font-bold mb-4">Available Additions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sandwichAdditions.map((addition, index) => (
                <div
                  key={index}
                  className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{addition.name}</span>
                  {addition.price && <span className="font-bold">{addition.price}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeFilter === "gluten free" && (
          <div className="mt-8">
            {/* Show Available Pasta Additions if Pasta is selected */}
            {selectedGlutenFreeCategory === "pasta" && (
              <>
                <h3 className="text-center text-xl font-bold mb-4">Available Pasta Additions</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {pastaAdditions.map((addition, index) => (
                    <div
                      key={index}
                      className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                    >
                      <span>{addition.name}</span>
                      {addition.price && <span className="font-bold">{addition.price}</span>}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Show Available Gourmet Options & Available Pizza Additions if Pizza is selected */}
            {selectedGlutenFreeCategory === "pizza" && (
              <>
                <h3 className="text-center text-xl font-bold mb-4">Available Gourmet Options</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  {gourmetPizzaOptions.map((addition, index) => (
                    <div
                      key={index}
                      className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                    >
                      <span>{addition.name}</span>
                      {addition.price && <span className="font-bold">{addition.price}</span>}
                    </div>
                  ))}
                </div>

                <h3 className="text-center text-xl font-bold mb-4">Available Pizza Additions</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {pizzaToppings.map((addition, index) => (
                    <div
                      key={index}
                      className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                    >
                      <span>{addition.name}</span>
                      {addition.price && <span className="font-bold">{addition.price}</span>}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activeFilter === 'salad' && (
          <div className="mt-8">
            <h3 className="text-center text-xl font-bold mb-4">Available Dressings</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {saladDressings.map((addition, index) => (
                <div
                  key={index}
                  className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{addition.name}</span>
                  {addition.price && <span className="font-bold">{addition.price}</span>}
                </div>
              ))}
            </div>
            <h3 className="text-center text-xl font-bold mb-4 mt-4">Available Additions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {saladAdditions.map((addition, index) => (
                <div
                  key={index}
                  className="bg-newgray shadow-md p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{addition.name}</span>
                  {addition.price && <span className="font-bold">{addition.price}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}