import { Project } from "./types";

const projects: Project[] = [
  {
    title: "Five Nights at Freddy's: Into the Pit",
    slug: "fnaf-into-the-pit",
    year: 2024,
    engine: "Unity",
    shortDescription:
      "Jump into the pit and immerse yourself in a new chapter in the Five Nights at Freddy's universe.",
    description:
      "Five Nights at Freddy's: Into the Pit is an official entry in the FNAF franchise. As part of the development team, I contributed to implementing mini-games and fixing bugs across various systems including world interactions, dialogue systems, and UI components. This was a major commercial release on Steam.",
    role: "Unity Developer",
    contributions: [
      "Implemented multiple mini-games",
      "Fixed bugs in world interactions and level scripting",
      "Debugged and improved dialogue systems",
      "Fixed UI bugs across various screens and menus",
    ],
    technologies: ["Unity", "C#", "UI Systems", "Gameplay Programming"],
    image: "/images/projects/fnaf-into-the-pit.jpg",
    images: [],
    links: {
      steam: "https://store.steampowered.com/app/2638370/Five_Nights_at_Freddys_Into_the_Pit/",
    },
    featured: true,
    status: "released",
  },
  {
    title: "WrestleQuest",
    slug: "wrestlequest",
    year: 2023,
    engine: "Unity",
    shortDescription:
      "TAG TEAM WITH DESTINY! Pro wrestling and RPG fantasy collide in the ultimate pixel powered adventure.",
    description:
      "My first big professional project as a Junior Unity Developer. WrestleQuest combines professional wrestling storytelling with classic RPG mechanics in a pixel-art world. This project was instrumental in developing my teamwork, 2D game development skills, and QA practices.",
    role: "Junior Unity Developer",
    contributions: [
      "Improved team cooperation and collaboration skills",
      "Git management and version control workflows",
      "2D game development and pixel-art integration",
      "Bug fixing and quality assurance testing",
    ],
    technologies: ["Unity", "C#", "2D Game Dev", "Git", "QA"],
    image: "/images/projects/wrestlequest.jpg",
    images: [],
    links: {
      steam: "https://store.steampowered.com/app/1867510/WrestleQuest/",
    },
    featured: true,
    status: "released",
  },
  {
    title: "Renfield: Bring Your Own Blood",
    slug: "renfield",
    year: 2023,
    engine: "Unity",
    shortDescription:
      "Slash and survive a typical workday as Dracula's overworked and underappreciated servant!",
    description:
      "A roguelite action game where you play as Renfield, Dracula's servant. I handled the Steam Workshop integration, allowing players to create and share custom content. I also contributed to weapon implementation and gameplay systems.",
    role: "Unity Developer",
    contributions: [
      "Implemented Steam Workshop integration",
      "Developed and integrated various weapons",
      "Contributed to gameplay systems",
    ],
    technologies: ["Unity", "C#", "Steam Workshop", "Steam SDK"],
    image: "/images/projects/renfield.jpg",
    images: [],
    links: {
      steam:
        "https://store.steampowered.com/app/2354600/Renfield_Bring_Your_Own_Blood/",
    },
    featured: true,
    status: "released",
  },
  {
    title: "NomelLome",
    slug: "nomelome",
    year: 2025,
    engine: "Unity",
    shortDescription: "Intermediate Dev - N/A",
    description:
      "Worked as an Intermediate Developer on NomelLome. Details about the project and my specific contributions are currently under NDA.",
    role: "Intermediate Developer",
    contributions: ["Worked on core gameplay systems"],
    technologies: ["Unity", "C#"],
    image: "/images/projects/nomelome.jpg",
    images: [],
    links: {
      website: "https://nomelome.com/",
    },
    featured: true,
    status: "released",
  },
  {
    title: "OtaChan Street Rage",
    slug: "otachan-street-rage",
    year: 2024,
    engine: "Unity",
    shortDescription: "BEAT THE CORPORATE SCUM OTA CHAN!",
    description:
      "Served as the Lead Developer on this project, working on multiple systems. I was primarily responsible for implementing the AI behavior, player mechanics, and integrating various gameplay features. The game is not publicly available — contact me for a build.",
    role: "Lead Developer",
    contributions: [
      "Led the development team",
      "Implemented AI behavior systems",
      "Developed player mechanics and controls",
      "Integrated various gameplay features",
    ],
    technologies: ["Unity", "C#", "AI Programming", "Gameplay Systems"],
    image: "/images/projects/otachan-street-rage.jpg",
    images: [],
    links: {},
    featured: false,
    status: "released",
  },
  {
    title: "Grim Days",
    slug: "grim-days",
    year: 2023,
    engine: "Unity",
    shortDescription:
      "A game made during college for Game Programming 3, Applied Game Physics, and EMC Professional Elective 1.",
    description:
      "Developed during my 3rd year of college, Grim Days was a collaborative project where I worked on guns, player gameplay, UI logic, and provided support to other teams. I initially led the development before passing leadership to a trusted classmate — the collaboration was a great learning experience.",
    role: "Lead Developer (initial), Programmer",
    contributions: [
      "Led the development team initially",
      "Implemented gun systems and weapon mechanics",
      "Developed player gameplay and controls",
      "Built UI logic and menus",
      "Cross-team support and collaboration",
    ],
    technologies: ["Unity", "C#", "UI Systems", "Gameplay Programming"],
    image: "/images/projects/grim-days.jpg",
    images: [],
    links: {
      itchIo: "https://neugamedevs.itch.io/grim-days-demo",
    },
    featured: false,
    status: "academic",
  },
  {
    title: "Isla Saga: Delve Into",
    slug: "isla-saga",
    year: 2023,
    engine: "Unity",
    shortDescription:
      "Explore Terebinth Island to retrieve valuable items, defeat bosses, and unlock new areas.",
    description:
      "A mobile and PC exploration game where players must navigate Terebinth Island, defeat bosses, and unlock new areas. I implemented the camera system that seamlessly works across both mobile and PC platforms.",
    role: "Programmer",
    contributions: [
      "Implemented cross-platform camera system",
      "Mobile and PC input handling",
      "Camera mechanics and transitions",
    ],
    technologies: ["Unity", "C#", "Mobile Development", "Camera Systems"],
    image: "/images/projects/isla-saga.jpg",
    images: [],
    links: {
      itchIo: "https://kakaroot64.itch.io/isla-saga-pgdx",
    },
    featured: false,
    status: "released",
  },
  {
    title: "Project Descended",
    slug: "project-descended",
    year: 2022,
    engine: "Unity",
    shortDescription:
      "A horror game heavily inspired by Phasmophobia, made during 2nd year college for Game Design.",
    description:
      "Led the development of this horror game inspired by Phasmophobia. This project was my introduction to 3D AI and player interaction systems. I learned crucial skills in 3D game development, AI behavior, and player-environment interaction.",
    role: "Lead Developer",
    contributions: [
      "Led the development team",
      "Implemented 3D AI behavior systems",
      "Developed player interaction mechanics",
      "Designed horror gameplay elements",
    ],
    technologies: ["Unity", "C#", "3D AI", "Player Interaction", "Horror Design"],
    image: "/images/projects/project-descended.jpg",
    images: [],
    links: {
      itchIo: "https://novalostj.itch.io/project-descended",
    },
    featured: false,
    status: "academic",
  },
  {
    title: "Relentless Ground",
    slug: "relentless-ground",
    year: 2024,
    engine: "Unity",
    shortDescription: "A 2.5D game currently in development.",
    description:
      "A 2.5D game project that is currently in development. The development has been paused due to my tight schedule, but I plan to resume work on it when possible. This project explores unique 2.5D gameplay mechanics.",
    role: "Solo Developer",
    contributions: [
      "Solo development of all systems",
      "2.5D gameplay mechanics",
      "Game design and direction",
    ],
    technologies: ["Unity", "C#", "2.5D", "Game Design"],
    image: "/images/projects/relentless-ground.jpg",
    images: [],
    links: {
      custom: [
        {
          label: "Project Page",
          url: "https://youtu.be/K2kwJo5xCI0?si=LEnEJSZKY4gRD1Yy",
        },
      ],
    },
    featured: false,
    status: "in-development",
  },
  {
    title: "Buggy Bot",
    slug: "buggy-bot",
    year: 2023,
    engine: "Unity",
    shortDescription:
      "You're a robot beetle abandoned on a junkyard — survive the chaos, but beware: your bullets might hit you back!",
    description:
      "A submission for Brackeys Game Jam 13. You play as a robot beetle abandoned on a junkyard by your mad scientist creator. The unique twist: the bullets you shoot can ricochet and hit you back, adding a layer of strategy to the survival gameplay.",
    role: "Programmer",
    contributions: [
      "Game jam rapid prototyping",
      "Core gameplay mechanics",
      "Bullet physics and ricochet system",
    ],
    technologies: ["Unity", "C#", "Game Jam", "Physics"],
    image: "/images/projects/buggy-bot.jpg",
    images: [],
    links: {
      itchIo: "https://umbrason.itch.io/buggybot",
    },
    featured: false,
    status: "game-jam",
    gameBuildPath: "buggy-bot",
  },
  {
    title: "Linear Quest Clone",
    slug: "linear-quest-clone",
    year: 2024,
    engine: "Unity",
    shortDescription: "A clone project currently in development.",
    description:
      "An in-development clone project that serves as a learning exercise to study and recreate game mechanics from existing titles. This project helps sharpen my reverse-engineering and implementation skills.",
    role: "Solo Developer",
    contributions: [
      "Game mechanics analysis and recreation",
      "Systems programming",
      "Independent development",
    ],
    technologies: ["Unity", "C#", "Systems Design"],
    image: "/images/projects/linear-quest-clone.jpg",
    images: [],
    links: {},
    featured: false,
    status: "in-development",
  },
  {
    title: "Noire",
    slug: "noire",
    year: 2023,
    engine: "Unity",
    shortDescription: "A 2D MetroidVania game — submission for Metroidvania Month 19.",
    description:
      "A 2D MetroidVania game developed as a submission for Metroidvania Month 19. As a programmer on the team, I learned and implemented State Machines for character and enemy behavior, and significantly improved my team collaboration skills.",
    role: "Programmer",
    contributions: [
      "Implemented State Machine architecture",
      "Character and enemy behavior systems",
      "Team collaboration and coordination",
    ],
    technologies: ["Unity", "C#", "State Machines", "2D Game Dev", "MetroidVania"],
    image: "/images/projects/noire.jpg",
    images: [],
    links: {
      itchIo: "https://jacobstaffordmusic.itch.io/noire",
    },
    featured: false,
    status: "game-jam",
  },
  {
    title: "Multiplayer Tetris",
    slug: "multiplayer-tetris",
    year: 2021,
    engine: "Construct",
    shortDescription:
      "A multiplayer Tetris game — went 3 steps further than the assignment required.",
    description:
      "Created during my 2nd year of college for Game Design. While the assignment only required a simple Tetris game, I decided to push further and implement multiplayer functionality. This project was my introduction to networked game development and real-time multiplayer systems.",
    role: "Solo Developer",
    contributions: [
      "Went beyond assignment requirements",
      "Implemented multiplayer networking",
      "Real-time synchronization",
      "Game design and development",
    ],
    technologies: ["Construct", "Multiplayer", "Game Design", "Networking"],
    image: "/images/projects/multiplayer-tetris.jpg",
    images: [],
    links: {
      website:
        "https://www.construct.net/en/free-online-games/multiplayer-tetris-31592/play",
    },
    featured: false,
    status: "academic",
  },
  {
    title: "Hangedman",
    slug: "hangedman",
    year: 2021,
    engine: "Unity",
    shortDescription: "A simple Hangman game made for Game Programming 2.",
    description:
      "A classic Hangman word-guessing game developed for my Game Programming 2 subject. This project helped solidify my foundational programming skills in Unity and C#.",
    role: "Solo Developer",
    contributions: [
      "Full game development",
      "Word database and game logic",
      "UI implementation",
    ],
    technologies: ["Unity", "C#", "UI", "Game Logic"],
    image: "/images/projects/hangedman.jpg",
    images: [],
    links: {
      itchIo: "https://novalostj.itch.io/hangedman",
    },
    featured: false,
    status: "academic",
  },
];

