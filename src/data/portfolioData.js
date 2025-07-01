// Portfolio data structure based on Flutter constants and data.json
export const portfolioData = {
  personal: {
    name: "Blink Consolidate",
    //fullName: "Muhammad Hamza",
    email: "jobs@mhmz.com",
    subtitle: [
      "Mobile App Developer",
      "Web Development",
      "UI/UX Enthusiast"
    ],
    welcomeText: "WELCOME TO!",
    // aboutHeadline: "I'm Muhammad Hamza, a Flutter developer, Technical Writer and UI/UX Designer.",
    // aboutDetails: "I'm a Final Year Computer Science student enrolled in COMSATS University, Islamabad. I have been developing mobile apps for over 1.5 years now. I have worked in teams for various startups and helped them in launching their prototypes and got valuable learning experience. I'm an active Google Developer Student Clubs (DSC) lead and also CEO/Founder Flutter Islamabad, Pakistan.",
    aboutCompany: "Blink Consolidate is the one-stop source for acquiring a wide range of IT services with a team of hardworking and skilled professionals to move businesses to the next level.Our value is not just limited to assembling teams, We own and guarantee the successful delivery of your project.Expertise in various business domains allows us to create innovative, and future-proof software solutions of any complexity."
  },
  
  socialLinks: [
    {
      platform: "facebook",
      url: "https://facebook.com/mhmzdev",
      icon: "facebook"
    },
    {
      platform: "instagram", 
      url: "https://instagram.com/mhmzdev",
      icon: "instagram"
    },
    {
      platform: "twitter",
      url: "https://twitter.com/mhmzdev", 
      icon: "twitter"
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/mhmzdev",
      icon: "linkedin"
    },
    {
      platform: "github",
      url: "https://github.com/mhmzdev",
      icon: "github"
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/923460159889",
      icon: "whatsapp"
    }
  ],

  technologies: [
    "Flutter",
    "Dart", 
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "Bootstrap"
  ],

  services: [
    {
      id: 1,
      name: "Mobile App Development", 
      description: "Android, iOS app development via Flutter",
      icon: "/assets/services/app.png",
      category: "development"
    },
    {
      id: 2,
      name: "Web Development",
      description: "Web app development via Flutter", 
      icon: "/assets/services/web.png",
      category: "development"
    },
    {
      id: 3,
      name: "UI/UX Design",
      description: "Modern UI/UX Designing",
      icon: "/assets/services/ui.png", 
      category: "design"
    },
    {
      id: 4,
      name: "Open Source - GitHub",
      description: "Open source GitHub Projects",
      icon: "/assets/services/open.png",
      category: "open-source"
    },
    {
      id: 5,
      name: "Technical Writing",
      description: "Documenting and writing technical blogs",
      icon: "/assets/services/blog.png",
      category: "writing"
    }
  ],

  projects: [
    {
      id: 1,
      title: "HereIam",
      description: "A travel social media app that allows people to share their travel experience with family and friends.",
      technologies: ["Flutter", "Firebase"],
      icon: "/assets/projects/hereiam.png",
      banner: "/assets/projects/hereiamB.png",
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 2, 
      title: "COIVD 19 - Tracker",
      description: "A live trakcer for COVID19 stats across the Globe and my Home country Pakistan. It uses APIs so the data is live.",
      technologies: ["Flutter", "API Integration"],
      icon: "/assets/projects/covid.png",
      banner: "/assets/projects/covidB.png", 
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "Messenger Chat Head UI", 
      description: "Tried to clone the famous Chat Heads by Facebook Messenger using Flutter. Its basically in-app not exactly like the original chat head.",
      technologies: ["Flutter", "UI/UX"],
      icon: "/assets/projects/messenger.png",
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 4,
      title: "flutter.dev - Flutter Web",
      description: "Flutter Official Site clone using Flutter Web. Try the live site here. For the time being its not responsive fully so there might be responsiveness issues.",
      technologies: ["Flutter Web"], 
      icon: "/assets/projects/flutter.png",
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 5,
      title: "Earbender",
      description: "A concept of Music App developed using Flutter. Having functionality of playing Audio.",
      technologies: ["Flutter", "Audio"],
      icon: "/assets/projects/earbender.png", 
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 6,
      title: "File Transfer Protocol", 
      description: "A simple GUI based Java application that sends file from Client to Server but not the other way around.",
      technologies: ["Java", "Networking"],
      icon: "/assets/projects/java.png",
      banner: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    }
  ],

  contact: {
    phone: "(+92) 346 0159889",
    email: "jobs@mhmz.com", 
    location: "Lahore, Pakistan",
    whatsapp: "https://wa.me/923460159889"
  },

  resume: {
    url: "https://drive.google.com/file/d/1FaHIzT9FigDHLx8NlxFIyQfjJTyN9WQ6/view?usp=sharing"
  },

  // Theme colors from Flutter constants
  theme: {
    primary: "#FF5722", // kPrimaryColor from Flutter
    secondary: "#2196F3",
    accent: "#FFC107", 
    dark: {
      background: "#121212",
      surface: "#1E1E1E", 
      text: "#FFFFFF",
      textSecondary: "#B0B0B0"
    },
    light: {
      background: "#FFFFFF",
      surface: "#F5F5F5",
      text: "#000000", 
      textSecondary: "#666666"
    }
  }
};

export default portfolioData;
