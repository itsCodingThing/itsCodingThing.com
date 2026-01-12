export interface FileSystemItem {
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileSystemItem[];
  metadata?: {
    size?: string;
    created?: string;
    modified?: string;
    description?: string;
    technologies?: string[];
    link?: string;
  };
}

export const fileSystem: FileSystemItem[] = [
  {
    name: "about.txt",
    type: "file",
    content: `Bhanu Pratap Singh
Full Stack Developer
===========================

👋 Hi there! I'm a passionate full-stack developer with 3+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.

💼 Professional Experience
--------------------------
Currently working as a Full Stack Developer, I specialize in modern JavaScript frameworks and have a strong foundation in both frontend and backend technologies.

🎯 What I Do
-------------
• Design and implement responsive web applications
• Build RESTful APIs and microservices
• Optimize application performance and user experience
• Collaborate with cross-functional teams to deliver high-quality products
• Stay updated with the latest web technologies and best practices

🌟 My Approach
--------------
I believe in writing clean, maintainable code and creating exceptional user experiences. I'm always eager to learn new technologies and take on challenging projects that push my boundaries.

📚 Continuous Learning
---------------------
The tech world evolves rapidly, and I evolve with it. I regularly contribute to open-source projects and explore emerging technologies to stay at the forefront of web development.

Let's build something amazing together! 🚀`,
    metadata: {
      size: "2.1KB",
      created: "2024-01-15",
      modified: "2024-01-20",
      description: "Personal information and background",
    },
  },
  {
    name: "projects",
    type: "directory",
    children: [
      {
        name: "ecommerce-platform",
        type: "directory",
        children: [
          {
            name: "README.md",
            type: "file",
            content: `# E-Commerce Platform

A full-featured e-commerce platform built with modern web technologies.

🛍️ Features
----------
• User authentication and authorization
• Product catalog with advanced filtering
• Shopping cart and wishlist functionality
• Secure payment processing
• Order tracking and management
• Admin dashboard for inventory management
• Responsive design for all devices

🛠️ Tech Stack
------------
• Frontend: Next.js, TypeScript, Tailwind CSS
• Backend: Node.js, Express, MongoDB
• Payment: Stripe API
• Authentication: JWT, bcrypt
• Deployment: Docker, AWS

🎯 Highlights
------------
• Implemented real-time inventory management
• Reduced page load time by 40% through optimization
• Built progressive web app features for offline support
• Achieved 99.9% uptime with proper error handling`,
            metadata: {
              size: "1.8KB",
              created: "2023-09-10",
              modified: "2023-12-15",
              link: "https://github.com/itsCodingThing/ecommerce-platform",
              technologies: ["Next.js", "MongoDB", "Stripe", "AWS"],
            },
          },
        ],
        metadata: {
          description: "Complete e-commerce solution with modern features",
        },
      },
      {
        name: "weather-dashboard",
        type: "directory",
        children: [
          {
            name: "README.md",
            type: "file",
            content: `# Weather Dashboard

A real-time weather application with beautiful visualizations and forecasts.

🌤️ Features
----------
• Current weather conditions with animated icons
• 7-day weather forecast
• Interactive weather maps
• Location-based weather detection
• Air quality index monitoring
• Weather alerts and notifications
• Multi-city weather comparison

🛠️ Tech Stack
------------
• Frontend: React, TypeScript, Chart.js
• API: OpenWeatherMap API, GeoDB API
• State Management: Redux Toolkit
• Styling: Styled Components
• Deployment: Vercel

🎯 Highlights
------------
• Implemented custom weather data caching for offline support
• Created interactive weather visualizations using D3.js
• Optimized API calls to reduce load on weather services
• Built responsive design that works seamlessly on all devices`,
            metadata: {
              size: "1.5KB",
              created: "2023-07-20",
              modified: "2023-11-30",
              link: "https://github.com/itsCodingThing/weather-dashboard",
              technologies: ["React", "Redux", "Chart.js", "OpenWeatherMap API"],
            },
          },
        ],
        metadata: {
          description: "Real-time weather monitoring application",
        },
      },
      {
        name: "task-manager",
        type: "directory",
        children: [
          {
            name: "README.md",
            type: "file",
            content: `# Task Manager

A comprehensive productivity tool for managing tasks and projects efficiently.

✅ Features
----------
• Task creation and management
• Project organization and tracking
• Team collaboration features
• Time tracking and analytics
• Calendar integration
• Priority-based task sorting
• Progress visualization and reports

🛠️ Tech Stack
------------
• Frontend: Vue.js 3, Composition API
• Backend: Node.js, Express, PostgreSQL
• Real-time: Socket.io
• Authentication: OAuth 2.0
• Testing: Jest, Cypress
• Deployment: DigitalOcean

🎯 Highlights
------------
• Implemented drag-and-drop interface for task management
• Built real-time collaboration features for team projects
• Created advanced filtering and search functionality
• Developed comprehensive analytics dashboard
• Achieved 95% user satisfaction in usability testing`,
            metadata: {
              size: "1.6KB",
              created: "2023-05-15",
              modified: "2023-10-20",
              link: "https://github.com/itsCodingThing/task-manager",
              technologies: ["Vue.js", "PostgreSQL", "Socket.io", "OAuth 2.0"],
            },
          },
        ],
        metadata: {
          description: "Productivity and project management tool",
        },
      },
      {
        name: "blog-cms",
        type: "directory",
        children: [
          {
            name: "README.md",
            type: "file",
            content: `# Blog CMS

A flexible content management system for bloggers and content creators.

📝 Features
----------
• Rich text editor with markdown support
• Media management and optimization
• SEO optimization tools
• Comment system with moderation
• Category and tag management
• Social media integration
• Analytics and traffic monitoring
• Multi-author support

🛠️ Tech Stack
------------
• Frontend: Next.js, TypeScript, MDX
• Backend: Node.js, GraphQL, Prisma
• Database: PostgreSQL with Redis for caching
• Search: Elasticsearch
• Deployment: Kubernetes, Google Cloud

🎯 Highlights
------------
• Built headless CMS architecture for flexibility
• Implemented advanced SEO features for better rankings
• Created real-time collaborative editing
• Developed automated content optimization
• Achieved 99.8% uptime with proper monitoring`,
            metadata: {
              size: "1.7KB",
              created: "2023-08-25",
              modified: "2024-01-05",
              link: "https://github.com/itsCodingThing/blog-cms",
              technologies: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
            },
          },
        ],
        metadata: {
          description: "Modern content management system",
        },
      },
    ],
    metadata: {
      description: "Collection of personal projects and contributions",
    },
  },
  {
    name: "skills.txt",
    type: "file",
    content: `Technical Skills & Expertise
============================

🎨 Frontend Development
----------------------
• Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3, SASS
• Frameworks: React, Next.js, Vue.js, Angular
• Styling: Tailwind CSS, Styled Components, Material-UI
• State Management: Redux, Zustand, Context API
• Testing: Jest, React Testing Library, Cypress
• Build Tools: Webpack, Vite, Babel
• Performance: Code splitting, lazy loading, optimization

⚙️ Backend Development
-----------------------
• Languages: Node.js, Python, PHP
• Frameworks: Express.js, FastAPI, Laravel
• Databases: MongoDB, PostgreSQL, MySQL, Redis
• APIs: RESTful, GraphQL, WebSocket
• Authentication: JWT, OAuth 2.0, Passport.js
• Cloud Services: AWS, Google Cloud, Azure
• DevOps: Docker, CI/CD, GitHub Actions

🛠️ Tools & Technologies
------------------------
• Version Control: Git, GitHub, GitLab
• Design: Figma, Adobe Creative Suite
• Project Management: Jira, Trello, Asana
• Monitoring: New Relic, Sentry, Google Analytics
• Documentation: MDX, Storybook, Swagger

💡 Soft Skills
--------------
• Problem-solving and critical thinking
• Team collaboration and communication
• Project management and leadership
• Agile/Scrum methodologies
• Continuous learning and adaptation
• Client relationship management

📚 Currently Learning
--------------------
• Rust for systems programming
• WebAssembly for performance optimization
• Advanced AI/ML integration
• Microservices architecture patterns
• Blockchain and Web3 technologies

🚀 What's Next?
---------------
• Exploring serverless architectures
• Deep diving into cloud-native applications
• Learning about edge computing
• Mastering advanced TypeScript patterns
• Contributing to open-source projects`,
    metadata: {
      size: "2.5KB",
      created: "2024-01-10",
      modified: "2024-01-22",
      description: "Technical skills and competencies",
    },
  },
  {
    name: "contact.txt",
    type: "file",
    content: `Get In Touch
============

📧 Email
--------
Primary: bhanu.pratap@example.com
Work: bhanu@company.com

🌐 Social Profiles
------------------
GitHub:   github.com/itsCodingThing
LinkedIn: linkedin.com/in/itscodingthing
Twitter:  @bhanu1729
Instagram: @bhanu.singh

💼 Professional
---------------
Portfolio: itscodingthing.com
AngelList: angel.co/bhanu-pratap
Medium:   medium.com/@itscodingthing

📍 Location
----------
Currently based in: Delhi, India
Open to remote opportunities worldwide
Available for freelance projects

🤝 Let's Connect
----------------
I'm always excited to work on interesting projects and collaborate with talented people. Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!

What I can help with:
• Full-stack web development
• API design and implementation
• Code review and optimization
• Technical consulting
• Mentoring and guidance

📞 Response Time
----------------
I typically respond within 24 hours. For urgent matters, please mention it in your subject line.

Looking forward to hearing from you! 🚀

P.S. Don't forget to check out my GitHub repositories for more projects!`,
    metadata: {
      size: "1.8KB",
      created: "2024-01-12",
      modified: "2024-01-18",
      description: "Contact information and social profiles",
    },
  },
];
