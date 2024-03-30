import CardModalidade from "./CardModalidade";

const Modalidades = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 scale-90">
      <CardModalidade
        imgModalidade="./images/musculacao-modalidade.jpg"
        title="Musculação"
        descricaoModalidade="A musculação é uma forma poderosa de fortalecer e esculpir o corpo. Com pesos livres e máquinas, promove aumento de massa muscular, melhora da postura e da saúde óssea. Ideal para quem busca resultados físicos sólidos e duradouros em sua jornada fitness."
        buttonMsg="Ler Mais..."
        redirect="/modalidades/musculacao"
      />
      <CardModalidade
        imgModalidade="./images/crossfit-modalidade.jpg"
        title="CrossFit"
        descricaoModalidade="O CrossFit combina levantamento de peso, ginástica e treinamento metabólico para fortalecer, aumentar a resistência e flexibilidade. Sua abordagem variada mantém a motivação alta. É ideal para quem busca resultados eficientes em pouco tempo."
        buttonMsg="Ler Mais..."
        redirect="/modalidades/crossfit"
      />
      <CardModalidade
        imgModalidade="./images/personal-modalidade.jpg"
        title="Personal Trainer"
        descricaoModalidade="
          Um personal trainer é o parceiro ideal para alcançar objetivos fitness específicos. Oferecendo orientação personalizada, motivação e correção técnica, eles maximizam o potencial do cliente, resultando em progresso constante e duradouro."
        buttonMsg="Ler Mais..."
        redirect="/modalidades/personal"
      />
      <CardModalidade
        imgModalidade="./images/nutricionista-modalidade.jpg"
        title="Nutricionistas"
        descricaoModalidade="
        Nutricionistas são guias fundamentais na busca por uma alimentação saudável e equilibrada. Com orientação personalizada, planos alimentares adaptados e suporte contínuo, eles ajudam a alcançar metas de saúde e bem-estar, promovendo mudanças duradouras nos hábitos alimentares."
        buttonMsg="Ler Mais..."
        redirect="/modalidades/nutricionista"
      />
    </div>
  );
};

export default Modalidades;
