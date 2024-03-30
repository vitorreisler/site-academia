import HrElement from "@/components/hrElement";

const Nutricionista = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/nutricionista-page-2.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            O nutricionista desempenha um papel fundamental na jornada em
            direção a uma alimentação saudável e equilibrada. Com sua expertise
            em nutrição, eles oferecem orientação personalizada, planos
            alimentares adaptados e suporte contínuo para ajudar os clientes a
            alcançarem seus objetivos de saúde e bem-estar.
          </p>
        </div>
      </div>
      <HrElement />

      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Ao avaliar as necessidades individuais de cada pessoa, o
            nutricionista cria estratégias alimentares específicas, considerando
            preferências, restrições e objetivos de saúde. Eles educam e
            capacitam os clientes a fazerem escolhas alimentares inteligentes,
            promovendo mudanças positivas e duradouras em seus hábitos
            alimentares.
          </p>
        </div>
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/nutricionista-page-1.jpg"
            alt=""
          />
        </div>
      </div>
      <HrElement />

      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/nutricionista-page-3.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Além disso, o nutricionista oferece suporte emocional e incentivo
            durante todo o processo de mudança de hábitos alimentares. Eles
            ajudam os clientes a superar desafios e a manter a motivação,
            garantindo que alcancem resultados sustentáveis a longo prazo.
          </p>
        </div>
      </div>
      <HrElement />
      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Com a orientação de um nutricionista qualificado, os clientes podem
            melhorar sua saúde, aumentar a energia e alcançar um peso saudável,
            transformando não apenas sua alimentação, mas também seu estilo de
            vida como um todo.
          </p>
        </div>
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/nutricionista-page-4.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Nutricionista;
