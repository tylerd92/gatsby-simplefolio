import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Tyler Deans | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tyler Deans',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'project.jpg',
  paragraphOne: 'This is a test paragraph',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'CoronaTracker',
    info:
      "An open source project I contribute to, it is an easy-to-use PWA to monitor the user's wellness and learn about COVID-19.",
    info2: '',
    url: 'https://coronatrackerbeta.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Expensify',
    info: 'An app to add your expenses in order to understand where your money is going',
    info2: '',
    url: 'https://react-expensify-td.herokuapp.com/',
    repo: 'https://github.com/tylerd92/expensify-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Chat App',
    info: 'A basic chat application using Node.js, Express, and Socket.io',
    info2: '',
    url: 'https://quiet-everglades-67299.herokuapp.com/',
    repo: 'https://github.com/tylerd92/node-chat-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'contact@tylerdeans.net',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tylerdeans',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/tylerd92',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
