import { useParams } from "next/navigation";
import Link from "next/link"

const Pacote = (props: {
  taxa: boolean;
  qtdAmigos: string;
  nome: string;
  preco: number;
  modalidade1: string;
  modalidade2: string;
  modalidade3: string;
}) => {
  const {
    taxa,
    qtdAmigos,
    nome,
    preco,
    modalidade1,
    modalidade2,
    modalidade3,
  } = props;
  return (
    <div className=" scale-90 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-8 dark:bg-yellow-400 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-black dark:text-black">
        {nome}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">R$</span>
        <span className="text-5xl font-extrabold tracking-tight">{preco}</span>
        <span className="ms-1 text-xl font-normal text-black dark:text-black">
          /mês
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7"> 
        <li className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 text-green-400 dark:text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-black dark:text-black ms-3">
            {qtdAmigos} Amigos para treinar com voce
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-green-400 dark:text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-black dark:text-black ms-3">
            {modalidade1}
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-green-400 dark:text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-black dark:text-black ms-3">
            {modalidade2}
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-green-400 dark:text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-black dark:text-black ms-3">
            {modalidade3}
          </span>
        </li>

        {preco >= 125 ? (
          <li className="flex">
            <svg
              className="flex-shrink-0 w-4 h-4  text-green-400 dark:text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-black ms-3">
              Pode treinar em outras Unidades
            </span>
          </li>
        ) : (
          <li className="flex line-through decoration-red-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-red-600 dark:text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-red-600 ms-3">
              Pode treinar em outras Unidades
            </span>
          </li>
        )}
        {taxa ? (
          <li className="flex line-through decoration-red-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-red-600 dark:text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-red-600 ms-3">
              Isenção de Taxas
            </span>
          </li>
        ) : (
          <li className="flex">
            <svg
              className="flex-shrink-0 w-4 h-4  text-green-400 dark:text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-black ms-3">
              Isenção de Taxas
            </span>
          </li>
        )}
      </ul>
      <Link
        href="/pacotes/matricula"
        type="button"
        role="button"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Matricule-se
      </Link>
    </div>
  );
};

export default Pacote;
