import yoga_teach from "../../public/images/yoga-teacher.jpg";
import musc_teach from "../../public/images/musculacao-teacher.jpg";
import crossfi_teach from "../../public/images/crossfit-teacher2.jpg";

const treinadores = [
  {
    id:1,
    modalidade: "Yoga",
    name: "Sara ",
    age: 20,
    height: 1.55,
    weight: "57Kg",
    hobby1: "Yoga",
    hobby2: "Sing",
    hobby3: "BeachTenis",
    img: yoga_teach,
    alt: "yoga-teacher",
  },
  {
    id:2,
    modalidade: "Musculação",
    name: "Roberto",
    age: 21,
    height: 1.79,
    weight: "80Kg",
    hobby1: "Gym",
    hobby2: "Cook",
    hobby3: "Read",
    img: musc_teach,
    alt: "gym-teacher",
  },

  {
    id:3,
    modalidade: "Crossfit",
    name: "Jorge",
    age: 22,
    height: 1.8,
    weight: "80Kg",
    hobby1: "Crossfit",
    hobby2: "Soccer",
    hobby3: "Run",
    img: crossfi_teach,
    alt: "crossfit-teacher",
  },
];

export default treinadores;
