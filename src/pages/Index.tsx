import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";
import dishCauliflower from "@/assets/dish-cauliflower.jpg";

const Index = () => {
  const signatureDishes = [
    {
      name: "Épaule d'Agneau Confite",
      description: "Cuisson lente 12h, glaçage abricot-miel, couscous perlé",
      image: dishLamb,
    },
    {
      name: "Poulpe Grillé Chermoula",
      description: "Poulpe tendre, sauce chermoula maison, purée de pois chiches",
      image: dishOctopus,
    },
    {
      name: "Chou-Fleur Rôti",
      description: "Tahini, dattes Medjool, grenade, pistaches",
      image: dishCauliflower,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroRestaurant}
            alt="Restaurant La Fille & La Chèvre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6">
            La Fille & La Chèvre
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Cuisine marocaine moderne. Plats à partager. Inspiration globale.
          </p>
          <Link to="/reservations">
            <Button size="lg" className="text-lg px-8 py-6">
              Réserver une Table
            </Button>
          </Link>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
              Plats Signatures
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos créations les plus emblématiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-soft hover-lift"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                Voir le Menu Complet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">
              Notre Concept
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Né au Maroc et inspiré par les saveurs du monde, La Fille & La Chèvre 
              revisite la cuisine marocaine avec audace et créativité. Ici, les plats 
              se partagent et les épices racontent une histoire.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Notre chef réinterprète les classiques marocains avec une touche moderne, 
              utilisant des produits locaux de qualité et des techniques culinaires 
              contemporaines pour créer une expérience gastronomique unique.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                Découvrir Notre Histoire
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Restez Informé
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos offres spéciales 
              et découvrir nos nouveaux plats en avant-première.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1"
                required
              />
              <Button type="submit" size="lg">
                S'inscrire
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              Nous respectons votre vie privée. Désinscription possible à tout moment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
