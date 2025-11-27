import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

const Reservations = () => {
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
  );
};

export default Reservations;
