import logo from "../assets/img/cible.png";

const dataDecision = [
  {
    id: 1,
    title: "1.Contenu",
    txt: "lorem ipsum contenus",
    img: logo,
    title1: "Le Contenu",
    title2: "Titre de l'annonce",
    title3: "",
    input: [
      {
        id: 1,
        label: "Titre de la decision",
        placeholder: "Texte",
        type: "text",
        name: "Title",
        value: "",
      },
      {
        id: 2,
        label: "Contenu de la decision",
        placeholder: "Texte",
        type: "text",
        name: "Description",
        value: "",
      },
    ],

    isActive: false,
  },

  {
    id: 2,
    title: "2.Utilité",
    txt: "lorem ipsum utilité",
    img: logo,
    title1: "L'Utilité",
    title2: "Utilité Utilité Utilité",
    title3: "",
    input: [
      {
        id: 2,
        label: "Utilité",
        placeholder: "Texte",
        type: "text",
        name: "Description1",
        value: "",
      },
    ],
    isActive: true,
  },

  {
    id: 3,
    title: "3.Contexte",
    txt: "lorem ipsum contexte",
    img: logo,
    title1: "Le Contexte",
    title2: "",
    title3: "",
    input: [
      {
        id: 2,
        label: "contexte",
        placeholder: "Texte",
        type: "text",
        name: "Description2",
        value: "",
      },
    ],
    isActive: false,
  },

  {
    id: 4,
    title: "4.Bénéfice",
    txt: "lorem ipsum bénéfice",
    img: logo,
    title1: "Le Bénéfice",
    title2: "",
    title3: "",
    input: [
      {
        id: 2,
        label: "bénéfice",
        placeholder: "Texte",
        type: "text",
        name: "Description3",
        value: "",
      },
    ],
    isActive: false,
  },

  {
    id: 5,
    title: "5.Inconvénient",
    txt: "lorem ipsum inconvénient",
    img: logo,
    title1: "L'Inconvénient",
    title2: "",
    title3: "",
    input: [
      {
        id: 2,
        label: "l'inconvénient",
        placeholder: "Texte",
        type: "text",
        name: "Description4",
        value: "",
      },
    ],
    isActive: false,
  },
];
export default dataDecision;
