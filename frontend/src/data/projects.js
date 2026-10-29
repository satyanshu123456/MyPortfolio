/**
 * Projects Data for Satyanshu Gautam
 * Structured by Engineering Value, Technical Impact, and Deployment Readiness.
 */

export const projects = [
  {
    id: 'pdf-translator',
    name: 'PDF Translator AI',
    tierLevel: 1,
    tierName: 'Tier 1 • Production AI System',
    tierBadge: 'Production AI App',
    category: 'AI Document Translation Tool',
    tagline: 'High-accuracy semantic PDF translation powered by Google AI Studio',
    valueProposition:
      'Eliminates language barriers in complex technical and business documentation using Google Gemini AI, preserving semantic context and document layout.',
    description:
      'An intelligent document translator application engineered on Google AI Studio to extract, parse, and translate PDF files accurately across global languages while preserving contextual meaning.',
    status: 'Live on AI Studio',
    statusBadge: 'Live Application',
    isLive: true,
    isWorking: true,
    liveUrl: 'https://pdf-translator-1.ai.studio',
    githubUrl: null,
    windowSlug: 'ai.studio/pdf-translator-1',
    valueMetrics: [
      { label: 'AI Engine', value: 'Google Gemini' },
      { label: 'Deployment', value: 'Google AI Studio' },
      { label: 'Latency', value: 'Sub-second I/O' },
    ],
    proposedTechnologies: ['Google AI Studio', 'Gemini API', 'React', 'JavaScript', 'Tailwind CSS'],
    accentColor: '#22D3EE', // Cyan
    features: [
      'Multi-language document text extraction and semantic translation',
      'Context-aware AI translation preserving technical terminology',
      'Seamless browser-based document processing and output download',
      'Engineered and deployed using Google AI Studio architecture',
    ],
  },
  {
    id: 'docuconvert',
    name: 'DocuConvert',
    tierLevel: 1,
    tierName: 'Tier 1 • Production AI System',
    tierBadge: 'Production AI App',
    category: 'AI Document & File Converter',
    tagline: 'Automated multi-format document conversion & restructuring engine',
    valueProposition:
      'Solves multi-extension document fragmentation by providing universal format conversion with AI-driven content restructuring and client-side processing security.',
    description:
      'An intelligent file and document conversion tool built on Google AI Studio to convert, structure, and reformat multi-extension documents effortlessly with AI assistance.',
    status: 'Live on AI Studio',
    statusBadge: 'Live Application',
    isLive: true,
    isWorking: true,
    liveUrl: 'https://docuconvert-file-new-converter.ai.studio',
    githubUrl: null,
    windowSlug: 'ai.studio/docuconvert-converter',
    valueMetrics: [
      { label: 'Runtime Engine', value: 'AI Studio Core' },
      { label: 'Format Support', value: 'Multi-Extension' },
      { label: 'Security', value: 'In-Memory Client' },
    ],
    proposedTechnologies: ['Google AI Studio', 'Gemini API', 'React', 'Node.js', 'File API'],
    accentColor: '#6366F1', // Indigo
    features: [
      'Multi-format file conversion workflow for versatile document extensions',
      'AI-assisted structural formatting and text preservation',
      'Frictionless file upload, real-time processing, and instant export',
      'Powered by Google AI Studio runtime environment',
    ],
  },
  {
    id: 'cravings',
    name: 'Cravings',
    tierLevel: 2,
    tierName: 'Tier 2 • Full-Stack Platform',
    tierBadge: 'Full-Stack MERN Platform',
    category: 'Food Delivery Web Application',
    tagline: 'End-to-end culinary e-commerce platform with dynamic cart state',
    valueProposition:
      'Delivers a complete digital ordering journey with real-time shopping cart state management, restaurant menu filtering, and responsive mobile-first checkout.',
    description:
      'A full-stack food delivery web application in active working mode, designed to browse restaurant menus, customize meals, manage shopping carts, and streamline food ordering.',
    status: 'Working Mode',
    statusBadge: 'Active / Working Mode',
    isLive: false,
    isWorking: true,
    liveUrl: null,
    githubUrl: null,
    windowSlug: 'cravings.food/menu-order',
    valueMetrics: [
      { label: 'Architecture', value: 'Full MERN Stack' },
      { label: 'State Model', value: 'Dynamic Cart Engine' },
      { label: 'Target Platform', value: 'Cross-Device Web' },
    ],
    proposedTechnologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    accentColor: '#10B981', // Emerald
    features: [
      'Interactive restaurant menu browsing with category and price filters',
      'Dynamic shopping cart with real-time total calculations',
      'Smooth order placement workflow with delivery status tracking',
      'Fully responsive UI tailored for mobile phones, tablets, and desktop',
    ],
  },
  {
    id: 'mingo-chatapp',
    name: 'Mingo ChatApp',
    tierLevel: 3,
    tierName: 'Tier 3 • Real-Time Architecture',
    tierBadge: 'Distributed Socket System',
    category: 'Real-Time Messaging Application',
    tagline: 'High-throughput bi-directional chat system with live presence',
    valueProposition:
      'Engineered for low-latency communication with WebSocket bi-directional transport, instant online/offline presence tracking, and persistent message clustering.',
    description:
      'A planned real-time messaging application focused on instantaneous text communication, user presence indicators, private chats, and seamless media exchange.',
    status: 'Coming Soon',
    statusBadge: 'Coming Soon',
    isLive: false,
    isWorking: false,
    liveUrl: null,
    githubUrl: null,
    windowSlug: 'mingo.chat/room-live',
    valueMetrics: [
      { label: 'Transport Core', value: 'Socket.IO Engine' },
      { label: 'Data Layer', value: 'MongoDB Sessions' },
      { label: 'Roadmap Sprint', value: 'Phase 2 Architecture' },
    ],
    proposedTechnologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    accentColor: '#A855F7', // Purple
    features: [
      'Instant real-time messaging powered by WebSocket connectivity',
      'Live online/offline user status and real-time typing indicators',
      'Private 1-on-1 direct messages and community group channels',
      'Persistent message history backed securely by MongoDB',
    ],
  },
];

export default projects;