export const socialLinks = {
  twitter: "https://twitter.com/FrustratedJay",
  github: "https://github.com/novalostj",
  youtube: "https://www.youtube.com/channel/UCRcWpOD_ggbWo92a37PnRpQ",
  itchIo: "https://itch.io/profile/novalostj",
  email: "novalostj@gmail.com",
};

export const personalInfo = {
  name: "Jay",
  title: "Unity Game Developer",
  location: "Philippines",
  bio: "An experienced Unity Developer with a passion for creating immersive gameplay experiences. I've contributed to commercial releases on Steam including Five Nights at Freddy's: Into the Pit and WrestleQuest. I thrive on solving complex gameplay challenges and bringing creative visions to life through code.",
  extendedBio: `I'm Jay, a Unity Game Developer with professional experience shipping titles on Steam. My journey in game development started in college, where I pushed beyond assignments to explore multiplayer networking and advanced game systems.

Since then, I've worked on a variety of projects — from AAA-adjacent titles like Five Nights at Freddy's: Into the Pit to indie gems like WrestleQuest. I've led development teams, mentored classmates, and shipped games across multiple platforms.

I specialize in gameplay programming, AI systems, UI implementation, and rapid prototyping. Whether it's implementing complex state machines for a MetroidVania or integrating Steam Workshop for a roguelite, I bring technical depth and creative problem-solving to every project.

When I'm not coding, I'm probably participating in game jams, experimenting with new game mechanics, or playing through my ever-growing Steam backlog.`,
  skills: [
    "Unity Engine",
    "C# Programming",
    "Gameplay Systems",
    "AI Programming",
    "UI/UX Implementation",
    "2D & 3D Game Development",
    "State Machines",
    "Multiplayer Networking",
    "Steam SDK Integration",
    "Git Version Control",
    "Cross-Platform Development",
    "Rapid Prototyping",
    "Team Leadership",
    "Game Design",
  ],
};

export default projects;
