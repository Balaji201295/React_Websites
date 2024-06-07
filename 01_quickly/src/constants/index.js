import {
  Brand_1,
  Brand_2,
  Brand_3,
  Brand_4,
  Icon_1,
  Icon_2,
  Icon_3,
  Icon_4,
  Icon_5,
  Icon_6,
  Icon_7,
  Icon_8,
  Person_1,
  Person_2,
  Person_3,
  Person_4,
  Person_5,
  Person_6,
  ProjectInfo_1,
  ProjectInfo_2,
  ProjectInfo_3,
  Work_1,
  Work_2,
  Work_3,
  Work_4,
} from "../assets";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// navbar

export const navItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about-us",
    title: "about us",
  },
  {
    path: "/pricing",
    title: "pricing",
  },
  {
    path: "/features",
    title: "features",
  },
];

// HomePage

export const brands = [
  {
    imgUrl: Brand_1,
  },
  {
    imgUrl: Brand_2,
  },
  {
    imgUrl: Brand_3,
  },
  {
    imgUrl: Brand_4,
  },
];

export const projectSourceItems = [
  {
    icon: Icon_1,
    title: "Unbeatable support",
    content: "We have 140 support staff on call 24/7 to support your needs.",
  },
  {
    icon: Icon_2,
    title: "Effortless integrations",
    content:
      "Integrate with over 500 popular applications with only a few clicks.",
  },
  {
    icon: Icon_3,
    title: "3D rotation features",
    content: "Flip it, completely around it’s amazing the power of three ds.",
  },
  {
    icon: Icon_4,
    title: "Robot friends are here",
    content:
      "If you feel down you can listen to the Idles with a friendly robot",
  },
];

export const projectDetailsItems = [
  {
    imgUrl: ProjectInfo_1,
    title: "Quick Project Creation",
    content:
      "Your new projects are simply a click away with our intuitive creation flow",
  },
  {
    imgUrl: ProjectInfo_2,
    title: "Effortless Collaboration",
    content:
      "Need to assign a designer to your new project, that’s easy with quickly",
  },
  {
    imgUrl: ProjectInfo_3,
    title: "Advanced Tracking",
    content:
      "Track project progress with swim lanes, road maps and other tools",
  },
];

export const projectInfoItems = [
  {
    icon: Icon_5,
    title: "Save time when designing",
    content:
      "Your new projects are simply a click away with our intuitive creation flow",
  },
  {
    icon: Icon_6,
    title: "Get updated on projects",
    content: "You receive notifications whenever a team member finishes a task",
  },
  {
    icon: Icon_7,
    title: "Works on the web",
    content: "Don’t download an application when you can just work in browser",
  },
  {
    icon: Icon_8,
    title: "Highly secure interface",
    content: "Use biometrics, 2FA and more to ensure your security in here",
  },
];

export const customerItems = [
  {
    customerName: "Tom Parsons",
    position: "VP of Product",
    content:
      "I love the flexibility of the product, we’ve been able to integrate with all the other platforms we use in product.",
  },
  {
    customerName: "Claudia Winkleman",
    position: "Product Manager",
    content:
      "This is the first time that the entire team from design to management has been in love with a tool.",
  },
  {
    customerName: "Renata Salvatore",
    position: "Director of Design",
    content:
      "Thanks so much to the team at Quickly for building something truly fun to use, and excellently equipt",
  },
];

export const footerLinks = [
  {
    title: "Our Company",
    links: [
      {
        name: "Our Team",
        path: "#",
      },
      {
        name: "Company Vision",
        path: "#",
      },
      {
        name: "Our History",
        path: "#",
      },
      {
        name: "Investorys",
        path: "#",
      },
    ],
  },
  {
    title: "Our Resources",
    links: [
      {
        name: "The Blog",
        path: "#",
      },
      {
        name: "Downloads",
        path: "#",
      },
      {
        name: "Change Log",
        path: "#",
      },
      {
        name: "Slack Channel",
        path: "#",
      },
    ],
  },
  {
    title: "Our Product",
    links: [
      {
        name: "New Features",
        path: "#",
      },
      {
        name: "Roadmap",
        path: "#",
      },
      {
        name: "Product Demo",
        path: "#",
      },
      {
        name: "Pricing",
        path: "#",
      },
    ],
  },
];

// About Us page

export const statsInfo = [
  {
    value: 32,
    title: "Cups of coffee",
    content: "Designing this section",
  },
  {
    value: 412,
    title: "Team members",
    content: "Working right now",
  },
  {
    value: 17,
    title: "Languages spoken",
    content: "On our table in the pub",
  },
  {
    value: 2142,
    title: "Dollars spent today",
    content: "On khachapuri imeruli",
  },
];

