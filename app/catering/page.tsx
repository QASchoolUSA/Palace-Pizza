export default function CateringPage() {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center my-6 text-gray-900 border-b pb-2">Catering Menu</h1>

            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold">Catering Entrees</h2>
                <span className="text-sm text-gray-500">(Full Pan 20 people, Half Pan 10)</span>
                <div className="grid grid-cols-3 font-semibold border-b pb-2 text-center mt-4">
                    <span className="text-left">Item</span>
                    <span>Full</span>
                    <span>Half</span>
                </div>
                <ul className="divide-y divide-gray-200">
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Baked Ziti</span>
                        <span>$90</span>
                        <span>$60</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Lasagna</span>
                        <span>$110</span>
                        <span>$75</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Chicken Parmigiana</span>
                        <span>$130</span>
                        <span>$85</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Eggplant Parmigiana</span>
                        <span>$120</span>
                        <span>$75</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Penne Alfredo</span>
                        <span>$110</span>
                        <span>$75</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Chicken Marsala</span>
                        <span>$130</span>
                        <span>$85</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Chicken Francese</span>
                        <span>$130</span>
                        <span>$85</span>
                    </li>
                </ul>
            </section>

            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold mb-4">Catering Salads</h2>
                <div className="grid grid-cols-3 font-semibold border-b pb-2 text-center">
                    <span className="text-left">Item</span>
                    <span>Full</span>
                    <span>Half</span>
                </div>
                <ul className="divide-y divide-gray-200">
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Antipasto Salad</span>
                        <span>$70</span>
                        <span>$50</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Garden Salad</span>
                        <span>$60</span>
                        <span>$45</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Caesar Salad</span>
                        <span>$60</span>
                        <span>$45</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Chicken Caesar</span>
                        <span>$80</span>
                        <span>$60</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Greek Salad</span>
                        <span>$60</span>
                        <span>$50</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Chicken Bacon Ranch</span>
                        <span>$80</span>
                        <span>$60</span>
                    </li>
                </ul>
            </section>

            <section className="bg-white shadow-md p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold mb-4">Catering Desserts</h2>
                <div className="grid grid-cols-3 font-semibold border-b pb-2 text-center">
                    <span className="text-left">Item</span>
                </div>
                <ul className="divide-y divide-gray-200">
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Tiramisu</span>
                        <span>Full $70</span>
                        <span>Half $45</span>
                    </li>
                    <li className="py-2 grid grid-cols-3 text-center">
                        <span className="text-left">Assortment of Whole Cakes (14 Slices)</span>
                        <span>$70</span>
                    </li>
                    <ul className="list-disc pl-6 text-gray-700">
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
    );
}