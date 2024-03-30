import Card from "@/components/Card";
import treinadores from "../data/treinadores.js"
const About = () => {
 
  return (
    <div className="flex flex-wrap justify-center teste items-center gap-5">
      {treinadores.map((treinador: any) => (
        <Card
          key={treinador.name}
          name={treinador.name}
          age={treinador.age}
          height={treinador.height}
          weight={treinador.weight}
          hobby1={treinador.hobby1}
          hobby2={treinador.hobby2}
          hobby3={treinador.hobby3}
        />
      ))}
    </div>
  );
};

export default About;