export const workImages = [
  {
    imgUrl: Work_1,
  },
  {
    imgUrl: Work_2,
  },
  {
    imgUrl: Work_3,
  },
  {
    imgUrl: Work_4,
  },
];

export const people = [
  {
    profileImg: Person_1,
    profileName: "Roberta Flack",
    position: "Chief Innovator",
    socialLinks: [
      {
        icon: FaFacebook,
        link: "https://www.facebook.com",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com",
      },
      {
        icon: FaTwitter,
        link: "https://x.com/i/flow/login",
      },
    ],
  },
  {
    profileImg: Person_2,
    profileName: "Robert Wilts",
    position: "Head of HR",
    socialLinks: [
      {
        icon: FaFacebook,
        link: "https://www.facebook.com",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com",
      },
      {
        icon: FaTwitter,
        link: "https://x.com/i/flow/login",
      },
    ],
  },
  {
    profileImg: Person_3,
    profileName: "Charlie Roberts",
    position: "Chief Innovation Officer",
    socialLinks: [
      {
        icon: FaFacebook,
        link: "https://www.facebook.com",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com",
      },
      {
        icon: FaTwitter,
        link: "https://x.com/i/flow/login",
      },
    ],
  },
  {
    profileImg: Person_4,
    profileName: "Christian Heart",
    position: "UX Writing Lead",
    socialLinks: [
      {
        icon: FaFacebook,
        link: "https://www.facebook.com",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com",
      },
      {
        icon: FaTwitter,
        link: "https://x.com/i/flow/login",
      },
    ],
  },
  {
    profileImg: Person_5,
    profileName: "Tommy Wisby",
    position: "Chief of Cutlery",
    socialLinks: [
      {
        icon: FaFacebook,
        link: "https://www.facebook.com",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com",
      },
      {
        icon: FaTwitter,
        link: "https://x.com/i/flow/login",
      },
    ],
  },
  {
    profileImg: Person_6,
    profileName: "Teddy Pendergrass",
    position: "Legendary Song Writer",
    socialLinks: [
      {
        icon: FaFacebook,
        link: "https://www.facebook.com",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com",
      },
      {
        icon: FaTwitter,
        link: "https://x.com/i/flow/login",
      },
    ],
  },
];

export const feedback = [
  {
    profileImg: Person_1,
    profileName: "Roberta Flack",
    position: "Chief Innovator",
    content:
      "Imagine the best product you’ve used, times it by ten, and you’ll have something similar",
  },
  {
    profileImg: Person_2,
    profileName: "Robert Wilts",
    position: "Head of HR",
    content:
      "I want to fly like an angel flare on a ten feet snare I want to dance until the sun comes up I want to fight your cousin.",
  },
  {
    profileImg: Person_3,
    profileName: "Charlie Roberts",
    position: "Chief Innovation Officer",
    content:
      "With Quickly, you can get more productive work done in far less time than ever before.",
  },
  {
    profileImg: Person_4,
    profileName: "Christian Heart",
    position: "UX Writing Lead",
    content:
      "This goes further than what you expected, here you can communicate two really important product features with icons.",
  },
  {
    profileImg: Person_5,
    profileName: "Tommy Wisby",
    position: "Chief of Cutlery",
    content:
      "Your new projects are simply a click away with our intuitive creation flow",
  },
  {
    profileImg: Person_6,
    profileName: "Teddy Pendergrass",
    position: "Legendary Song Writer",
    content: "You receive notifications whenever a team member finishes a task",
  },
];

export const pricingItems = [
  {
    type: "free",
    price: 19.99,
    description: "Get the main benefits of quickly for this unbelievable offer",
    benefits: [
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
    ],
  },
  {
    type: "business",
    price: 29.99,
    description: "Premium features for growing businesses and companies",
    benefits: [
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
      "No payment needed",
      "Free onboarding",
    ],
  },
  {
    type: "enterprise",
    price: 39.99,
    description: "Custom solutions for the world’s most demanding industries",
    benefits: [
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
      "All features",
      "Unlimited projects",
    ],
  },
];

export const productWorksItems = [
  {
    title: "Visually plot your roadmap",
    content: "With our intuitive layout",
  },
  {
    title: "Edit your feature backlog",
    content: "Via API or directly",
  },
  {
    title: "Effortless collaboration",
    content: "With our web based modules",
  },
  {
    title: "With our web based modules",
    content: "Not just tickets",
  },
];
