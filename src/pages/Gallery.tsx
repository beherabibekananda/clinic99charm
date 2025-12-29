import Layout from "@/components/layout/Layout";

const Gallery = () => {
    const galleryItems = [
        { title: "Occupational Therapy", image: "/gallery-1.png" },
        { title: "Speech Corner", image: "/gallery-2.png" },
        { title: "Safe Play Area", image: "/gallery-3.png" },
        { title: "Welcome Reception", image: "/gallery-4.png" },
        { title: "Sensory Oasis", image: "/gallery-5.png" },
        { title: "Learning Zone", image: "/gallery-6.png" },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-teal-light/30 to-background py-16 md:py-20">
                <div className="container relative z-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            Our Gallery
                        </h1>
                        <p className="mt-4 animate-fade-up text-lg text-muted-foreground" style={{ animationDelay: "0.1s" }}>
                            A glimpse into our specialized facilities designed for your child's success.
                        </p>
                    </div>
                </div>
                <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            </section>

            {/* Gallery Grid */}
            <section className="py-12 md:py-20 bg-background">
                <div className="container">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryItems.map((item, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-muted transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-6 text-center">
                                    <h3 className="font-display text-2xl font-bold text-primary-foreground transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                        {item.title}
                                    </h3>
                                    <div className="mt-2 h-1 w-12 bg-white rounded-full transform scale-x-0 transition-transform duration-500 delay-100 group-hover:scale-x-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;
