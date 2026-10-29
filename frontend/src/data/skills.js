/**
 * Skills Data for Satyanshu Gautam
 * Comprehensive, verified technical competencies with detailed architectural specifications.
 */

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and modern user interfaces.',
    skills: [
      {
        id: 'html5',
        name: 'HTML',
        fullName: 'HTML5 Semantic Architecture',
        category: 'Frontend Development',
        color: '#E34F26',
        icon: 'Code',
        proficiency: 'Core Foundation',
        description: 'Semantic structure, accessibility, and modern HTML5 standards.',
        fullOverview:
          'HTML5 provides the foundational document structure and semantics for all modern web interfaces. Utilized extensively for SEO-friendly hierarchy, ARIA accessibility attributes, and responsive layout foundations.',
        coreCapabilities: [
          'Semantic HTML5 structure (<main>, <article>, <section>, <nav>)',
          'Accessible markup with standard ARIA roles and labels',
          'Optimized document metadata, OpenGraph tags, and favicon routing',
          'Modern form elements with built-in client-side constraints',
        ],
        portfolioUsage:
          'Applied across all React SPA components in this personal portfolio, Cravings, and Google AI Studio project wrappers.',
        ecosystem: ['Semantic Tags', 'ARIA Accessibility', 'Forms API', 'SEO Metadata'],
      },
      {
        id: 'css3',
        name: 'CSS',
        fullName: 'CSS3 & Responsive Design',
        category: 'Frontend Development',
        color: '#1572B6',
        icon: 'Palette',
        proficiency: 'Core Foundation',
        description: 'Modern styling, Flexbox, Grid, keyframe animations, and responsive layouts.',
        fullOverview:
          'CSS3 drives modern visual hierarchy, fluid layouts, responsive breakpoints, and hardware-accelerated animations. Mastered in conjunction with modern CSS variables, glassmorphism filters, and CSS Grid.',
        coreCapabilities: [
          'CSS Grid and Flexbox multi-dimensional layout engines',
          'Responsive design with fluid rem/em typography and media queries',
          'Custom CSS properties (variables) for live Dark/Light theme switching',
          'Hardware-accelerated CSS keyframe animations and backdrop-filter blur',
        ],
        portfolioUsage:
          'Powers custom glassmorphism surfaces, neon glow accents, scrollbars, and fluid layout scaling throughout Satyanshu.dev.',
        ecosystem: ['Flexbox', 'CSS Grid', 'CSS Variables', 'Animations', 'Media Queries'],
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        fullName: 'Modern JavaScript (ES6+)',
        category: 'Frontend Development',
        color: '#F7DF1E',
        icon: 'FileCode2',
        proficiency: 'Core Language',
        description: 'ES6+ features, asynchronous programming, DOM manipulation, and modern syntax.',
        fullOverview:
          'JavaScript is the primary engine behind modern full-stack engineering. Proficient in ES6+ syntax, asynchronous control flow (Promises, async/await), closure scope, event loop handling, and DOM event delegating.',
        coreCapabilities: [
          'ES6+ modern syntax: destructuring, rest/spread, arrow functions, modules',
          'Asynchronous operations: Promises, async/await, and Fetch API',
          'Event Loop mastery: call stack, microtask queues, and event handling',
          'Array methods: map, filter, reduce, and functional data transformation',
        ],
        portfolioUsage:
          'Drives client-side state logic, dynamic API communications, and reactive UI transitions across the entire portfolio.',
        ecosystem: ['ES6+', 'Async/Await', 'Fetch API', 'DOM API', 'Event Loop'],
      },
      {
        id: 'react',
        name: 'React.js',
        fullName: 'React.js Single-Page Framework',
        category: 'Frontend Development',
        color: '#61DAFB',
        icon: 'Atom',
        proficiency: 'Core Framework',
        description: 'Component-based architecture, hooks, state management, and modern SPA design.',
        fullOverview:
          'React.js is Satyanshu’s primary library for engineering declarative, component-driven user interfaces. Experienced with modern hooks (useState, useEffect, useMemo, useCallback), React Router DOM v6, and client-side lifecycle optimization.',
        coreCapabilities: [
          'Component-driven architecture with clean separation of concerns',
          'Hooks-based state & side-effects (useState, useEffect, custom hooks)',
          'Declarative client-side routing via React Router DOM v6 with lazy loading',
          'Optimized DOM rendering with virtual DOM reconciliation',
        ],
        portfolioUsage:
          'Architected the entire personal portfolio with React 18, modular page routing, Framer Motion transitions, and interactive project cards.',
        ecosystem: ['React 18', 'React Router v6', 'Framer Motion', 'Hooks', 'Vite'],
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        fullName: 'Tailwind CSS Framework',
        category: 'Frontend Development',
        color: '#38BDF8',
        icon: 'Wind',
        proficiency: 'Styling Architecture',
        description: 'Utility-first CSS framework for rapid and consistent responsive UI development.',
        fullOverview:
          'Tailwind CSS accelerates front-end development by composing utility classes directly into markup, ensuring minimal production CSS bundle sizes and cohesive design system tokens.',
        coreCapabilities: [
          'Utility-first styling workflow with atomic design system variables',
          'Custom theme extension in tailwind.config.js for brand neon glows',
          'Responsive design modifiers (sm, md, lg, xl) for seamless cross-device layouts',
          'Seamless class composition with arbitrary variants and dark mode selectors',
        ],
        portfolioUsage:
          'Crafted the entire futuristic dark/light portfolio UI, typography hierarchy, neon glow effects, and responsive navigation drawers.',
        ecosystem: ['Tailwind v3', 'PostCSS', 'Autoprefixer', 'Tailwind Plugins'],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Architecting scalable server-side applications and RESTful APIs.',
    skills: [
      {
        id: 'nodejs',
        name: 'Node.js',
        fullName: 'Node.js JavaScript Runtime',
        category: 'Backend Development',
        color: '#339933',
        icon: 'Server',
        proficiency: 'Primary Runtime',
        description: 'Asynchronous event-driven runtime environment for JavaScript backends.',
        fullOverview:
          'Node.js executes JavaScript on the V8 engine outside the browser. Satyanshu utilizes Node.js to engineer non-blocking, event-driven server applications, background services, and automated test runners.',
        coreCapabilities: [
          'Non-blocking, asynchronous I/O with libuv event loop architecture',
          'Native ECMAScript Modules (ESM) package configuration and import flows',
          'Environment configuration and secret management using dotenv',
          'Built-in node:test test runner for high-speed automated unit testing',
        ],
        portfolioUsage:
          'Powers the portfolio backend REST API server, graceful port retry listeners, and Nodemailer email dispatch services.',
        ecosystem: ['V8 Engine', 'npm', 'ESM', 'Event Loop', 'Node Built-ins'],
      },
      {
        id: 'express',
        name: 'Express.js',
        fullName: 'Express.js REST Framework',
        category: 'Backend Development',
        color: '#68A063',
        icon: 'Cpu',
        proficiency: 'Server Framework',
        description: 'Fast, unopinionated, minimalist web framework for building REST APIs.',
        fullOverview:
          'Express.js is the de facto backend framework for the MERN stack. Proficient in organizing modular routers, designing custom middleware chains, input sanitization, rate limiting, and centralized error handling.',
        coreCapabilities: [
          'RESTful API routing with modular controller separation',
          'Middleware pipeline: helmet security headers, cors policies, and body parsers',
          'Custom rate limiting middleware (express-rate-limit) to prevent API spam',
          'Centralized error handling middleware with unified JSON status responses',
        ],
        portfolioUsage:
          'Configured as the primary REST server handling /api/contact, /api/health, and input validation pipelines.',
        ecosystem: ['Express Router', 'CORS', 'Helmet', 'Rate Limit', 'Middleware'],
      },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Designing data schemas and managing persistent document storage.',
    skills: [
      {
        id: 'mongodb',
        name: 'MongoDB',
        fullName: 'MongoDB NoSQL & Mongoose',
        category: 'Database Architecture',
        color: '#13AA52',
        icon: 'Database',
        proficiency: 'Core Database',
        description: 'Document-oriented NoSQL database, schema modeling with Mongoose, and querying.',
        fullOverview:
          'MongoDB provides flexible, JSON-like document persistence suited for rapidly scaling web applications. Used alongside Mongoose ODM for strict schema validation, type enforcement, and connection retry resilience.',
        coreCapabilities: [
          'NoSQL document schema design with strict Mongoose validation',
          'Resilient connection handling with auto-reconnect and DNS fallback',
          'Query filtering, projections, indexing, and sorting pipelines',
          'Atlas cloud cluster deployment and connection string URI configuration',
        ],
        portfolioUsage:
          'Persists incoming contact submissions from the portfolio contact form, with safe in-memory fallback during local testing.',
        ecosystem: ['MongoDB Atlas', 'Mongoose ODM', 'BSON', 'Database Queries'],
      },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Essential workflow, version control, and development utilities.',
    skills: [
      {
        id: 'git',
        name: 'Git',
        fullName: 'Git Version Control',
        category: 'Developer Tools',
        color: '#F05032',
        icon: 'GitBranch',
        proficiency: 'Version Control',
        description: 'Distributed version control, branch workflows, and commit history management.',
        fullOverview:
          'Git provides the foundation for source code management, tracking atomic commits, branch isolation, and multi-developer repository collaboration.',
        coreCapabilities: [
          'Atomic commit messages following conventional commit guidelines',
          'Branch management: feature branching, merging, and rebasing',
          'Merge conflict resolution and staged index inspections',
          'Git command-line tooling (git status, diff, log, reset, stash)',
        ],
        portfolioUsage:
          'Maintains the version history of the personalPort codebase, structured across clean feature commits.',
        ecosystem: ['CLI', 'Branching', 'Commits', 'Rebase', 'Stash'],
      },
      {
        id: 'github',
        name: 'GitHub',
        fullName: 'GitHub Cloud Collaboration',
        category: 'Developer Tools',
        color: '#A855F7',
        icon: 'Github',
        proficiency: 'Collaboration Platform',
        description: 'Code hosting, collaboration, version tracking, and repository maintenance.',
        fullOverview:
          'GitHub serves as the central hub for hosting open-source and personal repositories, tracking project issues, documenting codebases, and automating continuous delivery.',
        coreCapabilities: [
          'Remote repository creation, cloning, pushing, and pull requests',
          'Comprehensive markdown README.md documentation and repository badges',
          'Issue tracking, project roadmap visualization, and releases',
          'GitHub ecosystem workflows for modern open-source collaboration',
        ],
        portfolioUsage:
          'Hosts Satyanshu’s public repositories at github.com/satyanshu123456 with clear project documentation.',
        ecosystem: ['Git Remotes', 'Pull Requests', 'Markdown', 'Issues', 'Releases'],
      },
      {
        id: 'vscode',
        name: 'Visual Studio Code',
        fullName: 'VS Code Development Environment',
        category: 'Developer Tools',
        color: '#007ACC',
        icon: 'Terminal',
        proficiency: 'Primary Editor',
        description: 'Primary code editor, extensions ecosystem, and integrated debugging tools.',
        fullOverview:
          'Visual Studio Code is Satyanshu’s primary IDE for full-stack engineering, leveraged for its deep language tooling, integrated PowerShell/Bash terminals, and linting.',
        coreCapabilities: [
          'Integrated terminal for concurrent frontend and backend processes',
          'ESLint and Prettier workspace formatting and syntax inspection',
          'Full-featured debugging with breakpoints and environment inspect',
          'Extensions ecosystem: Tailwind IntelliSense, React Snippets, GitLens',
        ],
        portfolioUsage:
          'Configured workspace for personalPort, managing Vite hot-reloading and Node.js backend processes concurrently.',
        ecosystem: ['IntelliSense', 'ESLint', 'Prettier', 'Integrated Terminal'],
      },
      {
        id: 'postman',
        name: 'Postman',
        fullName: 'Postman API Testing Platform',
        category: 'Developer Tools',
        color: '#FF6C37',
        icon: 'Send',
        proficiency: 'API Testing & QA',
        description: 'API testing, request debugging, environment management, and documentation.',
        fullOverview:
          'Postman enables rigorous manual and automated API validation, verifying HTTP response codes, JSON schema payloads, headers, and error edge cases before client consumption.',
        coreCapabilities: [
          'HTTP method testing: GET, POST, PUT, DELETE with custom headers',
          'JSON body validation, multipart form data, and parameter testing',
          'Environment variable switching between Localhost and Production endpoints',
          'Status code verification (200 OK, 400 Bad Request, 429 Rate Limit, 500)',
        ],
        portfolioUsage:
          'Used to test and validate /api/contact endpoints, input rejection edge cases, and rate-limiting responses.',
        ecosystem: ['REST Testing', 'JSON Payloads', 'Environments', 'HTTP Headers'],
      },
    ],
  },
];

// Flat array containing all 12 verified skills for linear slide navigation
export const allSkillsList = skillCategories.flatMap((category) => category.skills);

export default skillCategories;
