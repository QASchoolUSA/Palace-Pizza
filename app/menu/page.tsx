"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import { menuCategories, menuItems } from "@/data/menuData";

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("all");
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

  // Filter menu items based on the selected category
  const filteredMenu =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <Head>
        <title>Menu - Palace Pizza Bartow</title>
        <meta name="description" content="Explore Our Menu at Palace Pizza Bartow." />
      </Head>

      <div className="p-6 max-w-5xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold text-center my-6 text-black border-b pb-2">
          Menu
        </h1>

        {/* Scrollable Filter Bar */}
        <div className="relative mb-6">
          <div
            ref={scrollRef}
            className="w-full overflow-hidden overflow-x-auto no-scrollbar flex snap-x scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-x", whiteSpace: "nowrap" }}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            <div className="flex space-x-4 w-max px-4">
              {menuCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded transition-all shadow-md shadow-gray-400 font-bold
                  ${
                    activeFilter === category
                      ? "bg-gold text-black shadow-lg shadow-gray-600 scale-105"
                      : "bg-black text-white hover:bg-slate-950 hover:shadow-lg hover:shadow-gray-500"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-8">
          {activeFilter === "all" ? (
            // Grouped by category when "All" is selected
            menuCategories.map((category) => {
              const categoryItems = menuItems.filter((item) => item.category === category);
              if (categoryItems.length === 0) return null; // Skip empty categories
              return (
                <div key={category}>
                  <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                  <div className="space-y-4">
                    {categoryItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 shadow-md p-4 rounded-lg flex justify-between items-center"
                      >
                        <div>
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                        </div>
                        <span className="font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Show filtered list when a specific category is selected
            filteredMenu.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                </div>
                <span className="font-bold">{item.price}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}