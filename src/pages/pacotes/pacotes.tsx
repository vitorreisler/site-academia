import Pacote from "../../components/Pacote";
import planos from "../../data/planos.js";

const Pacotes = () => {
  return (
    <section className="flex flex-wrap justify-center">
      {planos.map((plano) => {
        return (
          <Pacote
            key={plano.nome}
            nome={plano.nome}
            preco={plano.preco}
            modalidade1={plano.modalidade1}
            modalidade2={plano.modalidade2}
            modalidade3={plano.modalidade3}
            qtdAmigos={plano.qtdAmigos}
            taxa={plano.taxa}
          />
        );
      })}
    </section>
  );
};

export default Pacotes;
