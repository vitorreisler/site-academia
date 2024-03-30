import HrElement from "@/components/hrElement";

const Personal = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/personal-page-1.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            O personal trainer é um aliado essencial na jornada rumo aos
            objetivos fitness. Oferecendo orientação individualizada, motivação
            constante e correção técnica, eles maximizam o potencial do cliente,
            impulsionando resultados eficazes e duradouros.
          </p>
        </div>
      </div>
      <HrElement />

      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Com uma abordagem personalizada, o personal trainer adapta os
            treinos às necessidades e metas específicas de cada indivíduo,
            garantindo progresso consistente e seguro. Além disso, proporcionam
            variedade e desafios constantes para evitar estagnação e manter a
            motivação elevada.
          </p>
        </div>
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/personal-page-2.jpg"
            alt=""
          />
        </div>
      </div>
      <HrElement />

      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/personal-page-3.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            A relação entre cliente e personal trainer vai além do simples
            treinamento físico. Eles atuam como mentores, fornecendo suporte
            emocional e encorajamento nos momentos de dificuldade. Essa conexão
            pessoal cria um ambiente de confiança e comprometimento,
            fundamentais para o sucesso a longo prazo.
          </p>
        </div>
      </div>
      <HrElement />
      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Com a orientação de um personal trainer qualificado, os clientes
            podem alcançar seus objetivos de forma eficiente e sustentável,
            desenvolvendo hábitos saudáveis e promovendo uma transformação
            completa em seu estilo de vida.
          </p>
        </div>
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/personal-page-4.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Personal;
