import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";
import dishCauliflower from "@/assets/dish-cauliflower.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const Menu = () => {
  const menuSections = [
    {
      title: "Petites Assiettes",
      subtitle: "À partager",
      items: [
        {
          name: "Briouates Truffés",
          description: "Pâte filo croustillante, fromage de chèvre, truffe noire, miel au thym",
          price: "95 MAD",
        },
        {
          name: "Zaalouk Croustillant",
          description: "Aubergine fumée, tomates confites, paprika fumé, pain pita maison",
          price: "75 MAD",
        },
        {
          name: "Mini-Kefta Sliders",
          description: "Viande d'agneau épicée, sauce harissa maison, oignon caramélisé",
          price: "110 MAD",
        },
        {
          name: "Houmous Revisité",
          description: "Pois chiches, tahini, citron confit, huile d'argan, piment d'Espelette",
          price: "65 MAD",
        },
      ],
    },
    {
      title: "Viandes & Volaille",
      subtitle: "Plats principaux",
      items: [
        {
          name: "Épaule d'Agneau Confite",
          description: "Cuisson lente 12h, glaçage abricot-miel, couscous perlé, légumes de saison",
          price: "245 MAD",
          image: dishLamb,
        },
        {
          name: "Poulet Rôti Citron Confit",
          description: "Poulet fermier, marinade coriandre-citron, pommes de terre grenaille",
          price: "195 MAD",
        },
        {
          name: "Tagine d'Agneau aux Pruneaux",
          description: "Agneau fondant, pruneaux, amandes grillées, cannelle, safran",
          price: "220 MAD",
        },
      ],
    },
    {
      title: "Poissons & Fruits de Mer",
      subtitle: "Fraîcheur de la côte",
      items: [
        {
          name: "Poulpe Grillé, Chermoula",
          description: "Poulpe tendre, sauce chermoula maison, purée de pois chiches fumée",
          price: "235 MAD",
          image: dishOctopus,
        },
        {
          name: "Dorade Citron & Safran",
          description: "Dorade entière, citron confit, safran, légumes méditerranéens",
          price: "225 MAD",
        },
        {
          name: "Crevettes à l'Ail & Piment",
          description: "Grosses crevettes, ail confit, harissa douce, persil frais",
          price: "255 MAD",
        },
      ],
    },
    {
      title: "Végétarien",
      subtitle: "Créations végétales",
      items: [
        {
          name: "Chou-Fleur Rôti",
          description: "Chou-fleur entier, tahini, dattes Medjool, grenade, pistaches",
          price: "165 MAD",
          image: dishCauliflower,
        },
        {
          name: "Couscous 'Jardin Vert'",
          description: "Sept légumes de saison, bouillon épicé, pois chiches, raisins secs",
          price: "155 MAD",
        },
        {
          name: "Tajine de Légumes",
          description: "Légumes de saison, olives, citron confit, herbes fraîches",
          price: "145 MAD",
        },
      ],
    },
    {
      title: "Desserts",
      subtitle: "Douceurs sucrées",
      items: [
        {
          name: "Cheesecake Fleur d'Oranger",
          description: "Base spéculoos, crème au fromage, eau de fleur d'oranger, pistaches",
          price: "75 MAD",
        },
        {
          name: "Crème Brûlée au Safran",
          description: "Crème onctueuse, safran marocain, sucre caramélisé",
          price: "70 MAD",
          image: dishDessert,
        },
        {
          name: "Millefeuille aux Amandes",
          description: "Pâte filo, crème d'amandes, miel, eau de rose",
          price: "65 MAD",
        },
      ],
    },
    {
      title: "Boissons & Cocktails",
      subtitle: "Sélection de la maison",
      items: [
        {
          name: "Gin Tonic Marocain",
          description: "Gin artisanal, tonique, romarin, orange amère",
          price: "85 MAD",
        },
        {
          name: "Thé à la Menthe Revisité",
          description: "Menthe fraîche, citron vert, gingembre, miel",
          price: "35 MAD",
        },
        {
          name: "Mojito aux Herbes",
          description: "Rhum, menthe, basilic, citron vert, sucre de canne",
          price: "75 MAD",
        },
        {
          name: "Sélection de Vins Marocains",
          description: "Gris, rouge, rosé - Domaines Bouskoura et Meknes",
          price: "À partir de 180 MAD",
        },
      ],
    },
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
              Notre Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une célébration des saveurs marocaines, réinventées avec créativité
            </p>
          </div>
        </section>

        {/* Menu Sections */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            {menuSections.map((section, index) => (
              <div key={index} className="scroll-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-serif font-bold text-primary mb-2">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground italic">{section.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group bg-card rounded-lg overflow-hidden shadow-soft hover-lift"
                    >
                      {item.image && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-serif font-semibold text-foreground">
                            {item.name}
                          </h3>
                          <span className="text-primary font-semibold ml-4 flex-shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note Section */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground italic">
              Les prix sont indiqués en dirhams marocains (MAD). Menu susceptible de varier selon la disponibilité des produits.
            </p>
            <p className="text-muted-foreground mt-2">
              Nous pouvons accommoder la plupart des restrictions alimentaires. Merci de nous en informer lors de votre réservation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
