const Card = (props: {
  name: string;
  age: number;
  height: number;
  weight: string;
  hobby1: string;
  hobby2: string;
  hobby3: string;
}) => {
  const { name, age, height, weight, hobby1, hobby2, hobby3 } = props;
  return (
    <div className="max-w-52 rounded-lg overflow-hidden shadow-lg text-center">
      <img
        className="w-52 "
        src="./images/vitor-perfil-3x4.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Idade: {age}</p>
        <p className="text-gray-700 text-base">Peso: {weight}</p>
        <p className="text-gray-700 text-base ">Altura: {height}</p>
      </div>
      <div className="flex flex-col text-center px-6">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hobby1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hobby2}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hobby3}
        </span>
      </div>
    </div>
  );
};

export default Card;
