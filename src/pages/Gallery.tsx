import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";
import dishCauliflower from "@/assets/dish-cauliflower.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const Gallery = () => {
  const images = [
    { src: heroRestaurant, alt: "Intérieur élégant du restaurant", category: "Ambiance" },
    { src: aboutInterior, alt: "Salle à manger moderne", category: "Ambiance" },
    { src: dishLamb, alt: "Épaule d'agneau confite", category: "Plats" },
    { src: dishOctopus, alt: "Poulpe grillé chermoula", category: "Plats" },
    { src: dishCauliflower, alt: "Chou-fleur rôti", category: "Plats" },
    { src: dishDessert, alt: "Crème brûlée au safran", category: "Desserts" },
    { src: chefPortrait, alt: "Chef en cuisine", category: "Équipe" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BackToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6">
              Galerie
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'atmosphère unique de La Fille & La Chèvre
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover-lift aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Section */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Suivez-nous sur Instagram
            </h2>
            <p className="text-muted-foreground mb-6">
              Partagez vos moments @lafillelachevremaroc
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="font-semibold">Découvrir notre Instagram</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
