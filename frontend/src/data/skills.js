/**
 * Skills Data for Satyanshu Gautam
 * Strictly restricted to verified skills without fabricated percentages.
 * Note: Three.js / R3F is excluded here per instructions.
 */

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and modern user interfaces.',
    skills: [
      { name: 'HTML', icon: 'Code', description: 'Semantic structure, accessibility, and modern HTML5 standards.' },
      { name: 'CSS', icon: 'Palette', description: 'Modern styling, Flexbox, Grid, keyframe animations, and responsive layouts.' },
      { name: 'JavaScript', icon: 'FileCode2', description: 'ES6+ features, asynchronous programming, DOM manipulation, and modern syntax.' },
      { name: 'React.js', icon: 'Atom', description: 'Component-based architecture, hooks, state management, and modern SPA design.' },
      { name: 'Tailwind CSS', icon: 'Wind', description: 'Utility-first CSS framework for rapid and consistent responsive UI development.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Architecting scalable server-side applications and RESTful APIs.',
    skills: [
      { name: 'Node.js', icon: 'Server', description: 'Asynchronous event-driven runtime environment for JavaScript backends.' },
      { name: 'Express.js', icon: 'Cpu', description: 'Fast, unopinionated, minimalist web framework for building REST APIs.' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Designing data schemas and managing persistent document storage.',
    skills: [
      { name: 'MongoDB', icon: 'Database', description: 'Document-oriented NoSQL database, schema modeling with Mongoose, and querying.' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Essential workflow, version control, and development utilities.',
    skills: [
      { name: 'Git', icon: 'GitBranch', description: 'Distributed version control, branch workflows, and commit history management.' },
      { name: 'GitHub', icon: 'Github', description: 'Code hosting, collaboration, version tracking, and repository maintenance.' },
      { name: 'Visual Studio Code', icon: 'Terminal', description: 'Primary code editor, extensions ecosystem, and integrated debugging tools.' },
      { name: 'Postman', icon: 'Send', description: 'API testing, request debugging, environment management, and documentation.' },
    ],
  },
];

export default skillCategories;

