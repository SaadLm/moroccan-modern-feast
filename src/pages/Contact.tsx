import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BackToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous sommes ravis de vous accueillir
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Informations de Contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Avenue Mohammed V<br />
                        Rabat, Maroc
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                      <a href="tel:+212537123456" className="text-muted-foreground hover:text-primary transition-colors">
                        +212 537 12 34 56
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:contact@lafillelachevre.ma" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@lafillelachevre.ma
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Mardi - Dimanche: 18h00 - 23h00</p>
                        <p className="font-semibold">Fermé le lundi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Suivez-Nous
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    📷
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    👍
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg overflow-hidden shadow-soft h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Nous Trouver
                </h3>
                <p className="text-muted-foreground mb-6">
                  Au cœur de Rabat, facilement accessible
                </p>
                <Button variant="default">
                  Obtenir l'itinéraire
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Groups Notice */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Réservations pour Groupes
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Pour les groupes de 8 personnes ou plus, ou pour des événements privés, 
              veuillez nous contacter directement par téléphone ou email.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+212537123456">
                <Button variant="default">
                  Appeler Maintenant
                </Button>
              </a>
              <a href="mailto:contact@lafillelachevre.ma">
                <Button variant="outline">
                  Envoyer un Email
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
