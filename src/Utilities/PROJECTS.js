const PROJECTS = [
  {
    id: 1,
    name: "aster reste",
    nickname: "aster",
    shortDescription: "restaurant",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae facilis, officiis consectetur voluptatibus blanditiis, distinctio eligendi ea quibusdam delectus optio aspernatur deserunt eveniet laudantium explicabo sed",
    image: "../images/aster-mockup.png",
    cardImage: "../images/aster-card-mini.jpg",
    skills: {
      rails: true,
      javascript: true,
      css: true,
    },
    cardBackground: "linear-gradient(94deg, #767e11, #b4b48b)",
  },
  {
    id: 2,
    name: "veggit: recipe editor and saver",
    nickname: "veggit",
    shortDescription: "recipe app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae facilis, officiis consectetur voluptatibus blanditiis, distinctio eligendi ea quibusdam delectus optio aspernatur deserunt eveniet laudantium explicabo sed",
    image: "../images/veggit-mockup.png",
    cardImage: "../images/veggit-card-mini.png",
    skills: {
      rails: false,
      javascript: false,
      css: false,
      node: true,
      react: true,
      express: true,
      mongodb: true,
    },
    cardBackground: "linear-gradient(94deg, #27c214, #b7deb3)",
  },
  {
    id: 3,
    name: "sound street radio",
    nickname: "soud street",
    shortDescription: "streaming radio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae facilis, officiis consectetur voluptatibus blanditiis, distinctio eligendi ea quibusdam delectus optio aspernatur deserunt eveniet laudantium explicabo sed",
    image: "",
    cardImage: "../images/ssr-card-mini.jpg",
    skills: {
      rails: false,
      javascript: false,
      css: false,
      node: false,
      react: false,
      express: false,
      mongodb: false,
      wordpress: true,
      php: true,
      bootstrap: true,
      gulp: true,
    },
    cardBackground: "linear-gradient(94deg, #FF9000, #ffd6a0)",
  },
];

export default PROJECTS;
