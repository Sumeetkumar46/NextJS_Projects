import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Express JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Greet Labs Pvt Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "NOV 2020 - Present",
    points: [
      "Having 3.2 years of experience in developing Web applications using (MERN stack)React Js, Express Js, Mongo DB and NodeJs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Greet Labs Pvt Ltd",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "NOV 2020 - Present",
    points: [
      "3.2 years of hands on experience as ReactJS Front-end Developer in developing web-based applications.",
      "Design responsive and interactive interfaces to update websites for 5+ clients.",
      "Use React components to improve load times for web applications by 30%.",
      "Integrated APIs and handled asynchronous operations, ensuring smooth data retrieval and display through efficient component lifecycle management",
      "Leveraged Reactjs resources for all data access, standardizing data access interfaces.",
      "Implementing UI mockups, integrating 3rd party React libraries communicate with backend RESTful API.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Greet Labs Pvt Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "NOV 2020 - Present",
    points: [
      "Collaborated with a team of developers to design, develop, and deploy web applications using Node.js and related technologies.",
      "Implemented authentication and authorization mechanisms, enhancing application security. using Nodejs & React.js related technologies.",
      "Developed RESTful APIs for client-server communication, utilizing asynchronous programming and Promises for efficient data handling.",
      "Integrated databases (MongoDB) into applications, designing schemas and implementing CRUD operations for efficient data management.",
      "Kept up-to-date with the latest trends and best practices in Node.js development, consistently improving technical skills and sharing knowledge with the team.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product.",
    name: "Tanu",
    designation: "Dev",
    company: "Greet Labs Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success does.",
    name: "Mallikarjun",
    designation: "Dev",
    company: "Greet Labs Pvt Ltd",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sumee optimized our website, our traffic increased by 15%. We can't thank them enough!",
    name: "Prajwal",
    designation: "Team mem",
    company: "Greet Labs Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "nVipani(Shop Connect)",
    description:
      "From simple appoinments to live video commerence, immersive and personalized shopping, aim to help retailers build strong trademarked retail experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Resrevation Booking (Bookingjini)",
    description:
      "Web application that enables Marcketing automation tools boosts marcketing to grow business to offer top-notch features. Realtime updates and automated alerts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "white-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ivykids(Yellowclass)",
    description:
      "This App is trusted by 1+Cr people. It is online learning app for kids, focusing on conceptula understanding and confidence building .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "html,css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
