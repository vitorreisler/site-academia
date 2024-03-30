import HrElement from "@/components/hrElement";

const Musculacao = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/musc-page-1.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            A musculação é uma prática que oferece uma série de benefícios para
            a saúde. Além de fortalecer os músculos e aumentar a resistência
            física, ela também desempenha um papel crucial na promoção da
            densidade óssea, ajudando a prevenir condições como a osteoporose.
            Por meio de exercícios progressivos com pesos, a musculação tonifica
            o corpo, reduzindo a gordura corporal e aumentando a massa muscular
            magra, proporcionando uma aparência mais atlética e definida.
          </p>
        </div>
      </div>
      <HrElement/>

      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            Além dos benefícios físicos, a musculação também é conhecida por
            seus impactos positivos na saúde mental. A prática regular de
            exercícios, incluindo a musculação, pode reduzir os níveis de
            estresse, melhorar o humor e aumentar a autoestima, contribuindo
            para uma sensação geral de bem-estar.
          </p>
        </div>
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/musc-page-2.jpg"
            alt=""
          />
        </div>
      </div>
      <HrElement/>

      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="max-w-[350px] shadow-lg rounded-lg"
            src="/images/musc-page-3.jpg"
            alt=""
          />
        </div>
        <div className="col max-w-[500px] p-3 ">
          <p className="">
            A musculação é uma prática que oferece uma série de benefícios para
            a saúde. Além de fortalecer os músculos e aumentar a resistência
            física, ela também desempenha um papel crucial na promoção da
            densidade óssea, ajudando a prevenir condições como a osteoporose.
            Por meio de exercícios progressivos com pesos, a musculação tonifica
            o corpo, reduzindo a gordura corporal e aumentando a massa muscular
            magra, proporcionando uma aparência mais atlética e definida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Musculacao;
