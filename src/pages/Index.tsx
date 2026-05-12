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
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";


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
   const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <BackToTop />
        <main className="pt-20 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-primary" size={40} />
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
                Réservation Reçue!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Merci pour votre réservation. Notre équipe vous contactera sous peu pour confirmer votre table.
              </p>
              <div className="space-y-4">
                <p className="text-foreground">
                  Vous recevrez un email de confirmation à l'adresse fournie.
                </p>
                <Button variant="default" onClick={() => setSubmitted(false)}>
                  Faire une Autre Réservation
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }


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
            Adwak & Tafarnout
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
      <section>

        <div className="min-h-screen bg-background">
      <Navigation />
      <BackToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6">
              Réserver une Table
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez-nous pour une expérience culinaire inoubliable
            </p>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+212 6XX XX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Heure *</Label>
                  <Input
                    id="time"
                    type="time"
                    required
                    min="18:00"
                    max="22:00"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Nombre de Personnes *</Label>
                  <Input
                    id="guests"
                    type="number"
                    required
                    min="1"
                    max="8"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes Spéciales (optionnel)</Label>
                <Textarea
                  id="notes"
                  placeholder="Allergies, préférences de table, occasion spéciale..."
                  rows={4}
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Pour les groupes de 8 personnes ou plus, 
                  veuillez nous contacter directement au +212 537 12 34 56 ou par email 
                  à contact@lafillelachevre.ma
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Confirmer la Réservation
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe 
                pour confirmer votre réservation.
              </p>
            </form>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  Horaires
                </h3>
                <p className="text-muted-foreground">
                  Mardi - Dimanche<br />
                  18h00 - 23h00
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  Politique d'Annulation
                </h3>
                <p className="text-muted-foreground">
                  Annulation gratuite jusqu'à 24h avant votre réservation
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  Questions?
                </h3>
                <p className="text-muted-foreground">
                  Contactez-nous au<br />
                  +212 537 12 34 56
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
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
