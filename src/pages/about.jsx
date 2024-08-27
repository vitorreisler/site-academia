import Card from "@/components/Card";
import treinadores from "../data/treinadores.js";
const About = () => {
  return (
    <div className="text-center">
      <h1 className="my-3 text-3xl">Nossos Profissionais</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {treinadores.map((treinador) => (
          <div key={treinador.id} className="hover:scale-105 transition duration-700">
            <Card
              key={treinador.name}
              name={treinador.name}
              modalidade={treinador.modalidade}
              age={treinador.age}
              height={treinador.height}
              weight={treinador.weight}
              hobby1={treinador.hobby1}
              hobby2={treinador.hobby2}
              hobby3={treinador.hobby3}
              img={treinador.img}
              alt={treinador.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
