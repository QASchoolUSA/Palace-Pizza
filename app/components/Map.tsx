export default function Map() {
    return (
        <section className="pt-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Find Us</h2>
            <div className="w-full h-96 shadow-lg">
                <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNo7ECFasqaBEJ9z1ZBIbRfwVgF-T0gks&q=Palace Pizza Bartow&zoom=15"
                ></iframe>
            </div>
        </section>
    )
}