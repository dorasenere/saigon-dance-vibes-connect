
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DanceStyles = () => {
  const styles = [
    { 
      id: 1,
      name: "Zouk", 
      level: "All Levels", 
      description: "Brazilian partner dance",
      communityLink: "/communities?style=zouk"
    },
    { 
      id: 2,
      name: "Bachata", 
      level: "All Levels", 
      description: "Dominican partner dance",
      communityLink: "/communities?style=bachata"
    },
    { 
      id: 3,
      name: "Salsa", 
      level: "All Levels", 
      description: "Latin partner dance",
      communityLink: "/communities?style=salsa"
    },
    { 
      id: 4,
      name: "Kizomba", 
      level: "All Levels", 
      description: "Angolan partner dance",
      communityLink: "/communities?style=kizomba"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center neon-text">Dance Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style) => (
            <Link to={style.communityLink} key={style.id}>
              <Card className="glass-card card-hover border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white">{style.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary">{style.level}</p>
                  <p className="text-white/70">{style.description}</p>
                  <p className="text-sm text-secondary mt-2 hover:underline">Find {style.name} communities →</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceStyles;
