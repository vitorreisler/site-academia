import HrElement from "@/components/hrElement";

const Crossfit = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/crossfit-page-1.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            O CrossFit é uma abordagem dinâmica e desafiadora para o
            condicionamento físico, unindo elementos de levantamento de peso
            olímpico, ginástica e treinamento metabólico. Além de promover o
            aumento da força, resistência e flexibilidade, o CrossFit também
            estimula a coordenação e a agilidade.
          </p>
        </div>
      </div>
      <HrElement />

      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Um dos principais benefícios do CrossFit é a sua natureza variada e
            motivadora. Os treinos são frequentemente diversificados, mantendo a
            rotina de exercícios excitante e evitando o tédio. Essa variedade
            também ajuda a prevenir lesões relacionadas ao exercício, pois
            trabalha diferentes grupos musculares e sistemas energéticos.
          </p>
        </div>
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/crossfit-page-2.jpg"
            alt=""
          />
        </div>
      </div>
      <HrElement />

      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/crossfit-page-3.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Além disso, o CrossFit cria uma comunidade de apoio e incentivo,
            onde os praticantes se motivam mutuamente a alcançar seus objetivos.
            O aspecto competitivo saudável presente nos treinos pode impulsionar
            o desempenho e a superação pessoal.
          </p>
        </div>
      </div>
      <HrElement />
      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Com sessões intensas e eficientes, o CrossFit é ideal para pessoas
            ocupadas que desejam obter resultados sólidos em um curto espaço de
            tempo. Sua abordagem desafiadora e orientada para resultados
            tornou-o uma escolha popular para aqueles que buscam um estilo de
            vida ativo e saudável.
          </p>
        </div>
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/crossfit-page-4.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Crossfit;
