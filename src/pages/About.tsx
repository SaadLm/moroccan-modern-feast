import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import aboutInterior from "@/assets/about-interior.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BackToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={aboutInterior}
            alt="Intérieur du restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground text-center px-4">
              Notre Histoire
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 text-center">
              Né au Maroc, Inspiré par le Monde
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
              <p>
                La Fille & La Chèvre est né d'une passion pour la cuisine marocaine et d'une 
                vision audacieuse : réinventer les traditions culinaires de notre pays tout en 
                embrassant les influences du monde entier.
              </p>
              <p>
                Ici, les plats se partagent comme des histoires autour d'une table. Chaque assiette 
                est une célébration des épices marocaines, des produits locaux et de la créativité 
                moderne. Nous croyons que la nourriture rassemble les gens, transcende les frontières 
                et crée des souvenirs inoubliables.
              </p>
              <p>
                Notre restaurant est un hommage à l'âme du Maroc - ses couleurs vibrantes, ses 
                saveurs audacieuses, sa chaleur humaine - revisitée avec une esthétique urbaine 
                contemporaine.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Produits Locaux</h3>
                <p className="text-muted-foreground">
                  Nous travaillons avec des producteurs locaux pour garantir la fraîcheur 
                  et la qualité de chaque ingrédient.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Créativité Audacieuse</h3>
                <p className="text-muted-foreground">
                  Nos chefs réinventent les classiques marocains avec une touche moderne 
                  et une présentation artistique.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Partage & Convivialité</h3>
                <p className="text-muted-foreground">
                  Nos plats sont conçus pour être partagés, créant une expérience 
                  culinaire communautaire et chaleureuse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chef Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                Le Chef
              </h2>
              <div className="space-y-4 text-foreground/90">
                <p>
                  Chef Youssef El Amrani apporte plus de 15 ans d'expérience culinaire, 
                  ayant travaillé dans des cuisines renommées à travers le Maroc et l'Europe.
                </p>
                <p>
                  Formé dans la tradition marocaine par sa grand-mère et perfectionné dans 
                  des restaurants étoilés, Chef Youssef maîtrise l'art délicat de respecter 
                  les saveurs authentiques tout en les réinventant pour le palais moderne.
                </p>
                <p>
                  Sa philosophie : "Chaque plat doit raconter une histoire. Les épices sont 
                  mes mots, les produits locaux ma grammaire, et l'assiette ma page."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={chefPortrait}
                alt="Chef Youssef El Amrani"
                className="w-full h-auto rounded-lg shadow-medium hover-lift"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
