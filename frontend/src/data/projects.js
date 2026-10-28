/**
 * Planned Projects Data for Satyanshu Gautam
 * Accurately communicates "Coming Soon" / "Development Planned" status.
 * Extensible schema to support repository URLs and live deployment URLs later.
 */

export const projects = [
  {
    id: 'taskflow',
    name: 'TaskFlow',
    category: 'Task Management Application',
    tagline: 'Streamlined productivity and workflow organization',
    description:
      'A planned task management application designed to organize tasks, track progress, and improve productivity through a clean dashboard.',
    status: 'Coming Soon',
    statusBadge: 'Development Planned',
    proposedTechnologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    accentColor: '#6366F1', // Indigo
    features: [
      'Interactive task boards and kanban-style columns',
      'Priority levels, due dates, and milestone tracking',
      'User authentication and personalized dashboards',
      'Responsive interface optimized for desktop and mobile',
    ],
    githubUrl: null, // Ready for real repository URL when launched
    liveUrl: null,   // Ready for live URL when deployed
  },
  {
    id: 'careerconnect',
    name: 'CareerConnect',
    category: 'Job and Internship Portal',
    tagline: 'Bridging aspiring developers with career opportunities',
    description:
      'A planned career platform designed to help students explore job opportunities, discover internships, and track applications.',
    status: 'Coming Soon',
    statusBadge: 'Development Planned',
    proposedTechnologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    accentColor: '#22D3EE', // Cyan
    features: [
      'Targeted job and internship search with filtering',
      'Student profile management and resume showcase',
      'Application tracking pipeline from submission to offer',
      'Recruiter post management and direct applicant overview',
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 'chatsphere',
    name: 'ChatSphere',
    category: 'Real-Time Chat Application',
    tagline: 'Instant messaging with seamless presence and media sharing',
    description:
      'A planned messaging application focused on real-time communication, user presence, and image sharing.',
    status: 'Coming Soon',
    statusBadge: 'Development Planned',
    proposedTechnologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    accentColor: '#A855F7', // Purple
    features: [
      'Instant real-time messaging with WebSocket connectivity',
      'Live online/offline user presence indicators',
      'Media and image sharing within private & group chats',
      'Persistent message history backed by MongoDB',
    ],
    githubUrl: null,
    liveUrl: null,
  },
];

export default projects;

