const PROJECTS = [
  {
    id: 1,
    name: "aster reste",
    nickname: "aster",
    shortDescription: "restaurant",
    description:
      "Aster reste is a real restaurant (coming soon) based out of France. I used Ruby on Rails as an exercise in familiarizing myself with CRUD principles, and to quickly build a backend that allows the site owner to create and manage their own blog. Includes bilingual i18n integration.",
    image: "../images/aster-mockup-mini.png",
    cardImage: "../images/aster-card-mini.png",
    skills: ["rails", "javascript", "css"],
    cardBackground: "linear-gradient(94deg, #767e11, #b4b48b)",
    url: "https://salty-depths-22739.herokuapp.com/",
    github: "https://github.com/justjohnd/restaurant",
  },
  {
    id: 2,
    name: "veggit: recipe editor and saver",
    nickname: "veggit",
    shortDescription: "recipe app",
    description:
      "My first attempt at a MERN stack-based project, veggit is a recipe app that lets you write and edit original recipes, as well as upload recipes (via the Spoonacular API) directly from other sites. Full user authentication has been incorporated on the backend.",
    image: "../images/veggit-mockup.png",
    cardImage: "../images/veggit-card-mini.png",
    skills: ["react", "node", "mongodb", "express"],
    cardBackground: "linear-gradient(94deg, #27c214, #b7deb3)",
    url: "https://secret-springs-85430.herokuapp.com/",
    github: "https://github.com/justjohnd/wayou-kitchen",
  },
  {
    id: 3,
    name: "sound street radio",
    nickname: "soud street",
    shortDescription: "streaming radio",
    description:
      "This multilanguage site was built with an original Wordpress theme, along with Bootstrap. Sound Street Radio streams DJ shows from the UK and Japan.",
    image: "../images/ssr-mockup-mini.png",
    cardImage: "../images/ssr-card-mini.jpg",
    skills: ["wordpress", "gulp", "php", "bootstrap"],
    cardBackground: "linear-gradient(94deg, #FF9000, #ffd6a0)",
    url: "https://www.ssr990.com/",
    github: "https://github.com/justjohnd/ssr990",
  },
];

export default PROJECTS;
