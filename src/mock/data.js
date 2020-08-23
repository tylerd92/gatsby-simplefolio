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
  subtitle: "I'm a Software Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'project.jpg',
  paragraphOne:
    'I am a software developer from Brooklyn, NY. I currently work for Infosys, a consulting company. I graduated with a Bachelor of Science degree in computer science.',
  paragraphTwo:
    'I have knowledge of the following programming languages: JavaScript, Python, and Java. I specialize in web development. The web frameworks I have used at work, side projects, or open-source are Spring, React, Express, and Node.js. I primarily use Oracle 11g as a SQL database.',
  paragraphThree:
    'I believe technology can be used to make a positive difference in the world. In my next role, I would like to be a part of a company whose mission is to a positive impact.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'MyReads.png',
    title: 'MyReads',
    info:
      'This application works like a "virtual" bookshelf. It allows you to keep track of what books you are currently reading, want to read, and have read. When you "move" the book from one "shelf" to another it saves your changes through an API.',
    info2: '',
    url: 'https://reactnd-project-myreads-starter-eight.vercel.app/',
    repo: 'https://github.com/tylerd92/reactnd-project-myreads-starter',
  },
  {
    id: uuidv1(),
    img: 'myHealthLog.png',
    title: 'CoronaTracker',
    info:
      "An open source project I contribute to, it is an easy-to-use PWA to monitor the user's wellness and learn about COVID-19.",
    info2: '',
    url: 'https://coronatrackerbeta.com/',
    repo: 'https://github.com/COVID-19-electronic-health-system/Corona-tracker', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Expensify.png',
    title: 'Expensify',
    info: 'An app to add your expenses in order to understand where your money is going',
    info2: '',
    url: 'https://react-expensify-td.herokuapp.com/',
    repo: 'https://github.com/tylerd92/expensify-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'chatApp.png',
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
