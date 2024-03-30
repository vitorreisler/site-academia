//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });
import Modalidades from "@/components/modalidades";
import Pacotes from "./pacotes/pacotes";
import HrElement from "@/components/hrElement";

export default function Home() {
  return (
    <section>
      <div className="banner-home ">{/*Foto no background, nao tirar */}</div>
      <HrElement />
      <div className="pacotes-home">
        <Pacotes />
      </div>
      <HrElement />

      <div className="modalidades-home">{<Modalidades />}</div>
      <HrElement />

      <div className="unidades-home"></div>
    </section>
  );
}
