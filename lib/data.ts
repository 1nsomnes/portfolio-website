export const portfolioData = {
  navlinks: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "https://blog.cedricclaessens.com" },
    { name: "Contact", href: "#contact" },
  ],
  projects: {
    title: "My Projects",
    projects: [
      {
        title: "Sierpinskis Triangle",
        description:
          "Emergence of order out of chaos",
        image: "/projects/striangle.png",
        link: "https://github.com/1nsomnes/SierpinskisTriangle",
        tags: ["Math", "Simulation", "Unity", "C\#"],
      },
      {
        title: "Flow Fields",
        description:
          "Beautiful flowing imagery using simple principles of differential equations.",
        image: "/projects/flow.png",
        link: "https://github.com/1nsomnes/FlowFields",
        tags: ["Math", "Simulation", "Unity", "C\#"],
      },
      {
        title: "Three Body Simulation",
        description:
          "One of the most famous chaotic systems simulated and traced in several stable configurations.",
        image: "/projects/threebody.png",
        link: "https://github.com/InsomnesTutorials/ThreeBodyProblemSimulation",
        tags: ["Math", "Simulation", "Unity", "C\#"],
      },
      {
        title: "YouTube Transcriber",
        description:
          "Based off YouTube link generate transcriptions using OpenAI's state of the art \"whisper\" model.",
        image: "/placeholder.svg?height=400&width=600",
        link: "https://github.com/1nsomnes/TranscriptionApp",
        tags: ["FullStack", "Python", "HTML/CSS", "Flask", "Vue", "JavaScript"],
      },
      {
        title: "AirFoil Generator",
        description:
          "Generating and printing airfoils programatically based of NACA specs",
        image: "/projects/airfoil.png",
        link: "#",
        tags: ["Engineering", "CAD", "Python"],
      },
    ]
  },
   skills: {
    title: "Skills & Expertise",
    skillCategories: [
      {
        category: "Frontend",
        skills: [
          "HTML/CSS",
          "JavaScript",
          "React",
          "Vue",
          "Flutter"
        ],
      },
      {
        category: "Backend",
        skills: [
          "Node.js",
          "Python",
          "Flask",
          "RESTful APIs",
          "Authentication",
        ],
      },
      {
        category: "Database",
        skills: [
          "MongoDB",
          "PostgreSQL",
          "Firebase",
        ],
      },
      {
        category: "DevOps & Tools",
        skills: [
          "Git",
          "GitHub",
          "Docker",
          "AWS",
          "Testing",
        ],
      },
      {
        category: "Soft Skills",
        skills: [
          "Problem Solving",
          "Entrepreneurship",
          "Teamwork",
          "Flexible",
          "Hard Working",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Me",
    description: "Interested in working together? Feel free to reach out!",
    email: "claecedric at gmail dot com",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/cedric-claessens-412414250/",
        icon: "linkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com/1nsomnes",
        icon: "github",
      },
    ],
  },
  footer: {
    copyright: "© 2024 Your Name. All rights reserved.",
    links: [
      {
        title: "Privacy",
        href: "#",
      },
      {
        title: "Terms",
        href: "#",
      },
    ],
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com",
        icon: "github",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        icon: "twitter",
      },
    ],
  },
  
}

