
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DanceStyles = () => {
  const styles = [
    { name: "Zouk", level: "All Levels", description: "Brazilian partner dance" },
    { name: "Bachata", level: "All Levels", description: "Dominican partner dance" },
    { name: "Salsa", level: "All Levels", description: "Latin partner dance" },
    { name: "Kizomba", level: "All Levels", description: "Angolan partner dance" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Dance Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle>{style.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary">{style.level}</p>
                <p className="text-muted-foreground">{style.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceStyles;
